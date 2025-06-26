import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won' as const;
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: 'bg-indigo-900' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-600' },
];

const totalCount = funnelData.reduce((acc, stage) => acc + stage.count, 0);

const FunnelCountTable: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
        <CardDescription className="text-4xl font-semibold text-foreground pt-2">600 <span className="text-base font-normal text-muted-foreground">active leads</span></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex h-2 rounded-full overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={stage.color}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>
        <div className="space-y-4">
          {funnelData.map((stage) => (
            <div key={stage.name} className="grid grid-cols-4 items-center text-sm font-medium">
              <div className="flex items-center gap-2 col-span-2">
                <span className={`h-2 w-2 rounded-full ${stage.color}`}></span>
                <span className="text-secondary-foreground">{stage.name}</span>
              </div>
              <span className="text-muted-foreground text-right">{stage.count}</span>
              <div className="flex items-center justify-end gap-1 text-right">
                <span className="text-muted-foreground">$ {stage.value}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-muted-foreground cursor-pointer">{stage.duration}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Average time on this stage</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCountTable;
