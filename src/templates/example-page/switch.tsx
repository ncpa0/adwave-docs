import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

const PAGE_DESCRIPTION =
  "Documentation and examples for the Switch component of the AdwaveCSS framework and the AdwaveUI library.";

export default function SliderExample() {
  return (
    <Layout
      title="Switch Example"
      activePage="switch"
      description={PAGE_DESCRIPTION}
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
              <adw-switch disabled active />
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
