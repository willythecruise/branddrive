'use client';

import { useState } from 'react';
import {
  DocumentArrowDownIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UsersIcon,
  ShoppingCartIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

// Mock report types
const reportTypes = [
  {
    id: 'sales',
    name: 'Sales Report',
    description: 'Detailed analysis of sales performance',
    icon: CurrencyDollarIcon,
    color: 'bg-blue-500',
  },
  {
    id: 'customers',
    name: 'Customer Report',
    description: 'Customer demographics and behavior',
    icon: UsersIcon,
    color: 'bg-green-500',
  },
  {
    id: 'products',
    name: 'Product Report',
    description: 'Product performance and inventory',
    icon: ShoppingCartIcon,
    color: 'bg-purple-500',
  },
  {
    id: 'analytics',
    name: 'Analytics Report',
    description: 'Comprehensive business analytics',
    icon: ChartBarIcon,
    color: 'bg-indigo-500',
  },
];

// Mock report history
const reportHistory = [
  {
    id: 1,
    name: 'Monthly Sales Report',
    type: 'sales',
    date: '2024-03-15',
    status: 'Completed',
    size: '2.5 MB',
  },
  {
    id: 2,
    name: 'Customer Demographics',
    type: 'customers',
    date: '2024-03-14',
    status: 'Completed',
    size: '1.8 MB',
  },
  {
    id: 3,
    name: 'Product Performance Q1',
    type: 'products',
    date: '2024-03-13',
    status: 'Processing',
    size: '3.2 MB',
  },
];

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState('');
  const [dateRange, setDateRange] = useState('month');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="mt-1 text-sm text-gray-500">
          Generate and manage your business reports
        </p>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {reportTypes.map((report) => (
          <div
            key={report.id}
            className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer ${
              selectedReport === report.id ? 'ring-2 ring-indigo-500' : ''
            }`}
            onClick={() => setSelectedReport(report.id)}
          >
            <div className={`${report.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <report.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">{report.name}</h3>
            <p className="mt-1 text-sm text-gray-500">{report.description}</p>
          </div>
        ))}
      </div>

      {/* Report Configuration */}
      {selectedReport && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Configure {reportTypes.find((r) => r.id === selectedReport)?.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Range</label>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="week">Last 7 days</option>
                <option value="month">Last 30 days</option>
                <option value="quarter">Last 90 days</option>
                <option value="year">Last 365 days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Format</label>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue="pdf"
              >
                <option value="pdf">PDF</option>
                <option value="excel">Excel</option>
                <option value="csv">CSV</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              Generate Report
            </button>
          </div>
        </div>
      )}

      {/* Report History */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reportHistory.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{report.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {reportTypes.find((t) => t.id === report.type)?.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{report.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        report.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <DocumentArrowDownIcon className="h-5 w-5" />
                    </button>
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