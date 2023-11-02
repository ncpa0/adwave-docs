import { Box, Frame, Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

export default function FrameExample() {
  return (
    <Layout title="Frame Example" activePage="frame">
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
