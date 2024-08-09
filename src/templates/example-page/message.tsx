import { Message } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

const PAGE_DESCRIPTION =
  "Documentation and examples for the Message component of the AdwaveCSS framework.";

export default function MessageExample() {
  return (
    <Layout
      title="Message Example"
      activePage="message"
      description={PAGE_DESCRIPTION}
    >
      <Example title="Message">
        <ExampleSection label="Message">
          <CodeSample>
            <div style="display: grid; grid-template-rows: 1fr 1fr; grid-gap: 1em;">
              <span class={cls(Message.message, "info")}>Message: Info</span>
              <span class={cls(Message.message, Message.success)}>
                Message: Success
              </span>
              <span class={cls(Message.message, Message.warning)}>
                Message: Warning
              </span>
              <span class={cls(Message.message, Message.error)}>
                Message: Error
              </span>
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
