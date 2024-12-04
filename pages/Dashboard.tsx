import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRightIcon, CreditCardIcon, HomeIcon, ChartBarIcon, WalletIcon, ArrowLeftOnRectangleIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Colorful Header Banner */}
      <div className="h-32 bg-gradient-to-r from-pink-500 via-cyan-400 to-orange-500" />
      
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-6 border-r min-h-[calc(100vh-8rem)]">
          <div className="space-y-6">
            <div className="space-y-2">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm text-muted-foreground">Welcome back,</p>
                <h2 className="text-lg font-semibold">Taylor Simora</h2>
              </div>
              <div>
                <p className="text-3xl font-bold">$34,321</p>
                <p className="text-sm text-muted-foreground">Monthly budget</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-primary rounded-lg bg-secondary">
                <CreditCardIcon className="w-4 h-4" />
                Dashboard
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground rounded-lg hover:bg-secondary">
                <ChartBarIcon className="w-4 h-4" />
                Investments
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground rounded-lg hover:bg-secondary">
                <ChartBarIcon className="w-4 h-4" />
                Transactions
              </Link>
              <Link href="#" className="flex items-center gap-3 px-3 py-2 text-muted-foreground rounded-lg hover:bg-secondary">
                <WalletIcon className="w-4 h-4" />
                Wallet
              </Link>
            </nav>

            <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground">
              <ArrowLeftOnRectangleIcon className="w-4 h-4" />
              Sign-out
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
            </div>

            {/* Credit Card */}
            <Card className="w-96">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-4xl font-bold">$12,234</p>
                    <p className="text-sm text-muted-foreground">**** 4532</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-500" />
                    <div className="w-8 h-8 rounded-full bg-orange-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Internet payment limit</span>
                    <span>$1,200 / 3,000</span>
                  </div>
                  <Progress value={40} />
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <ChartBarIcon className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Income</p>
                      <p className="text-lg font-semibold">$5,700</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <ChartBarIcon className="w-4 h-4 text-red-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Spendings</p>
                      <p className="text-lg font-semibold">$2,254</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Latest Spendings */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Latest spendings</h2>
                <Button variant="ghost" className="text-sm">View all</Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <CreditCardIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">Online store</p>
                      <p className="text-sm text-muted-foreground">May 23, 2022 at 8:20 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>- $32.50</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-secondary">
                      <HomeIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">Housekeeping</p>
                      <p className="text-sm text-muted-foreground">May 23, 2022 at 6:20 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>- $4.20</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Send Money */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Send money to</h2>
                <Button variant="ghost" size="icon">
                  <ArrowRightIcon className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="rounded-full">
                  <PlusIcon className="w-4 h-4" />
                </Button>
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Scheduled Payments */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Scheduled payments</h2>
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-red-500 text-white">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-lg font-semibold">$13.99/m</p>
                    <p className="text-sm">PS5 Game</p>
                  </CardContent>
                </Card>
                <Card className="bg-cyan-500 text-white">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-lg font-semibold">$1.99/m</p>
                    <p className="text-sm">Discord</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 text-white">
                  <CardContent className="p-4 space-y-2">
                    <p className="text-lg font-semibold">$10.00/m</p>
                    <p className="text-sm">Wattpad</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

