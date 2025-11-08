import { createClient } from '@supabase/supabase-js';

// Prefer Vite env variables so keys aren't hard-coded. Create a .env.local with these values:
// VITE_SUPABASE_URL=https://your-project-ref.supabase.co
// VITE_SUPABASE_ANON_KEY=eyJ...

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string) || 'https://athvifxkbsjxoqyqdadh.supabase.co';
const SUPABASE_ANON_KEY = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0aHZpZnhrYnNqeG9xeXFkYWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1ODg4ODAsImV4cCI6MjA3ODE2NDg4MH0.VezsOq8dKDKQ9MyvxnwP5COkrmj60ZQAahxd_6y2Fb';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
	// eslint-disable-next-line no-console
	console.warn('[supabase] Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
