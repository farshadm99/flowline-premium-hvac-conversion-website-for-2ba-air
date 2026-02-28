import React from 'react';
import { Navigate } from 'react-router-dom';
/**
 * PlaceholderPage is deprecated in Phase 10 as all implementation routes
 * (Maintenance, Troubleshooting, Services, Account, etc.) are fully built.
 * Redirecting any stray references to Home.
 */
export function PlaceholderPage() {
  return <Navigate to="/" replace />;
}