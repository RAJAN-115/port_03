'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Blog, Briefcase, Code2, Home, LucideIcon, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

// Types
interface MobileNavProps {
  routes: { href: string; label: string }[];
}

// Constants
const ROUTE_ICONS: Record<string, LucideIcon> = {
  '/': Home,
  '/about': User,
  '/skills': Code2,
  '/projects': Code2,
  '/experience': Briefcase,
  '/contact': Mail,
  '/blog': Blog,
} as const;

const ANIMATION_CONFIG = {
  active: {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  inactive: {
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

// Components
const NavItem: React.FC<{
  route: { href: string; label: string };
  isActive: boolean;
}> = ({ route, isActive }) => {
  const IconComponent = ROUTE_ICONS[route.href];
  if (!IconComponent) return null;

  return (
    <Link
      href={route.href}
      className={cn(
        'flex flex-col items-center justify-center gap-1 px-2 py-1.5 rounded-lg transition-all duration-200',
        'hover:bg-accent/50 active:scale-95',
        isActive ? 'text-purple-600' : 'text-muted-foreground hover:text-foreground'
      )}
      aria-current={isActive ? 'page' : undefined}
      aria-label={route.label}
    >
      <motion.div
        animate={isActive ? 'active' : 'inactive'}
        variants={ANIMATION_CONFIG}
        className="relative"
      >
        <IconComponent className="h-5 w-5" />
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute -bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-purple-600"
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
        )}
      </motion.div>
      <Typography variant="caption" className="text-xs font-medium">
        {route.label}
      </Typography>
    </Link>
  );
};

export function MobileNav({ routes }: MobileNavProps) {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 50], [1, 0.8]);

  // Filter routes to show only main navigation items
  const mainRoutes = routes.filter(route =>
    ['/', '/about', '/skills', '/projects', '/experience', '/blog', '/contact'].includes(route.href)
  );

  return (
    <div className="md:hidden">
      {/* Main Content Padding */}
      <div className="pb-16" />

      {/* Bottom Navigation Bar */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur-sm"
      >
        {/* Safe Area Padding for iOS */}
        <div className="pb-safe">
          <div className="grid grid-cols-6 items-center justify-items-center px-2 py-1.5">
            {mainRoutes.map(route => (
              <NavItem key={route.href} route={route} isActive={pathname === route.href} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
