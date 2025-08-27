import path from "node:path";
import process from "node:process";

// const BASE_URL = process.env.BASE_URL ?? "/docs/";

export function url(...url: string[]) {
  return path.join(...url);
}
