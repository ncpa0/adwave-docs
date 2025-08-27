import path from "node:path";

export function url(...url: string[]) {
  return path.join(...url);
}
