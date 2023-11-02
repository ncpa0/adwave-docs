import { Checkbox } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

export default function CheckboxExample() {
  return (
    <Layout title="Checkbox Example" activePage="checkbox">
      <Example title="Checkbox">
        <ExampleSection label="Regular Checkbox">
          <CodeSample>
            <input type="checkbox" class="checkbox" />
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Disabled Checkbox">
          <CodeSample>
            <div style="display: grid; grid-template-columns: 1fr 1fr; justify-items: center;">
              <input type="checkbox" class={cls(Checkbox.checkbox, Checkbox.disabled)} disabled />
              <input type="checkbox" class={cls(Checkbox.checkbox, Checkbox.disabled)} disabled checked />
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
