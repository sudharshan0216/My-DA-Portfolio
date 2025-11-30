import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface MonthlyTrendChartProps {
  data: Array<{ month: string; sales: number; profit: number }>;
}

export default function MonthlyTrendChart({ data }: MonthlyTrendChartProps) {
  const formattedData = data.map(item => ({
    ...item,
    month: new Date(item.month + "-01").toLocaleDateString('en-US', { month: 'short' })
  }));

  return (
    <Card className="p-6" data-testid="chart-monthly-trend">
      <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Sales Trend</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Track sales and profit performance across the year with interactive trend visualization
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
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
          <Legend />
          <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="hsl(var(--chart-1))" 
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--chart-1))' }}
          />
          <Line 
            type="monotone" 
            dataKey="profit" 
            stroke="hsl(var(--chart-3))" 
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--chart-3))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
