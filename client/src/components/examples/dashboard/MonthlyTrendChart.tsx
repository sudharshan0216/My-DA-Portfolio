import MonthlyTrendChart from '../../dashboard/MonthlyTrendChart'

export default function MonthlyTrendChartExample() {
  const mockData = [
    { month: '2024-01', sales: 45000, profit: 12000 },
    { month: '2024-02', sales: 52000, profit: 15000 },
    { month: '2024-03', sales: 48000, profit: 13500 },
    { month: '2024-04', sales: 61000, profit: 18000 },
    { month: '2024-05', sales: 55000, profit: 16500 },
    { month: '2024-06', sales: 67000, profit: 20000 },
  ];

  return (
    <div className="p-8 bg-background">
      <MonthlyTrendChart data={mockData} />
    </div>
  );
}
