/**
 * auth.js - Authentication Logic for Wali Medugu Portfolio
 * Handles Supabase integration, modal UI, and profile management.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORS
    const authOverlay = document.getElementById('auth-modal-overlay');
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');
    const profileForm = document.getElementById('profile-form');
    const authTrigger = document.getElementById('auth-trigger');
    const userProfileNav = document.getElementById('user-profile-nav');
    const userDropdown = document.getElementById('user-dropdown');
    const avatarInitial = document.getElementById('avatar-initial');
    const authMessage = document.getElementById('auth-message');

    // Switch views in modal
    const switchToSignUp = document.getElementById('switch-to-signup');
    const switchToSignIn = document.getElementById('switch-to-signin');
    const signInView = document.getElementById('signin-view');
    const signUpView = document.getElementById('signup-view');
    const profileView = document.getElementById('profile-view');
    const closeBtn = document.querySelector('.close-modal');

    // Mobile Nav
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    let currentUser = null;

    // 2. INITIALIZATION
    async function initAuth() {
        try {
            if (!window.supabaseClient) {
                console.error('Supabase client not found. Connection failed.');
                return;
            }
            const { data: { session }, error } = await window.supabaseClient.auth.getSession();
            if (error) console.warn('Session check error:', error.message);
            updateUI(session?.user || null);

            // Listen for auth changes
            window.supabaseClient.auth.onAuthStateChange((event, session) => {
                updateUI(session?.user || null);
                if (event === 'SIGNED_OUT') {
                    authOverlay.classList.remove('active');
                }
            });
        } catch (err) {
            console.error('Auth initialization failed:', err);
            // Don't show modal error here to avoid annoying user on load, 
            // but log for debugging.
        }
    }

    // 3. UI STATE MANAGEMENT
    function updateUI(user) {
        currentUser = user;
        if (user) {
            authTrigger.classList.add('hidden');
            userProfileNav.classList.remove('hidden');
            const username = user.user_metadata?.username || user.email.split('@')[0];
            avatarInitial.textContent = username.charAt(0).toUpperCase();

            // Fill profile form
            if (profileForm) {
                profileForm.username.value = user.user_metadata?.username || '';
                profileForm.email.value = user.email || '';
            }
        } else {
            authTrigger.classList.remove('hidden');
            userProfileNav.classList.add('hidden');
            userDropdown.classList.remove('active');
        }
    }

    function showMessage(msg, type = 'error') {
        authMessage.textContent = msg;
        authMessage.className = `auth-message ${type}`;
        setTimeout(() => {
            authMessage.className = 'auth-message hidden';
        }, 5000);
    }

    function showSpinner(btn, show) {
        if (show) {
            btn.disabled = true;
            btn.dataset.originalText = btn.innerHTML;
            btn.innerHTML = `<span class="loading-spinner"></span> Processing...`;
        } else {
            btn.disabled = false;
            btn.innerHTML = btn.dataset.originalText;
        }
    }

    // 4. EVENT LISTENERS

    // Toggle Modal
    authTrigger.addEventListener('click', () => {
        signInView.classList.remove('hidden');
        signUpView.classList.add('hidden');
        profileView.classList.add('hidden');
        authOverlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        authOverlay.classList.remove('active');
    });

    authOverlay.addEventListener('click', (e) => {
        if (e.target === authOverlay) authOverlay.classList.remove('active');
    });

    // View Switching
    switchToSignUp.addEventListener('click', () => {
        signInView.classList.add('hidden');
        signUpView.classList.remove('hidden');
    });

    switchToSignIn.addEventListener('click', () => {
        signUpView.classList.add('hidden');
        signInView.classList.remove('hidden');
    });

    // Mobile Menu Toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Dropdown Toggle
    userProfileNav.addEventListener('click', (e) => {
        e.stopPropagation();
        userProfileNav.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        userProfileNav.classList.remove('active');
    });

    // Dropdown Actions
    document.getElementById('open-settings').addEventListener('click', () => {
        signInView.classList.add('hidden');
        signUpView.classList.add('hidden');
        profileView.classList.remove('hidden');
        authOverlay.classList.add('active');
    });

    document.getElementById('logout').addEventListener('click', async () => {
        const { error } = await window.supabaseClient.auth.signOut();
        if (error) showMessage(error.message);
    });

    // 5. AUTH ACTIONS

    // Sign Up
    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const email = signUpForm.email.value;
        const password = signUpForm.password.value;
        const username = signUpForm.username.value.trim();

        // Validation
        if (username.length <= 5) {
            showMessage('Username must be more than 5 characters.');
            return;
        }
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            showMessage('Username can only contain letters, numbers, and underscores.');
            return;
        }
        if (password.length <= 6) {
            showMessage('Password must be more than 6 characters.');
            return;
        }

        showSpinner(submitBtn, true);
        try {
            const { data, error } = await window.supabaseClient.auth.signUp({
                email,
                password,
                options: {
                    data: { username: username }
                }
            });

            if (error) {
                showMessage(error.message);
            } else if (data.session) {
                showMessage('Sign up successful!', 'success');
                setTimeout(() => authOverlay.classList.remove('active'), 1500);
            } else {
                showMessage('Verification email sent! Please check your inbox.', 'success');
            }
        } catch (err) {
            console.error('Sign up error:', err);
            showMessage('Network error: Unable to connect to authentication server. Check your connection or ad-blocker.');
        } finally {
            showSpinner(submitBtn, false);
        }
    });

    // Sign In
    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const loginVal = signInForm.email.value;
        const password = signInForm.password.value;

        showSpinner(submitBtn, true);

        try {
            // Try sign in with email
            const { error } = await window.supabaseClient.auth.signInWithPassword({
                email: loginVal,
                password: password,
            });

            if (error) {
                showMessage(error.message);
            } else {
                authOverlay.classList.remove('active');
            }
        } catch (err) {
            console.error('Sign in error:', err);
            showMessage('Network error: Failed to connect to Supabase. This could be due to an ad-blocker or no internet.');
        } finally {
            showSpinner(submitBtn, false);
        }
    });

    // Update Profile
    profileForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const username = profileForm.username.value.trim();
        const email = profileForm.email.value;
        const password = profileForm.password.value;

        // Validation
        if (username.length <= 5) {
            showMessage('Username must be more than 5 characters.');
            return;
        }
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            showMessage('Username can only contain letters, numbers, and underscores.');
            return;
        }
        if (password && password.length <= 6) {
            showMessage('New password must be more than 6 characters.');
            return;
        }

        showSpinner(submitBtn, true);

        const updates = {
            data: { username: username }
        };

        if (email !== currentUser.email) updates.email = email;
        if (password) updates.password = password;

        const { error } = await window.supabaseClient.auth.updateUser(updates);

        showSpinner(submitBtn, false);
        if (error) {
            showMessage(error.message);
        } else {
            showMessage('Profile updated successfully!', 'success');
            if (password) profileForm.password.value = '';
        }
    });

    // Delete Account
    // NOTE: Supabase client-side JS doesn't allow user-deletion directly for security (requires admin key).
    // Typically, an edge function is used. Here, we'll suggest contacting admin or we can use a table to 'mark' for deletion.
    // However, if the user explicitly asks for it and we have the service role key (dangerous) we can.
    // For now, let's implement the UI and a 'request deletion' logic or warning.
    document.getElementById('delete-account').addEventListener('click', async () => {
        if (confirm('Are you absolutely sure? This will permanently delete your account and all data. This action cannot be undone.')) {
            // For true client-side deletion, Supabase doesn't support it without Edge Functions.
            // We'll show a message instead about how this usually works or use a custom function if available.
            showMessage('Client-side account deletion requires administrative verification. Please contact support.', 'error');

            /* 
               In a real production app with Edge Functions:
               const { data, error } = await window.supabaseClient.functions.invoke('delete-user');
            */
        }
    });

    initAuth();
});
