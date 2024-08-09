import { Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

const PAGE_DESCRIPTION =
  "Documentation and examples for the Slider component of the AdwaveCSS framework and the AdwaveUI library.";

export default function SliderExample() {
  return (
    <Layout
      title="Slider Example"
      activePage="slider"
      description={PAGE_DESCRIPTION}
    >
      <Example title="Slider">
        <ExampleSection label="Regular Slider">
          <CodeSample>
            <div style="display: grid; grid-template-row: 1fr 1fr; grid-gap: 2em;">
              <adw-slider
                min={0}
                max={100}
                value={50}
                step={5}
                onchange="document.querySelector('#slider-value').innerText = event.target.value"
              />
              <span class={Typography.text}>
                Current value: <span id="slider-value">50</span>
              </span>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Disabled Slider">
          <CodeSample>
            <adw-slider min={0} max={100} value={50} step={1} disabled />
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
