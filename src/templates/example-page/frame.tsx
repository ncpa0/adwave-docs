import { Box, Frame, Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

const PAGE_DESCRIPTION =
  "Documentation and examples for the Frame component of the AdwaveCSS framework.";

export default function FrameExample() {
  return (
    <Layout
      title="Frame Example"
      activePage="frame"
      description={PAGE_DESCRIPTION}
    >
      <Example title="Frame">
        <ExampleSection label="Frame">
          <CodeSample>
            <div class={Box.box} style="padding: 2em">
              <div class={Frame.frame}>
                <div class={Typography.text} style="margin: 1em">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
