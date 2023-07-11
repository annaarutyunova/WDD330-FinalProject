import { createClient } from '@supabase/supabase-js';
import { userStore, route } from './stores.mjs';
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://yejorksvqshakzitkpnq.supabase.co';
const supabaseKey =
  import.meta.env.VITE_SUPABASE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllam9ya3N2cXNoYWt6aXRrcG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2ODAxMTAsImV4cCI6MjAwNDI1NjExMH0.guFkX56utJciF9QZTHvq73ULuvYiC2oFJgJX7kRYEUo';
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function signUp({ email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (data) {
    userStore.set({ user: data.user, isLoggedIn: true });
    // route.set(redirect);
    // window.history.back();
  }
  return { data, error };
}
export async function logout() {
  let { error } = await supabase.auth.signOut();
  userStore.set({ user: null, isLoggedIn: false });
  // window.history.back();
  // route.set("HOME");
  return { error };
}
export async function getSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session);
  if (session) userStore.set({ user: session.user, isLoggedIn: true });
  else userStore.set({ user: null, isLoggedIn: false });
}

export async function getUserProfile(id) {
  let { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();
  console.log(profiles);
  return profiles;
}
export async function setUserProfile(id, profile) {
  const { data, error } = await supabase
    .from('profiles')
    .update(profile)
    .eq('id', id);
  return error;
}
