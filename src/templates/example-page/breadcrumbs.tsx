import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

export default function BoxExample() {
  return (
    <Layout
      title="Breadcrumbs Example"
      activePage="breadcrumbs"
    >
      <div class="flexbox">
        <Example title="Box">
          <ExampleSection label="Breadcrumbs">
            <CodeSample>
              <div class="breadcrumbs" style="width: fit-content;">
                <button class="breadcrumb-item activable">Root</button>
                <span class="breadcrumb-separator"></span>
                <button class="breadcrumb-item activable">Documents</button>
                <span class="breadcrumb-separator"></span>
                <button class="breadcrumb-item active">ADWaveCSS</button>
              </div>
            </CodeSample>
          </ExampleSection>
        </Example>
      </div>
    </Layout>
  );
}
