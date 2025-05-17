'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import { 
  ChartBarIcon, 
  PresentationChartLineIcon, 
  DocumentChartBarIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
  UserGroupIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-white">
      {/* Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <ChartBarIcon className="h-8 w-8 text-indigo-600 animate-pulse" />
                <SparklesIcon className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">BrandDrive BI</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">About</Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</Link>
              <Link 
                href="/login" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="inline-block mb-4">
        
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Data into <br />
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Actionable Insights</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Powerful business intelligence tools to help you make data-driven decisions and drive growth
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/login" 
                className="group bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Get Started
                <RocketLaunchIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/demo" 
                className="text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to make data-driven decisions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <PresentationChartLineIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
              <p className="text-gray-600">Monitor your business metrics in real-time with interactive dashboards</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <DocumentChartBarIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Reports</h3>
              <p className="text-gray-600">Create and share custom reports tailored to your business needs</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="bg-pink-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <ArrowTrendingUpIcon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
              <p className="text-gray-600">Track KPIs and performance metrics across your organization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Start with a free trial, no credit card required</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 -mt-16 -mx-8 p-8 rounded-t-xl">
                <h3 className="text-2xl font-semibold text-white mb-2">Starter</h3>
                <p className="text-4xl font-bold text-white mb-2">$49<span className="text-lg text-white/80">/month</span></p>
              </div>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center">
                  <ChartPieIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  Basic Analytics
                </li>
                <li className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  Up to 5 users
                </li>
                <li className="flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  Standard Reports
                </li>
              </ul>
              <Link 
                href="/login" 
                className="mt-8 block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-indigo-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 -mt-16 -mx-8 p-8 rounded-t-xl">
                <h3 className="text-2xl font-semibold text-white mb-2">Professional</h3>
                <p className="text-4xl font-bold text-white mb-2">$99<span className="text-lg text-white/80">/month</span></p>
              </div>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center">
                  <ChartPieIcon className="h-5 w-5 text-purple-600 mr-2" />
                  Advanced Analytics
                </li>
                <li className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 text-purple-600 mr-2" />
                  Up to 20 users
                </li>
                <li className="flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-purple-600 mr-2" />
                  Custom Reports
                </li>
              </ul>
              <Link 
                href="/login" 
                className="mt-8 block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="bg-gradient-to-r from-pink-600 to-rose-600 -mt-16 -mx-8 p-8 rounded-t-xl">
                <h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
                <p className="text-4xl font-bold text-white mb-2">$299<span className="text-lg text-white/80">/month</span></p>
              </div>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center">
                  <ChartPieIcon className="h-5 w-5 text-pink-600 mr-2" />
                  Enterprise Analytics
                </li>
                <li className="flex items-center">
                  <UserGroupIcon className="h-5 w-5 text-pink-600 mr-2" />
                  Unlimited users
                </li>
                <li className="flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-pink-600 mr-2" />
                  Advanced Reports
                </li>
              </ul>
              <Link 
                href="/login" 
                className="mt-8 block text-center bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-lg hover:from-pink-700 hover:to-rose-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ChartBarIcon className="h-8 w-8 text-indigo-400" />
                <span className="text-xl font-bold text-white">BrandDrive BI</span>
              </div>
              <p className="text-gray-400">Transform your data into actionable insights</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-400">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Features</li>
                <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-400">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">About</li>
                <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-400">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Support</li>
                <li className="hover:text-white transition-colors cursor-pointer">Sales</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BrandDrive BI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
