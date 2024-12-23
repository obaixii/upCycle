import { Hero, Book, Impact, Earn, Orders } from "@/components/Sections";


export default function Home() {
    return (
        <div>
            <Hero />
            <div>
                <h3 className="text-2xl md:text-6xl font-bold tracking-tight p-4 text-center" id="features">
                    <span className="text-primary]">F</span>eatures
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="bg-blue-400 shadow-md p-4 flex items-center justify-center">
                        <Book />
                    </div>
                    <div className="bg-yellow-400 shadow-md p-4 flex items-center justify-center">
                        <Impact />
                    </div>
                    <div className="bg-green-400 shadow-md p-4 flex items-center justify-center">
                        <Earn />
                    </div>
                    <div className="bg-red-400 shadow-md p-4 flex items-center justify-center">
                        <Orders />
                    </div>
                </div>
            </div>
        </div>
    );
}
