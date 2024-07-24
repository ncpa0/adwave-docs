import { Box, Button, Dialog, Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

export default function DialogExample() {
  return (
    <Layout title="Dialog Example" activePage="dialog">
      <Example title="Dialog">
        <ExampleSection label="Dialog">
          <CodeSample>
            <div
              class={cls(Box.box, Box.bg3)}
              style="margin: 1em; display: flex; justify-content: center"
            >
              <div
                class={Dialog.dialog}
                style="width: min(32em, 80vw); min-height: 12em;"
              >
                <div class={Dialog.header}>Dialog Title</div>
                <div class={Dialog.body}>
                  <span class={Typography.text}>
                    This is the dialog content.
                  </span>
                </div>
              </div>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Dialog with <dialog />, only header title">
          <CodeSample>
            <button
              class={Button.button}
              onclick={`(${function () {
                const dialog = document.getElementById(
                  "dialog-example-1",
                ) as HTMLDialogElement;
                dialog.showModal();
              }})()`}
            >
              Open Dialog
            </button>

            <dialog
              id="dialog-example-1"
              class={Dialog.dialog}
              style="width: min(32em, 80vw); min-height: 12em;"
              onclick="event.target.close()"
            >
              <div class={Dialog.header}>Dialog Title</div>
              <div class={Dialog.body}>
                <span class={Typography.text}>This is the dialog content.</span>
              </div>
            </dialog>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Dialog with <dialog />, with header button">
          <CodeSample>
            <button
              class={Button.button}
              onclick={`(${function () {
                const dialog = document.getElementById(
                  "dialog-example-2",
                ) as HTMLDialogElement;
                dialog.showModal();
              }})()`}
            >
              Open Dialog
            </button>

            <dialog
              id="dialog-example-2"
              class={Dialog.dialog}
              style="width: min(32em, 80vw); min-height: 12em;"
            >
              <div class={Dialog.header}>
                <button
                  class={cls(Button.button, Button.flat)}
                  onclick={`(${function () {
                    const dialog = document.getElementById(
                      "dialog-example-2",
                    ) as HTMLDialogElement;
                    dialog.close();
                  }})()`}
                >
                  Cancel
                </button>
                <span class="dialog-title">Dialog Title</span>
                <button
                  class={cls(Button.button, Button.primary)}
                  onclick={`(${function () {
                    const dialog = document.getElementById(
                      "dialog-example-2",
                    ) as HTMLDialogElement;
                    dialog.close();
                  }})()`}
                >
                  Confirm
                </button>
              </div>
              <div class={Dialog.body}>
                <span class={Typography.text}>This is the dialog content.</span>
              </div>
            </dialog>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
