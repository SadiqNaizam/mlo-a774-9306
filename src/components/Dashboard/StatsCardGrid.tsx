import React from 'react';
import StatCard from './StatCard';

interface Stat {
  value: string;
  label: string;
}

const statsData: Stat[] = [
  {
    value: '680',
    label: 'total closed',
  },
  {
    value: '70',
    label: 'total lost',
  },
];

const StatsCardGrid: React.FC = () => {
  return (
    <div className="flex items-baseline gap-6">
      {statsData.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default StatsCardGrid;
