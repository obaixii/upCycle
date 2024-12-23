import { Smartphone } from "lucide-react";

export default function Book() {
    return (
        <section className="flex justify-center items-center p-8">
            <div className="w-full flex flex-col sm:flex-row text-center sm:text-left justify-center items-center gap-4">
                <main className="">
                    <Smartphone size={128} color="#4E74E0"/>
                </main>
                <aside className="grow">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Book a Pick Up
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Enter Estimated amount of waste,take a picture, add your address, pick a time slot, review and book.
                    </p>
                </aside>
            </div>
        </section>
    )
}
