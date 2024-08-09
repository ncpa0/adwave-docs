import { Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

const PAGE_DESCRIPTION =
  "Documentation and examples for the Separator component of the AdwaveCSS framework.";

export default function SeparatorExample() {
  return (
    <Layout
      title="Separator Example"
      activePage="separator"
      description={PAGE_DESCRIPTION}
    >
      <Example title="Separator">
        <ExampleSection label="Horizontal Separator">
          <CodeSample>
            <span class={Typography.text} style="margin: 1em">
              Above
            </span>
            <span class={"separator"} />
            <span class={Typography.text} style="margin: 1em">
              Below
            </span>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Vertical Separator">
          <CodeSample>
            <div style="display: flex">
              <span class={Typography.text} style="margin: 1em">
                Before
              </span>
              <span class={"separator vertical"} />
              <span class={Typography.text} style="margin: 1em">
                After
              </span>
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
