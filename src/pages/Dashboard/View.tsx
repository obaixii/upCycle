import DataTable from "./Components/Data";

export default function View() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="rounded-xl bg-primary text-background md:min-h-min">
                <div className="flex flex-col items-center gap-4 text-center p-4">
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight p-4">
                        View your Cycles
                    </h3>
                    <p className="text-sm md:text-lg text-background/60">
                        Your all cycles in one place, get updates and track your cycle here..
                    </p>
                </div>
            </div>
            <div className="gap-4">
                <DataTable />
            </div>
        </div>
    )
}
