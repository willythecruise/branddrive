'use client';

import { useState } from 'react';
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
  conversionRate: 3.2,
  conversionGrowth: 1.5,
  averageOrderValue: 89.99,
  orderValueGrowth: 5.7,
};

const mockRevenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [30000, 45000, 35000, 50000, 49000, 60000],
      borderColor: 'rgb(79, 70, 229)',
      backgroundColor: 'rgba(79, 70, 229, 0.1)',
      tension: 0.4,
    },
  ],
};

const mockUserData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'New Users',
      data: [1000, 1500, 2000, 2500, 3000, 3500],
      backgroundColor: 'rgba(79, 70, 229, 0.5)',
    },
  ],
};

const mockConversionData = {
  labels: ['Direct', 'Organic', 'Referral', 'Social', 'Email'],
  datasets: [
    {
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(79, 70, 229, 0.5)',
        'rgba(99, 102, 241, 0.5)',
        'rgba(129, 140, 248, 0.5)',
        'rgba(165, 180, 252, 0.5)',
        'rgba(199, 210, 254, 0.5)',
      ],
    },
  ],
};

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('month');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-1 text-sm text-gray-500">
          Detailed analytics and performance metrics
        </p>
      </div>

      {/* Time Range Selector */}
      <div className="mb-6">
        <div className="inline-flex rounded-md shadow-sm">
          {['week', 'month', 'quarter', 'year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-sm font-medium ${
                timeRange === range
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 ${
                range === 'week' ? 'rounded-l-md' : ''
              } ${
                range === 'year' ? 'rounded-r-md' : ''
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Grid */}
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
            <h3 className="text-gray-500 text-sm">Conversion Rate</h3>
            <span className="text-green-500 text-sm">+{mockMetrics.conversionGrowth}%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{mockMetrics.conversionRate}%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 text-sm">Avg. Order Value</h3>
            <span className="text-green-500 text-sm">+{mockMetrics.orderValueGrowth}%</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">${mockMetrics.averageOrderValue}</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Revenue Trends</h3>
          <Line
            data={mockRevenueData}
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
                  ticks: {
                    callback: (value) => `$${value.toLocaleString()}`,
                  },
                },
              },
            }}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">User Growth</h3>
          <Bar
            data={mockUserData}
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
                  ticks: {
                    callback: (value) => value.toLocaleString(),
                  },
                },
              },
            }}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Traffic Sources</h3>
          <Doughnut
            data={mockConversionData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
            }}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Key Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-medium text-indigo-900">Revenue Growth</h4>
              <p className="text-sm text-indigo-700">
                Revenue has increased by {mockMetrics.revenueGrowth}% compared to last {timeRange}.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900">User Engagement</h4>
              <p className="text-sm text-green-700">
                Active users have grown by {mockMetrics.userGrowth}% this {timeRange}.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-900">Conversion Rate</h4>
              <p className="text-sm text-purple-700">
                Conversion rate improved by {mockMetrics.conversionGrowth}% points.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 