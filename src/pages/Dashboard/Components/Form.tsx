
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function BookForm() {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Book a Slot</CardTitle>
                <CardDescription>Fill out the form and book a slot to pickup plastic</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Enter your email" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="Enter your phone number" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" placeholder="Enter your address" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">City</Label>
                            <Select>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="islamabad">Islamabad</SelectItem>
                                    <SelectItem value="Karachi">Karachi</SelectItem>
                                    <SelectItem value="lahore">Lahore</SelectItem>
                                    <SelectItem value="peshawar">Peshawar</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="weight">Weight</Label>
                            <Input id="weight" placeholder="Enter weight of plastic" type="number" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="file">Upload Image</Label>
                            <Input id="file" type="file" className="w-full border border-gray-300 rounded p-2" />
                        </div>
                    </div>

                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Book</Button>
            </CardFooter>
        </Card>
    )
}
