import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, DollarSign, TrendingUp, ShoppingCart, Percent } from "lucide-react";
import KPICard from "@/components/dashboard/KPICard";
import MonthlyTrendChart from "@/components/dashboard/MonthlyTrendChart";
import RegionalSalesChart from "@/components/dashboard/RegionalSalesChart";
import CategoryPieChart from "@/components/dashboard/CategoryPieChart";
import TopCustomersTable from "@/components/dashboard/TopCustomersTable";
import { 
  salesData, 
  getMonthlyTrend, 
  getRegionalSales, 
  getCategorySales, 
  getTopCustomers, 
  getKPIs 
} from "@/data/dashboardData";

interface DashboardPageProps {
  onBack?: () => void;
}

export default function DashboardPage({ onBack }: DashboardPageProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const kpis = getKPIs(salesData);
  const monthlyTrend = getMonthlyTrend(salesData, selectedRegion || undefined);
  const regionalSales = getRegionalSales(salesData);
  const categorySales = getCategorySales(salesData, selectedRegion || undefined);
  const topCustomers = getTopCustomers(salesData, 10);

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={onBack}
                data-testid="button-back-to-portfolio"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Sales Analysis Dashboard</h1>
                <p className="text-sm text-muted-foreground">Interactive data visualization and insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPICard
              title="Total Sales"
              value={`$${(kpis.totalSales / 1000000).toFixed(2)}M`}
              subtitle="Year to date"
              icon={DollarSign}
            />
            <KPICard
              title="Avg Order Value"
              value={`$${kpis.avgOrder.toLocaleString()}`}
              subtitle="Per transaction"
              icon={ShoppingCart}
            />
            <KPICard
              title="Total Profit"
              value={`$${(kpis.totalProfit / 1000).toFixed(0)}K`}
              subtitle="Net profit"
              icon={TrendingUp}
            />
            <KPICard
              title="Profit Margin"
              value={`${kpis.profitMargin}%`}
              subtitle="Overall margin"
              icon={Percent}
            />
          </div>
        </div>

        {selectedRegion && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">
                Filtering by region: <span className="text-primary font-semibold">{selectedRegion}</span>
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedRegion(null)}
                data-testid="button-clear-filter"
              >
                Clear Filter
              </Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RegionalSalesChart
            data={regionalSales}
            onRegionClick={setSelectedRegion}
            selectedRegion={selectedRegion}
          />
          <CategoryPieChart data={categorySales} />
        </div>

        <MonthlyTrendChart data={monthlyTrend} />

        <TopCustomersTable customers={topCustomers} />

        <div className="bg-muted/30 border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Key Insights</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                Analyzed 100,000+ sales records with comprehensive data preprocessing and outlier detection
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                Regional performance shows significant variation with {regionalSales[0]?.region} leading in total sales
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                Top 10 customers contribute significantly to overall revenue, indicating strong customer retention
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                Click on regions in the bar chart to dynamically filter the trend and category charts
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
