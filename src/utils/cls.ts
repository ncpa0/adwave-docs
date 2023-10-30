export function cls(...cnames: Array<string | Record<string, any>>) {
  const classes: string[] = [];
  for (let i = 0; i < cnames.length; i++) {
    const cname = cnames[i]!;
    if (typeof cname === "string") {
      classes.push(cname);
    } else {
      Object.keys(cname).forEach((key) => {
        if (cname[key]) {
          classes.push(key);
        }
      });
    }
  }
  return classes.join(" ");
}
