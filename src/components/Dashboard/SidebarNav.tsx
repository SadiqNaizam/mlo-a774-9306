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

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex-col fixed inset-y-0 z-50 bg-secondary border-r hidden md:flex">
      <div className="flex h-16 items-center px-6 border-b">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
            <Circle className="w-5 h-5 text-white fill-white" />
          </div>
        </a>
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <nav className="grid items-start gap-1">
          {mainNavItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                'justify-start gap-3',
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
        <nav className="grid items-start gap-1">
          {bottomNavItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="justify-start gap-3"
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
    </aside>
  );
};

export default SidebarNav;
