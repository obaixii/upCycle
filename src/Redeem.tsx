import { BadgeDollarSign } from "lucide-react";
import Payment from "./pages/Dashboard/Components/Payment";

export default function Redeem() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="rounded-xl bg-primary md:min-h-min text-background">
                <div className="flex flex-col items-center gap-4 text-center p-4">
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight p-4">
                        Earn & Redeem
                    </h3>
                    <p className="text-sm md:text-lg text-background/60">
                        Redeem your rewards.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <BadgeDollarSign />
                </div>
                <div className="flex-1">
                    <h3 className="font-medium">Points Earned</h3>
                    <p className="text-sm text-muted-foreground">
                        Congratulations, you have earned 911 points in time period from Jan 24 till date.
                    </p>
                </div>
            </div>
            <div className="gap-4">
                <Payment />
            </div>
        </div>
    )
}
