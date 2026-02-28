import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, UserCircle, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
const LOGO_URL = "https://i.ibb.co/GvQ24WkQ/2BA-Logo.png";
const services = [
  { title: "Cooling", href: "/services/cooling", description: "AC Repair, Installation & Maintenance" },
  { title: "Heating", href: "/services/heating", description: "Furnace & Heating Solutions" },
  { title: "Heat Pumps", href: "/services/heat-pumps", description: "Efficient Electric Heating & Cooling" },
  { title: "Air Quality", href: "/services/indoor-air-quality", description: "Purifiers, UV Lights & Filtration" },
  { title: "Ductwork", href: "/services/ductwork", description: "Repair, Sealing & Balancing" },
  { title: "Commercial", href: "/services/commercial", description: "Light Commercial HVAC Services" },
];
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={LOGO_URL} alt="2ba Air Logo" className="h-12 w-auto object-contain" />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-semibold leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/maintenance-plans" className={({isActive}) => cn("text-sm font-medium transition-colors hover:text-primary", isActive && "text-primary font-semibold")}>
                    Maintenance
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/troubleshooting" className={({isActive}) => cn("text-sm font-medium transition-colors hover:text-primary", isActive && "text-primary font-semibold")}>
                    Troubleshooting
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/faq" className={({isActive}) => cn("text-sm font-medium transition-colors hover:text-primary", isActive && "text-primary font-semibold")}>
                    FAQ
                  </NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button disabled className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground cursor-not-allowed opacity-60">
                    <UserCircle className="h-5 w-5" />
                    Account
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Portal launching soon</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary/5">
              <a href="tel:###-###-####">
                <Phone className="mr-2 h-4 w-4" />
                (###) ###-####
              </a>
            </Button>
            <Button asChild className="hvac-cta-red hidden md:flex">
              <Link to="/contact">Request Service</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg font-semibold hover:text-primary transition-colors">Home</Link>
                  <div className="space-y-4">
                    <div className="text-lg font-semibold text-primary">Services</div>
                    <div className="grid grid-cols-1 gap-2 pl-4">
                      {services.map(s => (
                        <Link key={s.href} to={s.href} className="text-sm text-muted-foreground hover:text-primary">{s.title}</Link>
                      ))}
                    </div>
                  </div>
                  <Link to="/maintenance-plans" className="text-lg font-semibold hover:text-primary transition-colors">Maintenance</Link>
                  <Link to="/troubleshooting" className="text-lg font-semibold hover:text-primary transition-colors">Troubleshooting</Link>
                  <Link to="/faq" className="text-lg font-semibold hover:text-primary transition-colors">FAQ</Link>
                  <Link to="/reviews" className="text-lg font-semibold hover:text-primary transition-colors">Reviews</Link>
                  <Link to="/about" className="text-lg font-semibold hover:text-primary transition-colors">About</Link>
                  <Separator />
                  <Link to="/contact" className="text-lg font-bold text-destructive">Request Service</Link>
                  <a href="tel:###-###-####" className="flex items-center gap-2 text-lg font-semibold"><Phone className="h-5 w-5" />(###) ###-####</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
function Separator() {
  return <div className="h-px w-full bg-border my-2" />;
}