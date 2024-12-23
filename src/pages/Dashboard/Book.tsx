import BookForm from "./Components/Form";

export default function Book() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="rounded-xl bg-primary md:min-h-min text-background">
                <div className="flex flex-col items-center gap-4 text-center p-4">
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight p-4">
                        Book Now
                    </h3>
                    <p className="text-sm md:text-lg text-background/60">
                        Book a slot to pickup plastic
                    </p>
                </div>
            </div>
            <div className="gap-4">
                <BookForm />
            </div>
        </div>
    )
}

