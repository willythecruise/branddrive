import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the auth token from cookies
  const authToken = request.cookies.get('auth_token');
  const isAuthenticated = !!authToken;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                    request.nextUrl.pathname.startsWith('/register');
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');

  console.log('Middleware check:', {
    path: request.nextUrl.pathname,
    isAuthenticated,
    isAuthPage,
    isDashboardPage,
    authToken: authToken?.value,
  });

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthPage) {
    console.log('Redirecting to dashboard');
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirect unauthenticated users to login
  if (!isAuthenticated && isDashboardPage) {
    console.log('Redirecting to login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
}; 