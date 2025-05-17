'use client';

import { AuthProvider } from "@/lib/auth";
import { Providers } from './providers';

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <AuthProvider>
        {children}
      </AuthProvider>
    </Providers>
  );
} 