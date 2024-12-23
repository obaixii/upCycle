import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"

export default function LanguageSelection() {
    return (
        <Select>
            <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="urdu">Urdu</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
