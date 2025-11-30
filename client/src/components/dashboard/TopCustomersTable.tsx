import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ArrowUpDown } from "lucide-react";

interface Customer {
  customer: string;
  sales: number;
  orders: number;
  profit: number;
  avgOrder: number;
}

interface TopCustomersTableProps {
  customers: Customer[];
}

export default function TopCustomersTable({ customers }: TopCustomersTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<keyof Customer>("sales");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const handleSort = (field: keyof Customer) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const filteredAndSorted = customers
    .filter((customer) =>
      customer.customer.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      const modifier = sortDirection === "asc" ? 1 : -1;
      return aValue > bValue ? modifier : -modifier;
    });

  return (
    <Card className="p-6" data-testid="table-top-customers">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Top Customers</h3>
          <p className="text-sm text-muted-foreground">
            Sortable and searchable customer performance data
          </p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
            data-testid="input-search-customers"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort("customer")}
                  className="flex items-center gap-1 hover:text-foreground"
                  data-testid="button-sort-customer"
                >
                  Customer
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort("sales")}
                  className="flex items-center gap-1 ml-auto hover:text-foreground"
                  data-testid="button-sort-sales"
                >
                  Sales
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort("orders")}
                  className="flex items-center gap-1 ml-auto hover:text-foreground"
                  data-testid="button-sort-orders"
                >
                  Orders
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort("avgOrder")}
                  className="flex items-center gap-1 ml-auto hover:text-foreground"
                  data-testid="button-sort-avg"
                >
                  Avg Order
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                <button
                  onClick={() => handleSort("profit")}
                  className="flex items-center gap-1 ml-auto hover:text-foreground"
                  data-testid="button-sort-profit"
                >
                  Profit
                  <ArrowUpDown className="h-4 w-4" />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((customer, index) => (
              <tr
                key={index}
                className="border-b border-border last:border-0 hover:bg-muted/50"
                data-testid={`row-customer-${index}`}
              >
                <td className="py-3 px-4 text-sm font-medium text-foreground">
                  {customer.customer}
                </td>
                <td className="py-3 px-4 text-sm text-right text-foreground">
                  ${customer.sales.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-sm text-right text-muted-foreground">
                  {customer.orders}
                </td>
                <td className="py-3 px-4 text-sm text-right text-muted-foreground">
                  ${customer.avgOrder.toLocaleString()}
                </td>
                <td className="py-3 px-4 text-sm text-right text-foreground font-medium">
                  ${customer.profit.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
