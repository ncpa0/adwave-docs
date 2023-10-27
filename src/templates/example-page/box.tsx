import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { Style } from "../../style";
import { css } from "../../utils/css";

export default function BoxExample() {
  return (
    <Layout>
      <div class="flexbox">
        <Style
          dirname={__dirname}
          path="./box.css"
          inline
        />
        <Example title="Box">
          <ExampleSection description="Box is a simple container element that by default comes with a flex display type.">
            <CodeSample>
              <style>
                {css`
                  .flexbox {
                    display: flex;
                  }

                  .box-example .box {
                    width: 150px;
                    height: 150px;
                  }
                `}
              </style>
              <div class="flexbox box-example">
                <div class="box">
                  <h3>Box Level 1</h3>
                </div>
                <div class="box bg-level-2">
                  <h3>Box Level 2</h3>
                </div>
                <div class="box bg-level-3">
                  <h3>Box Level 3</h3>
                </div>
                <div class="box bg-level-4">
                  <h3>Box Level 4</h3>
                </div>
              </div>
            </CodeSample>
          </ExampleSection>
        </Example>
      </div>
    </Layout>
  );
}
