import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  FileStack,
  ShoppingCart,
  Mail,
  Archive,
  Calendar,
  Settings,
  HelpCircle,
  Circle,
} from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
}

const mainNavItems: NavItem[] = [
  { label: 'Dashboard', icon: LayoutGrid, href: '#', active: true },
  { label: 'Leads', icon: Users, href: '#' },
  { label: 'Customers', icon: User, href: '#' },
  { label: 'Proposals', icon: FileText, href: '#' },
  { label: 'Invoices', icon: FileStack, href: '#' },
  { label: 'Items', icon: ShoppingCart, href: '#' },
  { label: 'Mail', icon: Mail, href: '#' },
  { label: 'Sheebox', icon: Archive, href: '#' },
  { label: 'Calendar', icon: Calendar, href: '#' },
];

const bottomNavItems: NavItem[] = [
  { label: 'Settings', icon: Settings, href: '#' },
  { label: 'Help', icon: HelpCircle, href: '#' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="flex h-full flex-col bg-secondary text-secondary-foreground">
      <div className="flex h-16 shrink-0 items-center border-b px-6">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
            <Circle className="w-5 h-5 text-white fill-white" />
          </div>
        </a>
      </div>
      <div className="flex flex-1 flex-col justify-between overflow-y-auto">
        <nav className="grid items-start gap-1 p-4">
          {mainNavItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                'justify-start gap-3 text-secondary-foreground',
                item.active && 'bg-primary/10 text-primary'
              )}
              asChild
            >
              <a href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            </Button>
          ))}
        </nav>
        <nav className="grid items-start gap-1 p-4 border-t">
          {bottomNavItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="justify-start gap-3 text-secondary-foreground"
              asChild
            >
              <a href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
