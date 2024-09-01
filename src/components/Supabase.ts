import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY } from "@env";

const supabaseUrl = "https://eybfcsmhjlmjoioyyonx.supabase.co";
const supabaseKey = SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
