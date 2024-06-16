import { Box, Button, Card, Input, Skeleton, Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

export default function SkeletonExample() {
  return (
    <Layout
      title="Skeleton Example"
      activePage="skeleton"
    >
      <div class="flexbox">
        <Example title="Skeleton">
          <ExampleSection
            label="Skeleton"
            description="Skeleton is a simple container element that alters how other Adwave elements within it are displayed and adds an animated mask over the content."
          >
            <CodeSample>
              <div class={cls(Box.box, "flexbox", "column")} style="padding: 2em">
                <button
                  class={cls(Button.button)}
                  style="width: fit-content; margin-bottom: 1em;"
                  onmousedown="document.querySelector('#skeleton-example').classList.toggle('skeleton')"
                >
                  Toggle Skeleton
                </button>

                <div class={Card.card}>
                  <div id="skeleton-example" class={cls(Skeleton.skeleton, "flexbox", "column")}>
                    <h1 class={Typography.header}>Some header text</h1>
                    <span class={Typography.subtitle}>Some subtitle text</span>
                    <span style="margin-bottom: 1.5em;"></span>
                    <input class={Input.input} style="margin-bottom: .5em;" />
                    <input class={Input.input} style="margin-bottom: .5em;" />
                    <input type="checkbox" class="checkbox" style="place-self: flex-end;" />
                    <span class={"separator"} />
                    <adw-switch style="place-self: flex-end;" />
                    <span class={"separator"} />
                    <div class={Button.linked} style="place-self: flex-end;">
                      <button class={Button.button}>First btn</button>
                      <button class={Button.button}>Second btn</button>
                    </div>
                  </div>
                </div>
              </div>
            </CodeSample>
          </ExampleSection>
        </Example>
      </div>
    </Layout>
  );
}
