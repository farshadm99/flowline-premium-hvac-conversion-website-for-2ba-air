import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, Wind, Thermometer, Zap, Factory, Waves, ChevronRight, User, Settings } from 'lucide-react';
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { BUSINESS_CONFIG } from '@/data/business-config';
const LOGO_URL = "https://i.ibb.co/GvQ24WkQ/2BA-Logo.png";
const serviceCategories = [
  {
    title: "Cooling",
    href: "/services/cooling",
    icon: Wind,
    description: "AC repair, high-efficiency installation, and ductless mini-splits.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    title: "Heating",
    href: "/services/heating",
    icon: Thermometer,
    description: "Furnace repair, new heating systems, and seasonal safety checks.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    title: "Heat Pumps",
    href: "/services/heat-pumps",
    icon: Zap,
    description: "Hybrid systems and all-electric heating and cooling solutions.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  },
  {
    title: "Ductwork & IAQ",
    href: "/services/ductwork-iaq",
    icon: Waves,
    description: "Air filtration, humidity control, and precision duct sealing.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10"
  },
  {
    title: "Thermostats",
    href: "/services/thermostats",
    icon: Settings,
    description: "Smart home controls, WiFi setup, and precision HVAC wiring.",
    color: "text-primary",
    bgColor: "bg-primary/10"
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
                    <div className="grid w-[800px] gap-4 p-6 lg:grid-cols-2">
                      {serviceCategories.map((category) => (
                        <NavigationMenuLink key={category.title} asChild>
                          <Link
                            to={category.href}
                            className="group flex items-start gap-4 select-none rounded-2xl p-4 leading-none no-underline outline-none transition-all hover:bg-accent hover:shadow-md"
                          >
                            <div className={cn("p-3 rounded-xl shrink-0 transition-transform group-hover:scale-110", category.bgColor)}>
                              <category.icon className={cn("h-6 w-6", category.color)} />
                            </div>
                            <div className="space-y-2">
                              <div className="text-base font-bold leading-none text-primary flex items-center gap-1">
                                {category.title}
                                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                              </div>
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {category.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/troubleshooting" className={({isActive}) => cn(navigationMenuTriggerStyle(), "font-semibold", isActive && "text-primary")}>
                    Guides
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/maintenance-plans" className={({isActive}) => cn(navigationMenuTriggerStyle(), "font-semibold", isActive && "text-primary")}>
                    Membership
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className={cn(navigationMenuTriggerStyle(), "font-semibold opacity-50 cursor-not-allowed flex items-center gap-1.5")}>
                          <User className="h-4 w-4" /> Account
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Portal launching Q3 2026</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                        {serviceCategories.map(s => (
                          <Link key={s.href} to={s.href} className="text-lg font-semibold hover:text-primary flex items-center justify-between">
                            {s.title}
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link to="/troubleshooting" className="text-xl font-bold hover:text-primary">Maintenance Guides</Link>
                    <Link to="/maintenance-plans" className="text-xl font-bold hover:text-primary">Membership</Link>
                    <Link to="/account" className="text-xl font-bold text-muted-foreground flex items-center justify-between">
                      Account <Badge variant="secondary" className="text-[10px]">Soon</Badge>
                    </Link>
                    <Link to="/service-areas" className="text-xl font-bold hover:text-primary">Service Area</Link>
                    <Link to="/reviews" className="text-xl font-bold hover:text-primary">Reviews</Link>
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