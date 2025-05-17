import { setupWorker } from 'msw/browser';
import { handlers } from '@/mocks/handlers';

// Only create the worker in the browser environment
export const worker = typeof window !== 'undefined' ? setupWorker(...handlers) : null; 