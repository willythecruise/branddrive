import { http, HttpResponse } from 'msw';

// Mock users database
const users = [
  {
    id: '1',
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User',
  },
];

export const handlers = [
  // Login handler
  http.post('/api/auth/login', async ({ request }) => {
    console.log('Mock login handler called');
    const body = await request.json() as { email: string; password: string };
    console.log('Login attempt:', { email: body.email });

    const user = users.find(
      (u) => u.email === body.email && u.password === body.password
    );

    if (!user) {
      console.log('Login failed: Invalid credentials');
      return new HttpResponse(null, { status: 401 });
    }

    console.log('Login successful:', { email: user.email });
    return HttpResponse.json({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  }),

  // Register handler
  http.post('/api/auth/register', async ({ request }) => {
    const body = await request.json() as { email: string; password: string; name: string };

    if (users.some((u) => u.email === body.email)) {
      return new HttpResponse(null, { status: 400 });
    }

    const newUser = {
      id: String(users.length + 1),
      email: body.email,
      password: body.password,
      name: body.name,
    };

    users.push(newUser);

    return HttpResponse.json({
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    });
  }),

  // Dashboard data handler
  http.get('/api/dashboard/metrics', () => {
    return HttpResponse.json({
      totalUsers: 1234,
      activeSessions: 567,
      salesRevenue: 89123,
    });
  }),

  http.get('/api/dashboard/sales', () => {
    return HttpResponse.json({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [30, 45, 35, 50, 49, 60],
    });
  }),

  http.get('/api/dashboard/users', () => {
    return HttpResponse.json({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      data: [100, 150, 200, 250, 300, 350],
    });
  }),

  http.get('/api/dashboard/categories', () => {
    return HttpResponse.json({
      labels: ['Category A', 'Category B', 'Category C', 'Category D'],
      data: [30, 25, 20, 25],
    });
  }),
]; 