import { Button } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

const PAGE_DESCRIPTION =
  "Documentation and examples for the Button component of the AdwaveCSS framework.";

export default function ButtonExample() {
  return (
    <Layout
      title="Button - Example"
      activePage="button"
      description={PAGE_DESCRIPTION}
    >
      <div class="flexbox column">
        <Example title="Button">
          <ExampleSection label="Regular Button">
            <CodeSample>
              <button class={cls(Button.button)}>Button</button>
            </CodeSample>
          </ExampleSection>
          <ExampleSection label="Primary Button">
            <CodeSample>
              <button class={cls(Button.button, Button.primary)}>Button</button>
            </CodeSample>
          </ExampleSection>
          <ExampleSection label="Danger Button">
            <CodeSample>
              <button class={cls(Button.button, Button.danger)}>Button</button>
            </CodeSample>
          </ExampleSection>
          <ExampleSection label="Flat Button">
            <CodeSample>
              <button class={cls(Button.button, Button.flat)}>Button</button>
            </CodeSample>
          </ExampleSection>
          <ExampleSection label="Cicrular and Square Buttons">
            <CodeSample>
              <div style="display: grid; grid-template-columns: 1fr 1fr; justify-items: center;">
                <button class={cls(Button.button, Button.circular)}>...</button>
                <button class={cls(Button.button, Button.square)}>...</button>
              </div>
            </CodeSample>
          </ExampleSection>
        </Example>
      </div>
    </Layout>
  );
}
