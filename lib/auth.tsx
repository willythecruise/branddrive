'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, keepLoggedIn: boolean) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [lastActivity, setLastActivity] = useState<number>(Date.now());

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('user');
    const keepLoggedIn = localStorage.getItem('keepLoggedIn') === 'true';
    
    if (storedUser && keepLoggedIn) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }

    // Set up activity tracking
    const updateActivity = () => {
      if (isAuthenticated) {
        setLastActivity(Date.now());
      }
    };

    // Track more user activities
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, updateActivity);
    });

    // Auto logout check
    const checkInactivity = setInterval(() => {
      const keepLoggedIn = localStorage.getItem('keepLoggedIn') === 'true';
      if (!keepLoggedIn && isAuthenticated && Date.now() - lastActivity > 60000) { // 1 minute
        logout();
      }
    }, 1000);

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, updateActivity);
      });
      clearInterval(checkInactivity);
    };
  }, [lastActivity, isAuthenticated]);

  const login = async (email: string, password: string, keepLoggedIn: boolean) => {
    try {
      console.log('Attempting login with:', { email, password });
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      console.log('Login response status:', response.status);
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const userData = await response.json();
      console.log('Login successful, user data:', userData);
      
      // Set user data and authentication state
      setUser(userData);
      setIsAuthenticated(true);
      setLastActivity(Date.now()); // Update last activity on login
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('keepLoggedIn', keepLoggedIn.toString());

      // Set the auth token in a cookie for the middleware
      document.cookie = `auth_token=${userData.id}; path=/`;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Invalid email or password');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      console.log('Attempting registration with:', { name, email });
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      console.log('Registration response status:', response.status);
      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const userData = await response.json();
      console.log('Registration successful, user data:', userData);
      
      // Set user data and authentication state
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('keepLoggedIn', 'false');

      // Set the auth token in a cookie for the middleware
      document.cookie = `auth_token=${userData.id}; path=/`;
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error('Registration failed. Please try again.');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('keepLoggedIn');
    // Remove the auth token cookie
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 