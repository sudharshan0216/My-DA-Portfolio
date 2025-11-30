import KPICard from '../../dashboard/KPICard'
import { DollarSign } from 'lucide-react'

export default function KPICardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        <KPICard
          title="Total Sales"
          value="$2.4M"
          subtitle="Year to date"
          icon={DollarSign}
        />
        <KPICard
          title="Avg Order"
          value="$4,230"
          subtitle="Per transaction"
          icon={DollarSign}
        />
      </div>
    </div>
  )
}
