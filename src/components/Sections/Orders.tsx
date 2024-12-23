import { CalendarDays } from "lucide-react";

export default function Orders() {
    return (
        <section className="flex justify-center items-center p-8">
            <div className="w-full flex flex-col sm:flex-row text-center sm:text-left justify-center items-center gap-4">
                <main className="">
                    <CalendarDays size={128} color="#4E74E0" />
                </main>
                <aside className="grow">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Upcoming Orders
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        View your upcoming orders and also chat with the rider, view location or cancel your order.
                    </p>
                </aside>
            </div>
        </section>
    )
}
