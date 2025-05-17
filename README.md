# BrandDrive BI - Business Intelligence Dashboard

A modern, responsive Business Intelligence dashboard built with Next.js, featuring user authentication, data visualization, and real-time metrics.

## Features

- 🔐 **Authentication System**
  - Cookie-based session authentication
  - Protected routes with middleware
  - Remember me functionality
  - Auto-logout after inactivity
  - Secure password handling

- 📊 **Dashboard**
  - Key metrics display
  - Interactive charts and graphs
  - Sortable and filterable data tables
  - Responsive design

- 🛠️ **Technical Stack**
  - Next.js 14 with App Router
  - TypeScript
  - Tailwind CSS for styling
  - Chart.js for data visualization
  - MSW for API mocking
  - React Hook Form for form handling
  - Zod for validation

## Authentication Implementation

### Core Components

1. **Auth Context (`lib/auth.tsx`)**
   - Manages authentication state
   - Provides login/logout functionality
   - Handles user session persistence
   - Implements inactivity timeout
   - Exposes auth hooks for components

2. **Middleware (`middleware.ts`)**
   ```typescript
   export function middleware(request: NextRequest) {
     const authToken = request.cookies.get('auth_token');
     const isAuthenticated = !!authToken;
     const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                       request.nextUrl.pathname.startsWith('/register');
     const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');

     // Redirect authenticated users away from auth pages
     if (isAuthenticated && isAuthPage) {
       return NextResponse.redirect(new URL('/dashboard', request.url));
     }

     // Redirect unauthenticated users to login
     if (!isAuthenticated && isDashboardPage) {
       return NextResponse.redirect(new URL('/login', request.url));
     }

     return NextResponse.next();
   }
   ```

3. **Mock Service Worker (MSW)**
   - Simulates backend API
   - Handles authentication requests
   - Provides mock data for development
   - Easy to switch to real API

### Authentication Flow

1. **Login Process**
   ```typescript
   const login = async (email: string, password: string, keepLoggedIn: boolean) => {
     // API call to authenticate
     const response = await fetch('/api/auth/login', {...});
     // Store user data and token
     setUser(userData);
     setIsAuthenticated(true);
     // Set cookie for middleware
     document.cookie = `auth_token=${userData.id}; path=/`;
   };
   ```

2. **Session Management**
   - Stores user data in localStorage
   - Maintains authentication state via cookies
   - Handles "Remember Me" preference
   - Implements auto-logout after inactivity

3. **Protected Routes**
   - Middleware checks for auth_token cookie
   - Redirects unauthenticated users
   - Prevents authenticated users from accessing auth pages
   - Manages session cookies

## Security Features

1. **Session Security**
   - Cookie-based session validation
   - Secure cookie handling
   - CSRF protection
   - Auto-logout after inactivity

2. **Route Protection**
   - Middleware authentication checks
   - Protected API routes
   - Secure redirects
   - Path-based access control

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd branddrive
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

5. Login with "test@example.com" as email and password "password123" or register with new credentials

## Development

### Mock API

The application uses MSW (Mock Service Worker) to simulate API endpoints. The mock handlers are located in `mocks/handlers.ts`. You can modify these handlers to test different scenarios.


## Project Structure

```
branddrive/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
├── lib/                 # Utility functions and hooks
│   ├── auth.tsx         # Authentication logic
│   └── utils.ts         # Helper functions
├── mocks/              # Mock API handlers
└── public/            # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add some new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
