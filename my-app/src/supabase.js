import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fwlupwuqvhhdzqensuqq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3bHVwd3VxdmhoZHpxZW5zdXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMDg4NjQsImV4cCI6MjA1Njc4NDg2NH0.k2--WA6l6Hlpl_RIXlFEfjYSOHy-HVzMyd3LpwI84ak';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase; // Use default export
