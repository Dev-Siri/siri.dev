import sharp from "sharp";

import type { APIContext } from "astro";

export async function get({ url: { searchParams } }: APIContext) {
  const imageUrl = searchParams.get("url");
  const height = searchParams.get("h");

  if (!imageUrl) return new Response("Image URL not provided");

  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();
  const headers = new Headers();

  try {
    let optimizedImage: Buffer;

    if (imageResponse.headers.get("Content-Type")?.includes("image/gif")) {
      optimizedImage = await sharp(imageBuffer).resize(Number(height)).gif().toBuffer();
      headers.set("Content-Type", "image/gif");
    } else {
      optimizedImage = await sharp(imageBuffer).resize(Number(height)).avif().toBuffer();
      headers.set("Content-Type", "image/avif");
    }

    return new Response(optimizedImage, { headers });
  } catch (error) {
    console.log(error);
    // Return the original image as-is instead of silently erroring in the server console
    // So the user gets an actual (Although unoptimized) image
    return new Response(imageBuffer, { headers: imageResponse.headers });
  }
}
