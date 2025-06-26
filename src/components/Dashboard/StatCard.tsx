import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string | number;
  label: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, className }) => {
  return (
    <div className={cn('flex items-baseline gap-2', className)}>
      <span className="text-5xl font-semibold tracking-tight">{value}</span>
      <span className="text-base font-medium text-muted-foreground">{label}</span>
    </div>
  );
};

export default StatCard;
