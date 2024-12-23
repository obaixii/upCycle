import { Trophy } from "lucide-react";

export default function Earn() {
    return (
        <section className="flex justify-center items-center p-8">
            <div className="w-full flex flex-col sm:flex-row text-center sm:text-left justify-center items-center gap-4">
                <main className="">
                    <Trophy size={128} color="#4E74E0" />
                </main>
                <aside className="grow">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Earn and Redeem Points
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Points are added to user's account. They can be redeemed in the form of Food Panda's wallets, mobile balance or vouchers.
                    </p>
                </aside>
            </div>
        </section>
    )
}
