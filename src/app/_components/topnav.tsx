import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs"

export function TopNav(){
  return (
    <nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold">
    <div>Gallery</div>
    <div>
    <SignedOut>
    <SignInButton />
    </SignedOut>
    <SignedIn>
    <SignOutButton />
    </SignedIn>
    </div>
    </nav>
  )
}
