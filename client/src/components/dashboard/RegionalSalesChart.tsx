import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface RegionalSalesChartProps {
  data: Array<{ region: string; sales: number }>;
  onRegionClick?: (region: string) => void;
  selectedRegion?: string | null;
}

export default function RegionalSalesChart({ data, onRegionClick, selectedRegion }: RegionalSalesChartProps) {
  const handleClick = (data: any) => {
    if (onRegionClick) {
      onRegionClick(data.region === selectedRegion ? null : data.region);
    }
  };

  return (
    <Card className="p-6" data-testid="chart-regional-sales">
      <h3 className="text-lg font-semibold text-foreground mb-4">Sales by Region</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Click on a region to filter other charts. Regional performance comparison.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="region" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '6px',
              color: 'hsl(var(--foreground))'
            }}
            formatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Bar 
            dataKey="sales" 
            onClick={handleClick}
            cursor="pointer"
            radius={[6, 6, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={entry.region === selectedRegion ? 'hsl(var(--chart-4))' : 'hsl(var(--chart-1))'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
