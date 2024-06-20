import { Box, List, Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

export default function ListExample() {
  return (
    <Layout title="List Example" activePage="list">
      <Example title="List">
        <ExampleSection label="Regular list">
          <CodeSample>
            <div class={List.list} style="flex: 1">
              <div class={List.element}>
                <span class={Typography.text}>Element 1</span>
              </div>
              <div class={List.element}>
                <span class={Typography.text}>Element 2</span>
              </div>
              <div class={List.element}>
                <span class={Typography.text}>Element 3</span>
              </div>
              <div class={List.element}>
                <span class={Typography.text}>Element 4</span>
              </div>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection
          label="List of activable elements"
          description="Hover the mouse over the elements to see it change color."
        >
          <CodeSample>
              <div class={cls(List.list)} style="flex: 1;">
                <div class={cls(List.element, List.activableElement)}>
                  <span class={Typography.text}>Element 1</span>
                </div>
                <div class={cls(List.element, List.activableElement)}>
                  <span class={Typography.text}>Element 2</span>
                </div>
                <div class={cls(List.element, List.activableElement)}>
                  <span class={Typography.text}>Element 3</span>
                </div>
                <div class={cls(List.element, List.activableElement)}>
                  <span class={Typography.text}>Element 4</span>
                </div>
              </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection
          label="List of activable elements - alternative background color"
          description="Hover the mouse over the elements to see it change color."
        >
          <CodeSample>
            <div class={cls(Box.box, "bg-2")} style="padding:1em">
              <div class={cls(List.list, "bg-2")} style="flex: 1;">
                <div class={cls(List.element, List.activableElement)}>
                  <span class={Typography.text}>Element 1</span>
                </div>
                <div class={cls(List.element, List.activableElement)}>
                  <span class={Typography.text}>Element 2</span>
                </div>
                <div class={cls(List.element, List.activableElement)}>
                  <span class={Typography.text}>Element 3</span>
                </div>
                <div class={cls(List.element, List.activableElement)}>
                  <span class={Typography.text}>Element 4</span>
                </div>
              </div>
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
