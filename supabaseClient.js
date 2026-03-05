// Initialize Supabase Client for frontend use
const supabaseUrl = 'https://atyylzspgxrlrbgmiiqn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0eXlsenNwZ3hybHJiZ21paXFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NDUyNzUsImV4cCI6MjA4ODMyMTI3NX0.yJKpOQ1poBVFev75aEMX51TWVRR44P3R5vVgdbuduzQ';

// Using the UMD build loaded via CDN
const client = window.supabase.createClient(supabaseUrl, supabaseKey);

// Make it available globally
window.supabaseClient = client;
console.log('Supabase client initialized successfully.');
