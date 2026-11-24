import path from "node:path";

const BASE_PATH = typeof process.env.BASE_PATH === "string"
  ? process.env.BASE_PATH
  : "adwave-docs";

export function url(...url) {
  let u = path.join(...url);

  if (
    BASE_PATH !== "" && !u.startsWith(BASE_PATH)
    && !u.startsWith("/" + BASE_PATH)
  ) {
    u = `/${path.join(BASE_PATH, u)}`;
  }

  if (!path.isAbsolute(u)) {
    u = `/${u}`;
  }

  return u;
}
