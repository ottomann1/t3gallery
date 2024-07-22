import "server-only";
import { db } from "./db";

export async function getImages() {
  const images = await db.query.images.findMany();
  return images;
}
