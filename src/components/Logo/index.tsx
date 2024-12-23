// import ThemeToggle from "../Theme/ThemeToggle";
import { GalleryVerticalEnd } from "lucide-react"
import ThemeToggle from "../Theme/ThemeToggle"

export default function Logo() {
  return (
    <div className="relative flex justify-between items-center p-4">
      <div></div>
      <div className="font-semibold">
        <a href="/" className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <div className="text-xl">
            <span className="font-medium">Up</span>
            <span className="m-0 p-0 font-bold text-[#4E74E0]">Cycle</span>
          </div>
        </a>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  )
}
