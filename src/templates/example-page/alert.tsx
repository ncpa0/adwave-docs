import { Alert } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

const PAGE_DESCRIPTION =
  "Documentation and examples for the Alert component of the AdwaveCSS framework.";

export default function AlertExample() {
  return (
    <Layout
      title="Alert Example"
      activePage="alert"
      description={PAGE_DESCRIPTION}
    >
      <Example title="Alert">
        <ExampleSection label="Info Alert">
          <CodeSample>
            <div class={Alert.className({ type: "info" })}>
              This is a info alert.
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Success Alert">
          <CodeSample>
            <div class={Alert.className({ type: "success" })}>
              This is a success alert.
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Warning Alert">
          <CodeSample>
            <div class={Alert.className({ type: "warning" })}>
              This is a warning alert.
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Error Alert">
          <CodeSample>
            <div class={Alert.className({ type: "error" })}>
              This is a error alert.
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
