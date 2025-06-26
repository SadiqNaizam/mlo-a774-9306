import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SourceData {
  name: string;
  value: number;
  deals: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 3000, deals: 50, percentage: 50, color: '#f87171' },
  { name: 'Behance', value: 1000, deals: 25, percentage: 40, color: '#facc15' },
  { name: 'Instagram', value: 1000, deals: 15, percentage: 10, color: '#312e81' },
  { name: 'Dribbble', value: 1000, deals: 10, percentage: 10, color: '#6ee7b7' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return null; // Labels are in the legend, not on the pie chart
};

const SourcesPieChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'came' | 'converted' | 'size'>('converted');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sources</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Tooltip
                    contentStyle={{ 
                        background: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '0.5rem',
                    }}
                    formatter={(value: number, name: string) => [`$${value}`, name]}
                />
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          {data.map((source) => (
            <div key={source.name} className="grid grid-cols-3 items-center text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: source.color }}></span>
                <span>{source.name}</span>
              </div>
              <span className="text-muted-foreground text-right">$ {source.value}</span>
              <span className="text-muted-foreground text-right">{source.percentage}%</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center space-x-2 bg-secondary py-2 rounded-b-lg">
        <Button variant={activeTab === 'came' ? 'secondary' : 'ghost'} className={cn(activeTab === 'came' && 'bg-white shadow-sm')} onClick={() => setActiveTab('came')}>Leads came</Button>
        <Button variant={activeTab === 'converted' ? 'secondary' : 'ghost'} className={cn(activeTab === 'converted' && 'bg-white shadow-sm')} onClick={() => setActiveTab('converted')}>Leads Converted</Button>
        <Button variant={activeTab === 'size' ? 'secondary' : 'ghost'} className={cn(activeTab === 'size' && 'bg-white shadow-sm')} onClick={() => setActiveTab('size')}>Total deals size</Button>
      </CardFooter>
    </Card>
  );
};

export default SourcesPieChart;
