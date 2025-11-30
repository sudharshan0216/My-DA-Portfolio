export interface SalesRecord {
  id: string;
  date: string;
  region: string;
  category: string;
  customer: string;
  sales: number;
  profit: number;
  quantity: number;
}

const regions = ["North", "South", "East", "West"];
const categories = ["Electronics", "Furniture", "Office Supplies", "Technology"];
const customers = [
  "Acme Corp", "TechStart Inc", "Global Solutions", "Metro Enterprises",
  "Summit Trading", "Prime Retailers", "Vista Group", "Nexus Systems",
  "Atlas Corp", "Zenith Partners", "Quantum Ltd", "Phoenix Industries",
  "Stellar Ventures", "Horizon Co", "Apex Trading", "Pinnacle Inc"
];

function generateSalesData(count: number): SalesRecord[] {
  const data: SalesRecord[] = [];
  const startDate = new Date(2024, 0, 1);
  
  for (let i = 0; i < count; i++) {
    const daysOffset = Math.floor((i / count) * 365);
    const date = new Date(startDate);
    date.setDate(date.getDate() + daysOffset);
    
    const sales = Math.floor(Math.random() * 10000) + 500;
    const profitMargin = 0.15 + Math.random() * 0.25;
    const profit = Math.floor(sales * profitMargin);
    
    data.push({
      id: `TXN-${String(i + 1).padStart(6, '0')}`,
      date: date.toISOString().split('T')[0],
      region: regions[Math.floor(Math.random() * regions.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      customer: customers[Math.floor(Math.random() * customers.length)],
      sales,
      profit,
      quantity: Math.floor(Math.random() * 50) + 1
    });
  }
  
  return data;
}

export const salesData = generateSalesData(800);

export function getMonthlyTrend(data: SalesRecord[], filterRegion?: string) {
  const filtered = filterRegion ? data.filter(r => r.region === filterRegion) : data;
  
  const monthlyMap = new Map<string, { sales: number; profit: number }>();
  
  filtered.forEach(record => {
    const month = record.date.substring(0, 7);
    const current = monthlyMap.get(month) || { sales: 0, profit: 0 };
    monthlyMap.set(month, {
      sales: current.sales + record.sales,
      profit: current.profit + record.profit
    });
  });
  
  return Array.from(monthlyMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([month, values]) => ({
      month,
      sales: values.sales,
      profit: values.profit
    }));
}

export function getRegionalSales(data: SalesRecord[]) {
  const regionalMap = new Map<string, number>();
  
  data.forEach(record => {
    const current = regionalMap.get(record.region) || 0;
    regionalMap.set(record.region, current + record.sales);
  });
  
  return Array.from(regionalMap.entries()).map(([region, sales]) => ({
    region,
    sales
  }));
}

export function getCategorySales(data: SalesRecord[], filterRegion?: string) {
  const filtered = filterRegion ? data.filter(r => r.region === filterRegion) : data;
  
  const categoryMap = new Map<string, number>();
  
  filtered.forEach(record => {
    const current = categoryMap.get(record.category) || 0;
    categoryMap.set(record.category, current + record.sales);
  });
  
  return Array.from(categoryMap.entries()).map(([category, sales]) => ({
    category,
    sales
  }));
}

export function getTopCustomers(data: SalesRecord[], limit: number = 10) {
  const customerMap = new Map<string, { sales: number; orders: number; profit: number }>();
  
  data.forEach(record => {
    const current = customerMap.get(record.customer) || { sales: 0, orders: 0, profit: 0 };
    customerMap.set(record.customer, {
      sales: current.sales + record.sales,
      orders: current.orders + 1,
      profit: current.profit + record.profit
    });
  });
  
  return Array.from(customerMap.entries())
    .map(([customer, stats]) => ({
      customer,
      ...stats,
      avgOrder: Math.floor(stats.sales / stats.orders)
    }))
    .sort((a, b) => b.sales - a.sales)
    .slice(0, limit);
}

export function getKPIs(data: SalesRecord[]) {
  const totalSales = data.reduce((sum, r) => sum + r.sales, 0);
  const totalProfit = data.reduce((sum, r) => sum + r.profit, 0);
  const avgOrder = Math.floor(totalSales / data.length);
  const profitMargin = ((totalProfit / totalSales) * 100).toFixed(1);
  
  return {
    totalSales,
    avgOrder,
    totalProfit,
    profitMargin: parseFloat(profitMargin)
  };
}
