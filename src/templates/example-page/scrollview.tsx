import { ScrollView, Spinner, Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

export default function ScrollviewExample() {
  return (
    <Layout title="Scrollview Example" activePage="scrollview">
      <Example title="Scrollview">
        <ExampleSection
          label="Spinner"
          description="Scrollview adds a styled scrollbar to the element, identical to the one that's added for the Box class."
        >
          <CodeSample>
            <div
              class={ScrollView.scrollView}
              style="max-height: 300px; overflow: auto;"
            >
              <div style="height: 800px; width: 4em; background: linear-gradient(180deg, var(--clr-bg-1), var(--clr-text));" />
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
