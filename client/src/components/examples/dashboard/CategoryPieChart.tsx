import CategoryPieChart from '../../dashboard/CategoryPieChart'

export default function CategoryPieChartExample() {
  const mockData = [
    { category: 'Electronics', sales: 180000 },
    { category: 'Furniture', sales: 120000 },
    { category: 'Office Supplies', sales: 95000 },
    { category: 'Technology', sales: 145000 },
  ];

  return (
    <div className="p-8 bg-background">
      <CategoryPieChart data={mockData} />
    </div>
  );
}
