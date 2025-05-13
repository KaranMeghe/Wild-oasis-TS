/** @format */

import { createClient } from '@supabase/supabase-js';

const supabaseKey = import.meta.env.VITE_API_KEY;
const supabaseUrl = 'https://qtdgtaymlzprwlnrpxhb.supabase.co';
export const supabase = createClient(supabaseUrl, supabaseKey);
