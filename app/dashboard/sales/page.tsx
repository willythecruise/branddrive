'use client';

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Mock data
const salesMetrics = {
  totalRevenue: 1234567,
  revenueGrowth: 12.5,
  totalOrders: 12345,
  orderGrowth: 8.3,
  averageOrderValue: 89.99,
  orderValueGrowth: 5.7,
};

const salesData = {
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

const orderData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Orders',
      data: [1000, 1500, 2000, 2500, 3000, 3500],
      backgroundColor: 'rgba(79, 70, 229, 0.5)',
    },
  ],
};

const recentTransactions = [
  {
    id: 1,
    customer: 'John Doe',
    amount: 123.45,
    status: 'Completed',
    date: '2024-03-15',
  },
  {
    id: 2,
    customer: 'Jane Smith',
    amount: 234.56,
    status: 'Completed',
    date: '2024-03-14',
  },
  {
    id: 3,
    customer: 'Bob Johnson',
    amount: 345.67,
    status: 'Pending',
    date: '2024-03-13',
  },
];

export default function SalesPage() {
  const [timeRange, setTimeRange] = useState('month');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Sales</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track your sales performance and revenue
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

      {/* Sales Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                ${salesMetrics.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-indigo-50 rounded-full">
              <CurrencyDollarIcon className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 flex items-center">
              <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
              {salesMetrics.revenueGrowth}%
            </span>
            <span className="text-gray-500 ml-2">vs last {timeRange}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {salesMetrics.totalOrders.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <ShoppingCartIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 flex items-center">
              <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
              {salesMetrics.orderGrowth}%
            </span>
            <span className="text-gray-500 ml-2">vs last {timeRange}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Average Order Value</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                ${salesMetrics.averageOrderValue}
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <ChartBarIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 flex items-center">
              <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
              {salesMetrics.orderValueGrowth}%
            </span>
            <span className="text-gray-500 ml-2">vs last {timeRange}</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Customers</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">1,234</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <UserGroupIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 flex items-center">
              <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
              8.3%
            </span>
            <span className="text-gray-500 ml-2">vs last {timeRange}</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Revenue Trends</h3>
          <Line
            data={salesData}
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
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Order Volume</h3>
          <Bar
            data={orderData}
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
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{transaction.customer}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${transaction.amount.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        transaction.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 