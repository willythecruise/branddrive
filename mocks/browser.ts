import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Create and export the worker instance only in browser environment
export const worker = typeof window !== 'undefined' ? setupWorker(...handlers) : null;

// Start the worker when this module is loaded in browser environment
if (typeof window !== 'undefined' && worker) {
  worker.start({
    onUnhandledRequest: 'bypass',
  }).catch((error) => {
    console.error('Failed to start MSW worker:', error);
  });
} 