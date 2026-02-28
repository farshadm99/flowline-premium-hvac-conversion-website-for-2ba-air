import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
interface PlaceholderPageProps {
  title: string;
}
export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="space-y-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="text-center py-20 bg-muted/30 rounded-[3rem] space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
          <Construction className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-primary">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          We're busy building this page to provide you with the best HVAC resources. Please check back shortly!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button asChild variant="outline" size="lg">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" className="hvac-cta-navy">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}