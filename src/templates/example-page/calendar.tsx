import { Box } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";
import { css } from "../../utils/css";

const PAGE_DESCRIPTION = "";

export default function CalendarExample() {
  return (
    <Layout
      title="Calendar Example"
      activePage="calendar"
      description={PAGE_DESCRIPTION}
    >
      <div class="flexbox">
        <Example title="Calendar">
          <ExampleSection
            label="Calendar"
            description="Calendar allows the user to select a date."
          >
            <CodeSample>
              <adw-calendar style="width: min-content;"></adw-calendar>
            </CodeSample>
          </ExampleSection>
        </Example>
      </div>
    </Layout>
  );
}
