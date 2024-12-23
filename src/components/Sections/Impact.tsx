import { Goal } from "lucide-react";

export default function Impact() {
    return (
        <section className="flex justify-center items-center p-8">
            <div className="w-full flex flex-col sm:flex-row text-center sm:text-left justify-center items-center gap-4">
                <main className="">
                    <Goal size={128} color="#4E74E0" />
                </main>
                <aside className="grow">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        View your Impact
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        You get to see analysis of recycling history to see the impact you had on waste recycling.
                    </p>
                </aside>
            </div>
        </section>
    )
}
