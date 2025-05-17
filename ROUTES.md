# BrandDrive Dashboard Routes Documentation

## Overview
The BrandDrive dashboard is built using Next.js 13+ with the App Router pattern. This documentation outlines the implementation details of each route and its components.

## Route Structure
```
/dashboard
├── /analytics
├── /customers
├── /products
├── /reports
├── /sales
├── /settings
└── layout.tsx
```

## Authentication
All dashboard routes are protected by authentication middleware. Users must be logged in to access any dashboard route. The authentication state is managed through the `AuthProvider` context.

## Route Details

### Dashboard Layout (`/dashboard/layout.tsx`)
The main layout component that wraps all dashboard pages. It provides:
- Sidebar navigation
- User profile section
- Notification system
- Responsive design with collapsible sidebar

### Analytics Page (`/dashboard/analytics`)
**Purpose**: Provides comprehensive business analytics and insights.

**Features**:
- Time range selector (week/month/quarter/year)
- Key metrics display
- Multiple chart types:
  - Revenue trends (Line chart)
  - User growth (Bar chart)
  - Traffic sources (Doughnut chart)
- Key insights section

**State Management**:
- `timeRange`: Controls the time period for displayed data
- Chart configurations using Chart.js

### Customers Page (`/dashboard/customers`)
**Purpose**: Customer management and analytics.

**Features**:
- Customer search functionality
- Filtering options
- Customer statistics:
  - Total customers
  - Active customers
  - Average order value
- Sortable customer table with columns:
  - Name
  - Email
  - Status
  - Last Purchase
  - Total Spent
  - Orders

**State Management**:
- `searchQuery`: Manages search input
- `sortField`: Current sort column
- `sortDirection`: Sort direction (asc/desc)

### Products Page (`/dashboard/products`)
**Purpose**: Product inventory and performance management.

**Features**:
- Product search and category filtering
- Category statistics with growth indicators
- Product table with columns:
  - Product name
  - Category
  - Price
  - Stock
  - Sales
  - Revenue
  - Growth
- Action buttons for edit and delete operations

**State Management**:
- `searchQuery`: Product search input
- `selectedCategory`: Current category filter

### Reports Page (`/dashboard/reports`)
**Purpose**: Report generation and management.

**Features**:
- Report type selection:
  - Sales Report
  - Customer Report
  - Product Report
  - Analytics Report
- Report configuration:
  - Date range selection
  - Format selection (PDF/Excel/CSV)
- Report history table
- Download functionality

**State Management**:
- `selectedReport`: Currently selected report type
- `dateRange`: Selected time period

### Sales Page (`/dashboard/sales`)
**Purpose**: Sales performance tracking and analysis.

**Features**:
- Time range selector
- Key metrics:
  - Total Revenue
  - Total Orders
  - Average Order Value
  - Active Customers
- Charts:
  - Revenue trends
  - Order volume
- Recent transactions table

**State Management**:
- `timeRange`: Controls the time period for displayed data
- Chart configurations using Chart.js

### Settings Page (`/dashboard/settings`)
**Purpose**: User and application settings management.

**Features**:
- Tabbed interface:
  - Profile
  - Notifications
  - Security
  - Billing
- Profile information management
- Notification preferences
- Security settings (2FA, password)
- Billing information

**State Management**:
- `activeTab`: Current settings tab
- `notifications`: Notification preferences state

## Data Management
Each route uses mock data for demonstration purposes. In a production environment, these should be replaced with:
- API calls to backend services
- Real-time data updates where applicable
- Proper error handling and loading states

## Styling
The dashboard uses:
- Tailwind CSS for styling
- Heroicons for icons
- Chart.js for data visualization
- Responsive design patterns

