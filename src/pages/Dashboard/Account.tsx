import ChartComponent from "./Components/Chart";

export default function Account() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="gap-4 order-2">
                <ChartComponent />
            </div>
            <div className="rounded-xl bg-primary md:min-h-min text-background">
                <div className="flex flex-col items-center gap-4 text-center p-4">
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight p-4">
                        Mesha Farrukh
                    </h3>
                    <p className="text-sm md:text-lg text-background/60">
                        Your Impact
                    </p>
                </div>
            </div>
        </div>
    )
}
