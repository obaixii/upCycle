import { useState } from "react"
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
import { Link } from "react-router-dom"

export default function BookForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    weight: "",
  })

  const isFormValid =
    form.name &&
    form.email &&
    form.phone &&
    form.address &&
    form.city &&
    form.weight 

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book a Slot</CardTitle>
        <CardDescription>
          Fill out the form and book a slot to pickup plastic
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label>Name</Label>
            <Input
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label>Email</Label>
            <Input
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label>Phone</Label>
            <Input
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label>Address</Label>
            <Input
              placeholder="Enter your address"
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label>City</Label>
            <Select
              onValueChange={(value) =>
                setForm({ ...form, city: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="islamabad">Islamabad</SelectItem>
                <SelectItem value="karachi">Karachi</SelectItem>
                <SelectItem value="lahore">Lahore</SelectItem>
                <SelectItem value="peshawar">Peshawar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label>
              Weight <span className="font-light">in KG/s</span>
            </Label>
            <Input
              type="number"
              placeholder="Enter weight of plastic"
              value={form.weight}
              onChange={(e) =>
                setForm({ ...form, weight: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label>Upload Image</Label>
            <Input
              type="file"/>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>

        <Button disabled={!isFormValid}>
          {isFormValid ? (
            <Link to="/demo/confirmed">Book</Link>
          ) : (
            "Book"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
