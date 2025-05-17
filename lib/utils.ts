import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { decode } from "blurhash";
import { createCanvas } from "canvas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function blurhashToDataUrl(blurhash: string, width:number = 32, height:number = 32, punch?: number): string {
  const pixels = decode(blurhash, width, height, punch)
  const canvas = createCanvas(width,height);
  const ctx = canvas.getContext("2d");
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}
