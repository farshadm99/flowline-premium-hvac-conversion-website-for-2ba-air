import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, UserCircle, ChevronRight, Wind, Thermometer, Zap, Waves, Settings, Factory } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BUSINESS_CONFIG } from '@/data/business-config';
const LOGO_URL = "https://i.ibb.co/GvQ24WkQ/2BA-Logo.png";
const serviceGroups = [
  { 
    title: "Cooling", 
    href: "/services/cooling", 
    icon: Wind,
    description: "AC repair, installation, and mini-splits.",
    items: ["AC Repair", "AC Installation", "AC Maintenance", "Mini-Splits"]
  },
  { 
    title: "Heating", 
    href: "/services/heating", 
    icon: Thermometer,
    description: "Furnaces, boilers, and heating tune-ups.",
    items: ["Furnace Repair", "Furnace Installation", "Maintenance", "Boilers"]
  },
  { 
    title: "Heat Pumps", 
    href: "/services/heat-pumps", 
    icon: Zap,
    description: "Hybrid and all-electric efficiency.",
    items: ["Repair", "Installation", "Maintenance"]
  },
  { 
    title: "Specialty", 
    href: "/services", 
    icon: Factory,
    description: "Ductwork, IAQ, and Commercial.",
    items: ["Duct Sealing", "Air Quality", "Commercial HVAC"]
  },
];
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={LOGO_URL} alt={`${BUSINESS_CONFIG.name} Logo`} className="h-14 w-auto object-contain" />
          </Link>
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavLink to="/" className={({isActive}) => cn(navigationMenuTriggerStyle(), "font-semibold", isActive && "text-primary")}>
                    Home
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[800px] gap-6 p-6 lg:grid-cols-2">
                      {serviceGroups.map((group) => (
                        <div key={group.title} className="space-y-4">
                          <NavigationMenuLink asChild>
                            <Link
                              to={group.href}
                              className="flex items-start gap-3 select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <div className="p-2 bg-primary/5 rounded-lg">
                                <group.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div className="space-y-1">
                                <div className="text-sm font-bold leading-none">{group.title}</div>
                                <p className="text-xs leading-snug text-muted-foreground">
                                  {group.description}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                          <ul className="grid grid-cols-2 gap-2 pl-12">
                            {group.items.map(item => (
                              <li key={item} className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/troubleshooting" className={({isActive}) => cn(navigationMenuTriggerStyle(), "font-semibold", isActive && "text-primary")}>
                    Maintenance Guides
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/maintenance-plans" className={({isActive}) => cn(navigationMenuTriggerStyle(), "font-semibold", isActive && "text-primary")}>
                    Membership
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/service-areas" className={({isActive}) => cn(navigationMenuTriggerStyle(), "font-semibold", isActive && "text-primary")}>
                    Service Area
                  </NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex flex-col items-end mr-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Immediate Dispatch</span>
              <a href={BUSINESS_CONFIG.phoneRaw} className="text-lg font-black text-primary hover:text-destructive transition-colors">
                {BUSINESS_CONFIG.phone}
              </a>
            </div>
            <Button asChild size="lg" className="hvac-cta-red hidden md:flex h-14 px-8 text-lg font-black tracking-tight">
              <Link to="/contact">REQUEST SERVICE</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden h-12 w-12">
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 flex flex-col">
                <SheetHeader className="p-6 border-b">
                  <SheetTitle className="text-left flex items-center gap-2">
                    <img src={LOGO_URL} alt="Logo" className="h-8 w-auto" />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto p-6">
                  <nav className="flex flex-col gap-6">
                    <Link to="/" className="text-xl font-bold hover:text-primary">Home</Link>
                    <div className="space-y-4">
                      <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">Services</div>
                      <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-primary/10">
                        {serviceGroups.map(s => (
                          <Link key={s.href} to={s.href} className="text-lg font-semibold hover:text-primary">{s.title}</Link>
                        ))}
                      </div>
                    </div>
                    <Link to="/troubleshooting" className="text-xl font-bold hover:text-primary">Maintenance Guides</Link>
                    <Link to="/maintenance-plans" className="text-xl font-bold hover:text-primary">Membership</Link>
                    <Link to="/service-areas" className="text-xl font-bold hover:text-primary">Service Area</Link>
                    <Link to="/reviews" className="text-xl font-bold hover:text-primary">Reviews</Link>
                    <Link to="/about" className="text-xl font-bold hover:text-primary">About Us</Link>
                  </nav>
                </div>
                <div className="p-6 border-t bg-muted/30 space-y-4">
                  <Button asChild className="hvac-cta-red w-full h-14 text-lg font-bold">
                    <Link to="/contact">Request Service</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full h-14 border-primary text-primary font-bold">
                    <a href={BUSINESS_CONFIG.phoneRaw}><Phone className="mr-2 h-4 w-4" /> {BUSINESS_CONFIG.phone}</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}