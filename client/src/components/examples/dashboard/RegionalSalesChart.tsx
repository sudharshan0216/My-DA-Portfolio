import { useState } from 'react';
import RegionalSalesChart from '../../dashboard/RegionalSalesChart'

export default function RegionalSalesChartExample() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const mockData = [
    { region: 'North', sales: 125000 },
    { region: 'South', sales: 98000 },
    { region: 'East', sales: 142000 },
    { region: 'West', sales: 110000 },
  ];

  return (
    <div className="p-8 bg-background">
      <RegionalSalesChart 
        data={mockData} 
        onRegionClick={setSelectedRegion}
        selectedRegion={selectedRegion}
      />
    </div>
  );
}
