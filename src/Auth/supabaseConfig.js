
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://zirqugazjznsflpdokqn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppcnF1Z2F6anpuc2ZscGRva3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1MzA3NDYsImV4cCI6MjAyNzEwNjc0Nn0.aT_Y7DPkFAAqe_SYzhALe7lx0n92rDXq5BYZdgi9Eok';

export const supabase = createClient(supabaseUrl, supabaseKey);
