
import { Button } from "@/components/ui/button";
export default function Hero() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 border">
            <div className="flex flex-col items-center gap-4 text-center">
                <h3 className="text-6xl md:text-8xl font-bold tracking-tight p-4">
                    Up<span className="text-[#4E74E0]">Cycle</span>
                </h3>
                <p className="text-sm md:text-lg text-muted-background">
                    Turning your trash into <span className="text-[#4E74E0]">treasure</span>
                </p>
                <div className="flex justify-between gap-4 ">
                    <Button asChild>
                        <a className="mt-4" href="/demo/account" >View Demo</a>
                    </Button>
                    <Button asChild>
                        <a className="mt-4" href="#features" >Features</a>
                    </Button>


                </div>
            </div>
        </div>
    )
}
