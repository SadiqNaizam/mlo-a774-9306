import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import StatsCardGrid from './StatsCardGrid';

const chartData = [
  { name: 'March', won: 65, lost: 68 },
  { name: 'April', won: 45, lost: 40 },
  { name: 'May', won: 68, lost: 95 },
  { name: 'June', won: 82, lost: 12 },
  { name: 'July', won: 88, lost: 55 },
  { name: 'August', won: 30, lost: 98 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white border rounded-md shadow-md text-sm">
        <p className="font-semibold">{label}</p>
        <p className="text-teal-500">{`Closed won: ${payload[0].value}`}</p>
        <p className="text-red-500">{`Closed lost: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const RevenueChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <CardTitle className="mb-2">Leads tracking</CardTitle>
            <StatsCardGrid />
          </div>
          <Select defaultValue="last-6-months">
            <SelectTrigger className="w-[180px]">
              <Calendar className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-3-months">Last 3 months</SelectItem>
              <SelectItem value="last-6-months">Last 6 months</SelectItem>
              <SelectItem value="last-12-months">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend iconType="rect" iconSize={8} verticalAlign="bottom" align="left" wrapperStyle={{paddingTop: '20px'}}/>
              <Area type="monotone" dataKey="won" name="Closed won" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.1} strokeWidth={2} />
              <Area type="monotone" dataKey="lost" name="Closed lost" stroke="#ef4444" fill="#ef4444" fillOpacity={0.1} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
