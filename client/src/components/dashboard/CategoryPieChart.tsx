import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface CategoryPieChartProps {
  data: Array<{ category: string; sales: number }>;
}

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))'
];

export default function CategoryPieChart({ data }: CategoryPieChartProps) {
  return (
    <Card className="p-6" data-testid="chart-category-pie">
      <h3 className="text-lg font-semibold text-foreground mb-4">Product Category Distribution</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Market share by product category with interactive legend toggles
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ category, percent }) => `${category}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="sales"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
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
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
