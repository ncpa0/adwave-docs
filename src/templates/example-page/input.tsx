import { Input } from "adwavecss";
import type {} from "adwaveui";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

export default function InputExample() {
  return (
    <Layout
      title="Input Example"
      activePage="input"
    >
      <Example title="Input">
        <ExampleSection label="Input with styling only">
          <CodeSample>
            <div style="display: grid; grid-template-rows: 1fr 1fr; grid-gap: 1em;">
              <input
                class={cls(Input.input, Input.disabled)}
                value="Joe"
                disabled
              ></input>
              <input
                class={cls(Input.input)}
                placeholder="Password"
              ></input>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Input Component">
          <CodeSample>
            <adw-input placeholder="Put your text here"></adw-input>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Input with suggestions">
          <CodeSample>
            <div style="display: grid; grid-template-rows: 1fr 1fr; grid-gap: 1em;">
              <adw-input
                placeholder="Select a country"
                suggestions="USA;Canada;Brazil;England;Germany;France;Spain;Poland;Russia;China;Japan"
                fuzzy="true"
              ></adw-input>
              <adw-input
                placeholder="Select a country"
                suggestionsorientation="up"
                suggestions="USA;Canada;Brazil;England;Germany;France;Spain;Poland;Russia;China;Japan"
                fuzzy="true"
              ></adw-input>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Disabled Input">
          <CodeSample>
            <adw-input
              disabled="true"
              value="This value cannot be changed"
            ></adw-input>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
