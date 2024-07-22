import { SignedIn, SignedOut } from "@clerk/nextjs";
import { log } from "console";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";
async function Images(){

  const images = await db.query.images.findMany();
return (
  <div className="flex flex-wrap gap-4">
        {images.map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url} />
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
