import { Book, Earn, Impact, Orders } from "@/components/Sections";

export default function Test() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="bg-red-400 shadow-md p-4 flex items-center justify-center">
                    <Book />
                </div>
                <div className="bg-blue-400 shadow-md p-4 flex items-center justify-center">
                    <Impact />
                </div>
                <div className="bg-green-400 shadow-md p-4 flex items-center justify-center">
                    <Earn />
                </div>
                <div className="bg-yellow-400 shadow-md p-4 flex items-center justify-center">
                    <Orders />
                </div>
            </div>


        </>
    )
}
