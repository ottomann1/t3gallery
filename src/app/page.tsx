import { log } from "console";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";
const mockUrls = [
  "https://utfs.io/f/6611bb42-d9c1-4c46-bb84-f044cff2c200-hswump.jpg",
  "https://utfs.io/f/4a75e6e2-2574-4ad0-843e-ebd4ac138c59-8mqgj.jpg",
  "https://utfs.io/f/567e9866-ff6c-480d-bf14-e9bcd4043800-4vw4z4.jpg",
  "https://utfs.io/f/b133808d-cb04-43a7-8d15-2336bc8a955c-1toqhc.jpg"
]
const mockImages = mockUrls.map((url, index)=>({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts)
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post)=>(
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
      }
      </div>
    hello (gallery in progress)
    </main>
  );
}
