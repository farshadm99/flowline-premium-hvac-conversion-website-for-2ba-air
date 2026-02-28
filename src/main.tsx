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
import { ServicesHub } from '@/pages/services/ServicesHub';
import { CategoryHub } from '@/pages/services/CategoryHub';
import { ServiceDetail } from '@/pages/services/ServiceDetail';
import { AboutPage } from '@/pages/AboutPage';
import { ServiceAreasPage } from '@/pages/ServiceAreasPage';
import { ContactPage } from '@/pages/ContactPage';
import { AccountPage } from '@/pages/AccountPage';
import { TroubleshootingPage } from '@/pages/TroubleshootingPage';
import { FAQPage } from '@/pages/FAQPage';
import { MaintenancePlansPage } from '@/pages/MaintenancePlansPage';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesHub /> },
      { path: "services/:category", element: <CategoryHub /> },
      { path: "services/:category/:detail", element: <ServiceDetail /> },
      { path: "maintenance-plans", element: <MaintenancePlansPage /> },
      { path: "troubleshooting", element: <TroubleshootingPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "service-areas", element: <ServiceAreasPage /> },
      { path: "reviews", element: <ReviewsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "account", element: <AccountPage /> },
      { path: "account/*", element: <AccountPage /> },
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