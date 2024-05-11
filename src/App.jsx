import MapCard from '@/components/MapCard'

export default function App() {
  return (
    <div className="relative grid w-screen max-w-7xl grid-cols-12 gap-8 overflow-x-hidden p-4">
      <div className="col-span-12 rounded-lg border bg-white p-8 lg:col-span-8">
        hello
      </div>
      <div className="col-span-12 lg:col-span-4">
        <MapCard />
      </div>
    </div>
  )
}
