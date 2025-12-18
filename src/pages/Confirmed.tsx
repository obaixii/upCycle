import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dialog01() {
    const [open, setOpen] = useState(true);

    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <DialogContent className="sm:max-w-sm flex flex-col items-center">

                <DialogHeader className="text-center gap-0">
                    <DialogTitle className="text-center">Booked successfully</DialogTitle>
                    <DialogDescription className="mt-2 text-center mx-auto sm:max-w-[90%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                        amet labore.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-center w-full">
                    <DialogClose asChild>
                        <Button className="w-full">
                            <Link to="/demo/account">Go back to dashboard</Link>
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}