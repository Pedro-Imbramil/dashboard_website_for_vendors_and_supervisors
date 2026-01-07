'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        window.location.href = '/login';
      } else {
        setUser(data.user);
        setLoading(false);
      }
    });
  }, []);

  if (loading) return null;

  return (
    <div className="p-10">
      <h1 className="text-2xl">Bem-vindo</h1>
      <p>{user.email}</p>
    </div>
  );
}
