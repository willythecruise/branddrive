'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  ArrowTrendingUpIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  BellIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// Mock data
const mockMetrics = {
  totalRevenue: 1234567,
  revenueGrowth: 12.5,
  activeUsers: 45678,
  userGrowth: 8.3,
  totalOrders: 12345,
  orderGrowth: 15.7,
  averageOrderValue: 89.99,
  orderValueGrowth: 5.7,
};

const mockSalesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 45, 35, 50, 49, 60],
      borderColor: 'rgb(79, 70, 229)',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      tension: 0.4,
    },
  ],
};

const mockUserGrowthData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'New Users',
      data: [100, 150, 200, 250, 300, 350],
      backgroundColor: 'rgba(79, 70, 229, 0.5)',
    },
  ],
};

const mockCategoryData = {
  labels: ['Category A', 'Category B', 'Category C', 'Category D'],
  datasets: [
    {
      data: [30, 25, 20, 25],
      backgroundColor: [
        'rgba(79, 70, 229, 0.5)',
        'rgba(99, 102, 241, 0.5)',
        'rgba(129, 140, 248, 0.5)',
        'rgba(165, 180, 252, 0.5)',
      ],
    },
  ],
};

const recentActivities = [
  {
    id: 1,
    type: 'order',
    message: 'New order #12345 received',
    time: '5 minutes ago',
    icon: ShoppingCartIcon,
  },
  {
    id: 2,
    type: 'user',
    message: 'New user registration',
    time: '15 minutes ago',
    icon: UsersIcon,
  },
  {
    id: 3,
    type: 'revenue',
    message: 'Daily revenue target achieved',
    time: '1 hour ago',
    icon: CurrencyDollarIcon,
  },
];

const quickActions = [
  {
    name: 'View Analytics',
    href: '/dashboard/analytics',
    icon: ChartBarIcon,
    color: 'bg-indigo-500',
  },
  {
    name: 'Manage Users',
    href: '/dashboard/customers',
    icon: UsersIcon,
    color: 'bg-green-500',
  },
  {
    name: 'Sales Overview',
    href: '/dashboard/sales',
    icon: CurrencyDollarIcon,
    color: 'bg-blue-500',
  },
  {
    name: 'Generate Report',
    href: '/dashboard/reports',
    icon: DocumentChartBarIcon,
    color: 'bg-purple-500',
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login');
      return;
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name || 'User'}!</h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickActions.map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
          >
            <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
              <action.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-medium text-gray-900">{action.name}</h3>
          </Link>
        ))}
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Revenue</h3>
            <span className="text-green-500 text-sm">+{mockMetrics.revenueGrowth}%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">${mockMetrics.totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Active Users</h3>
            <span className="text-green-500 text-sm">+{mockMetrics.userGrowth}%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{mockMetrics.activeUsers.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Total Orders</h3>
            <span className="text-green-500 text-sm">+{mockMetrics.orderGrowth}%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{mockMetrics.totalOrders.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg. Order Value</h3>
            <span className="text-green-500 text-sm">+{mockMetrics.orderValueGrowth}%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">${mockMetrics.averageOrderValue}</p>
        </div>
      </div>

      {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Sales Overview</h3>
            <Line
              data={mockSalesData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <activity.icon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 