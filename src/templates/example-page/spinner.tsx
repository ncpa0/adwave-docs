import { Spinner, Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

export default function SpinnerExample() {
  return (
    <Layout title="Spinner Example" activePage="spinner">
      <Example title="Spinner">
        <ExampleSection label="Spinner">
          <CodeSample>
            <div class={Spinner.spinner}>
              <span class={Spinner.innerCircle} />
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
