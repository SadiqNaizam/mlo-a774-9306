import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface ReasonStatProps {
  percentage: number;
  reason: string;
}

const ReasonStat: React.FC<ReasonStatProps> = ({ percentage, reason }) => (
  <div>
    <p className="text-4xl font-semibold text-foreground">{percentage}%</p>
    <p className="text-sm text-muted-foreground mt-1">{reason}</p>
  </div>
);

const OtherStatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-y-8 gap-x-4">
          <ReasonStat percentage={40} reason="The proposal is unclear" />
          <ReasonStat percentage={20} reason="However venture pursuit" />
          <ReasonStat percentage={10} reason="Other" />
          <ReasonStat percentage={30} reason="The proposal is unclear" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4 items-start pt-4">
          <div>
            <p className="text-4xl font-semibold text-foreground">900</p>
            <p className="text-sm text-muted-foreground mt-1">total leads count</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-foreground">12</p>
            <p className="text-sm text-muted-foreground mt-1">days in average to convert lead</p>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-semibold text-foreground">30</p>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Leads with no activity for 30+ days.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </div>
            <p className="text-sm text-muted-foreground mt-1">inactive leads</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OtherStatsGrid;
