import { Box } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";
import { css } from "../../utils/css";

export default function BoxExample() {
  return (
    <Layout
      title="Box Example"
      activePage="box"
    >
      <div class="flexbox">
        <Example title="Box">
          <ExampleSection
            label="Box"
            description="Box is a simple container element that by default comes with a flex display type."
          >
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
                <div class={cls(Box.box, "bg-1")}>
                  <h3>Box Level 1</h3>
                </div>
                <div class={cls(Box.box, "bg-2")}>
                  <h3>Box Level 2</h3>
                </div>
                <div class={cls(Box.box, "bg-3")}>
                  <h3>Box Level 3</h3>
                </div>
                <div class={cls(Box.box, "bg-4")}>
                  <h3>Box Level 4</h3>
                </div>
                <div class={cls(Box.box, "bg-5")}>
                  <h3>Box Level 5</h3>
                </div>
                <div class={cls(Box.box, "bg-6")}>
                  <h3>Box Level 6</h3>
                </div>
              </div>
            </CodeSample>
          </ExampleSection>
        </Example>
      </div>
    </Layout>
  );
}
