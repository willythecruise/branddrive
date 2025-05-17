# BrandDrive BI - Business Intelligence Dashboard

A modern, responsive Business Intelligence dashboard built with Next.js, featuring user authentication, data visualization, and real-time metrics.

## Features

- 🔐 User Authentication
  - Login with email and password
  - Registration with form validation
  - Auto-logout after 1 minute of inactivity (configurable)
  - "Keep me logged in" option

- 📊 Dashboard
  - Key metrics display
  - Interactive charts and graphs
  - Sortable and filterable data tables
  - Responsive design

- 🛠️ Technical Stack
  - Next.js 14 with App Router
  - TypeScript
  - Tailwind CSS for styling
  - Chart.js for data visualization
  - MSW for API mocking
  - React Hook Form for form handling
  - Zod for validation

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

## Development

### Mock API

The application uses MSW (Mock Service Worker) to simulate API endpoints. The mock handlers are located in `mocks/handlers.ts`. You can modify these handlers to test different scenarios.

### Authentication

The authentication system is implemented using React Context and localStorage. In a production environment, you should:

1. Replace the mock API calls with real backend endpoints
2. Implement proper session management
3. Add CSRF protection
4. Use secure HTTP-only cookies for authentication

### Styling

The application uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.js`.

## Project Structure

```
branddrive/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
├── lib/                 # Utility functions and hooks
├── mocks/              # Mock API handlers
└── public/            # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
