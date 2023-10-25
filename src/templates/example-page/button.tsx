import { Layout } from "../../layout";
import { Style } from "../../style";

export default function ButtonExample() {
  return (
    <Layout>
      <div class="flexbox column">
        <Style
          dirname={__dirname}
          path="./button.css"
        />
        <button class="btn button-example">Button</button>
        <button class="btn button-example primary">Button</button>
        <button class="btn button-example danger">Button</button>
        <button class="btn button-example flat">Button</button>
      </div>
    </Layout>
  );
}
