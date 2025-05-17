'use client';

import { useEffect, useState } from 'react';
import { worker } from '@/app/mocks/worker';

export function Providers({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initMsw = async () => {
      if (worker) {
        try {
          await worker.start({
            onUnhandledRequest: 'bypass',
          });
          console.log('MSW worker started');
        } catch (error) {
          console.error('Failed to start MSW worker:', error);
        }
      }
      setIsReady(true);
    };

    initMsw();
  }, []);

  if (!isReady) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
} 