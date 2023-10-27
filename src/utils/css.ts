const getLineIndent = (line: string) => {
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== " ") return i;
  }
  return line.length;
};

export const css = (template: TemplateStringsArray, ...params: string[]) => {
  const lines = template
    .reduce((acc, curr, index) => {
      return `${acc}${curr}${params[index] || ""}`;
    }, "")
    .split("\n");

  const lowestIndent = lines.reduce((acc: null | number, curr) => {
    if (curr.trim().length === 0) return acc;
    const indent = getLineIndent(curr);
    if (acc === null) return indent;
    return Math.min(acc, indent);
  }, null);

  if (lowestIndent === null) return lines.join("\n");
  return lines.map((line) => line.substring(lowestIndent)).join("\n");
};
