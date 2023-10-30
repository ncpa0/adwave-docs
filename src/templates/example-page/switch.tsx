import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

export default function SliderExample() {
  return (
    <Layout
      title="Switch Example"
      activePage="switch"
    >
      <Example title="Switch">
        <ExampleSection label="Regular Switch">
          <CodeSample>
            <adw-switch />
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Disabled Switch">
          <CodeSample>
            <div style="display: grid; grid-template-columns: 1fr 1fr; justify-items: center;">
              <adw-switch disabled />
              <adw-switch
                disabled
                active
              />
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
