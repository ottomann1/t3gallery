import { SignedIn, SignedOut } from "@clerk/nextjs";
import { log } from "console";
import Link from "next/link";
import { db } from "~/server/db";
import { getImages } from "~/server/queries";
import Image from "next/image"

export const dynamic = "force-dynamic";

async function Images(){
const images = await getImages()

return (
  <div className="flex justify-center flex-wrap gap-4">
        {images.map((image)=>(
          <div key={image.id} className="flex w-48 flex-col">
            <Image src={image.url} width={192} height={192}
    objectFit="contain" alt={image.name} />
          <div>{image.name}</div>
            </div>
        ))
      }
      </div>

)
}
export default async function HomePage() {
  return (
    <main className="">
    <SignedOut>
      Please sign in bitch
    </SignedOut>
    <SignedIn>
      <Images />
    </SignedIn>
    hello (gallery in progress)
    </main>
  );
}
