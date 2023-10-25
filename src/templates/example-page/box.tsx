import { Layout } from "../../layout";
import { Style } from "../../style";

export default function BoxExample() {
  return (
    <Layout>
      <div class="flexbox">
        <Style
          dirname={__dirname}
          path="./box.css"
        />
        <div class="box box-example">
          <h3>Box Level 1</h3>
        </div>
        <div class="box box-example bg-level-2">
          <h3>Box Level 2</h3>
        </div>
        <div class="box box-example bg-level-3">
          <h3>Box Level 3</h3>
        </div>
        <div class="box box-example bg-level-4">
          <h3>Box Level 4</h3>
        </div>
      </div>
    </Layout>
  );
}
