import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { SiteLayout } from '@/components/layout/SiteLayout';
import { HomePage } from '@/pages/HomePage';
import { ReviewsPage } from '@/pages/ReviewsPage';
import { ContactPage } from '@/pages/ContactPage';
import { PlaceholderPage } from '@/pages/PlaceholderPage';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <PlaceholderPage title="Our Services Hub" /> },
      { path: "services/:category", element: <PlaceholderPage title="Service Category" /> },
      { path: "services/:category/:detail", element: <PlaceholderPage title="Service Detail" /> },
      { path: "maintenance-plans", element: <PlaceholderPage title="Maintenance Plans" /> },
      { path: "troubleshooting", element: <PlaceholderPage title="Troubleshooting Guide" /> },
      { path: "faq", element: <PlaceholderPage title="Frequently Asked Questions" /> },
      { path: "about", element: <PlaceholderPage title="About 2ba Air" /> },
      { path: "service-areas", element: <PlaceholderPage title="Our Service Areas" /> },
      { path: "reviews", element: <ReviewsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "account", element: <PlaceholderPage title="Your Account (Coming Soon)" /> },
      { path: "account/*", element: <PlaceholderPage title="Account Section" /> },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)