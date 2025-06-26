import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FunnelCountTable from '@/components/Dashboard/FunnelCountTable';
import SourcesPieChart from '@/components/Dashboard/SourcesPieChart';
import RevenueChart from '@/components/Dashboard/RevenueChart';
import OtherStatsGrid from '@/components/Dashboard/OtherStatsGrid';

const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="bg-transparent p-0 h-auto justify-start border-b rounded-none gap-6">
          <TabsTrigger
            value="sales"
            className="p-0 pb-3 bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary -mb-px"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger
            value="leads"
            className="p-0 pb-3 bg-transparent text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none rounded-none data-[state=active]:border-b-2 data-[state=active]:border-primary -mb-px"
          >
            Leads
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="mt-6">
          <div className="flex items-center justify-center h-96 rounded-lg border border-dashed">
            <p className="text-muted-foreground">Sales dashboard content will be displayed here.</p>
          </div>
        </TabsContent>

        <TabsContent value="leads" className="mt-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2">
                <FunnelCountTable />
              </div>
              <div className="lg:col-span-3">
                <SourcesPieChart />
              </div>
            </div>
            <RevenueChart />
            <OtherStatsGrid />
          </div>
        </TabsContent>
      </Tabs>
    </MainAppLayout>
  );
};

export default IndexPage;
