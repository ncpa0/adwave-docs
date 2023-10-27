import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { Style } from "../../style";

export default function ButtonExample() {
  return (
    <Layout>
      <div class="flexbox column">
        <Style
          dirname={__dirname}
          path="./button.css"
          inline
        />
        <Example title="Button">
          <ExampleSection label="Regular Button">
            <CodeSample>
              <button class="btn button-example">Button</button>
            </CodeSample>
          </ExampleSection>
          <ExampleSection label="Primary Button">
            <CodeSample>
              <button class="btn button-example primary">Button</button>
            </CodeSample>
          </ExampleSection>
          <ExampleSection label="Danger Button">
            <CodeSample>
              <button class="btn button-example danger">Button</button>
            </CodeSample>
          </ExampleSection>
          <ExampleSection label="Flat Button">
            <CodeSample>
              <button class="btn button-example flat">Button</button>
            </CodeSample>
          </ExampleSection>
        </Example>
      </div>
    </Layout>
  );
}
