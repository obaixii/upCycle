export default function Payment() {
    return (
        <div className="grid gap-4 p-4 md:p-6">
            <div className="grid gap-2">
                <h2 className="text-2xl font-bold">Redeem Options</h2>
                <p className="text-muted-foreground">Choose your preferred payment method to redeem your points.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CreditCardIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium">Credit Card</h3>
                        <p className="text-sm text-muted-foreground">
                            Pay securely with your Visa, Mastercard, or American Express.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CreditCardIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium">Debit Card</h3>
                        <p className="text-sm text-muted-foreground">Pay directly from your bank account with your debit card.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <WalletIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium">PayPal</h3>
                        <p className="text-sm text-muted-foreground">Pay securely and conveniently with your PayPal account.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <AppleIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-medium">Apple Pay</h3>
                        <p className="text-sm text-muted-foreground">Pay securely and conveniently with your Apple device.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AppleIcon(props: { className: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
            <path d="M10 2c1 .5 2 2 2 5" />
        </svg>
    )
}


function CreditCardIcon(props: { className: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}


function WalletIcon(props: { className: string }) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
    )
}