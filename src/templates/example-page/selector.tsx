import { Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

export default function SelectorExample() {
  return (
    <Layout
      title="Selector Example"
      activePage="selector"
    >
      <Example title="Selector">
        <ExampleSection label="Regular Selector">
          <CodeSample>
            <div style="display: grid; grid-template-rows: 1fr 1fr; grid-gap: 1em;">
              <adw-selector
                placeholder="Select language"
                onchange="document.querySelector('#selector-value').innerText = event.detail.value;"
              >
                <adw-option value="de">German</adw-option>
                <adw-option
                  value="en"
                  selected="true"
                >
                  English
                </adw-option>
                <adw-option value="es">Spanish</adw-option>
                <adw-option value="fr">French</adw-option>
                <adw-option value="it">Italian</adw-option>
                <adw-option value="ja">Japanese</adw-option>
                <adw-option value="pl">Polish</adw-option>
                <adw-option value="pt">Portuguese</adw-option>
                <adw-option value="ru">Russian</adw-option>
                <adw-option value="zh">Chinese</adw-option>
              </adw-selector>
              <span class={Typography.text}>
                Current value: <span id="selector-value">en</span>
              </span>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Upward Selector">
          <CodeSample>
            <adw-selector
              placeholder="Select language"
              orientation="up"
            >
              <adw-option value="de">German</adw-option>
              <adw-option
                value="en"
                selected="true"
              >
                English
              </adw-option>
              <adw-option value="es">Spanish</adw-option>
              <adw-option value="fr">French</adw-option>
              <adw-option value="it">Italian</adw-option>
              <adw-option value="ja">Japanese</adw-option>
              <adw-option value="pl">Polish</adw-option>
              <adw-option value="pt">Portuguese</adw-option>
              <adw-option value="ru">Russian</adw-option>
              <adw-option value="zh">Chinese</adw-option>
            </adw-selector>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Disabled Selector">
          <CodeSample>
            <adw-selector disabled>
              <adw-option value="de">German</adw-option>
              <adw-option
                value="en"
                selected="true"
              >
                English
              </adw-option>
            </adw-selector>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
