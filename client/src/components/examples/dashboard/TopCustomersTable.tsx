import TopCustomersTable from '../../dashboard/TopCustomersTable'

export default function TopCustomersTableExample() {
  const mockCustomers = [
    { customer: 'Acme Corp', sales: 125000, orders: 45, avgOrder: 2778, profit: 31250 },
    { customer: 'TechStart Inc', sales: 98000, orders: 32, avgOrder: 3063, profit: 24500 },
    { customer: 'Global Solutions', sales: 142000, orders: 58, avgOrder: 2448, profit: 35500 },
    { customer: 'Metro Enterprises', sales: 87000, orders: 28, avgOrder: 3107, profit: 21750 },
    { customer: 'Summit Trading', sales: 156000, orders: 62, avgOrder: 2516, profit: 39000 },
  ];

  return (
    <div className="p-8 bg-background">
      <TopCustomersTable customers={mockCustomers} />
    </div>
  );
}
