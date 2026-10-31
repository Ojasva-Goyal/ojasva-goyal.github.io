import { createClient } from "https://esm.sh/@supabase/supabase-js@2.118.0";
import { createHandler } from "./handler.ts";

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Missing server-side Supabase configuration");
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

Deno.serve(createHandler(async (email) => {
  const { data, error } = await supabase.rpc("subscribe_newsletter", { p_email: email });
  if (error || typeof data !== "boolean") {
    throw new Error("Newsletter database operation failed");
  }
  return data;
}));
