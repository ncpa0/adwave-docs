declare module "*.svg" {
  const svgimg: (
    props: Omit<JSX.IntrinsicElements["img"], "src">,
  ) => JSX.Element;
  export default svgimg;
}
