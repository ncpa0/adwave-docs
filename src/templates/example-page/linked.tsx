import { Button, Input } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

const PAGE_DESCRIPTION =
  "Documentation and examples for the Input and Button linkingin the AdwaveCSS framework.";

export default function LinkedExample() {
  return (
    <Layout
      title="Linked Example"
      activePage="linked"
      description={PAGE_DESCRIPTION}
    >
      <Example title="Input And Button Linking">
        <ExampleSection label="Horizontally linked buttons">
          <CodeSample>
            <div class={Button.linked}>
              <button class={Button.button}>Button 1</button>
              <button class={Button.button}>Button 2</button>
              <button class={Button.button}>Button 3</button>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Vertically linked buttons">
          <CodeSample>
            <div class={cls(Button.linked, Button.linkedVertical)}>
              <button class={Button.button}>Button 1</button>
              <button class={Button.button}>Button 2</button>
              <button class={Button.button}>Button 3</button>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Linked buttons and inputs">
          <CodeSample>
            <div class={Button.linked}>
              <input class={Input.input} />
              <button class={Button.button}>Button 1</button>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection
          label="Linking wrapped buttons"
          description="When a button or an input is not a direct sibling of other button and input elements, it container must have a special wrapper class applied to correctly link together."
        >
          <CodeSample>
            <div class={Button.linked}>
              <button class={Button.button}>Button 1</button>
              <div class={Button.wrapper}>
                <button class={Button.button}>Button 2</button>
              </div>
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
