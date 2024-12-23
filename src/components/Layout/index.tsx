import { Outlet } from "react-router-dom"
import { Logo } from "../index"

export default function DefaultLayout() {
    return (
        <div className="relative">
            <div className="w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100">
                <Logo />
            </div>
            <Outlet />
        </div>
    )
}
