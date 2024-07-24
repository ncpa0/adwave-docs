import { Card } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

export default function CardExample() {
  return (
    <Layout title="Card Example" activePage="card">
      <Example title="Card">
        <ExampleSection label="Regular Card">
          <CodeSample>
            <div class="box" style="padding: 2em">
              <div class={Card.card} style="width: 100px; height:100px"></div>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection
          label="Activable Card"
          description="Hover the mouse over the card to see it change color."
        >
          <CodeSample>
            <div class="box" style="padding: 2em">
              <div
                class={cls(Card.card, Card.activable)}
                style="width: 100px; height:100px"
              >
              </div>
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
