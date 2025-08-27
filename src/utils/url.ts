import path from "node:path";

export function url(...url: string[]) {
  let u = path.join(...url);
  if (!path.isAbsolute(u)) {
    u = `/${u}`;
  }
  return u;
}
