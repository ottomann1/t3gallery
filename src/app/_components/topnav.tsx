"use client"

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"
import { UploadButton } from "~/utils/uploadthing"
import { useRouter } from "next/navigation"
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav(){
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold">
    <div>Gallery</div>
    <div>
    <SignedOut>
    <SignInButton />
    </SignedOut>
    <SignedIn>
    {/* <UploadButton endpoint="imageUploader" onClientUploadComplete={()=> {
      router.refresh();
    }}/> */}
    <SimpleUploadButton/>
    <UserButton />
    </SignedIn>
    </div>
    </nav>
  )
}
