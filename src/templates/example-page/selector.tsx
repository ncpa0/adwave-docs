import { Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

const PAGE_DESCRIPTION =
  "Documentation and examples for the Selector component of the AdwaveCSS framework and the AdwaveUI library.";

export default function SelectorExample() {
  return (
    <Layout
      title="Selector Example"
      activePage="selector"
      description={PAGE_DESCRIPTION}
    >
      <Example title="Selector">
        <ExampleSection label="Regular Selector">
          <CodeSample>
            <div style="display: grid; grid-template-rows: 1fr 1fr; grid-gap: 1em;">
              <adw-selector
                placeholder="Select language"
                onchange="document.querySelector('#selector-value').innerText = event.detail.value;"
              >
                <adw-option value="de">German</adw-option>
                <adw-option value="en" selected="true">
                  English
                </adw-option>
                <adw-option value="es">Spanish</adw-option>
                <adw-option value="fr">French</adw-option>
                <adw-option value="it">Italian</adw-option>
                <adw-option value="ja">Japanese</adw-option>
                <adw-option value="pl">Polish</adw-option>
                <adw-option value="pt">Portuguese</adw-option>
                <adw-option value="ru">Russian</adw-option>
                <adw-option value="zh">Chinese</adw-option>
              </adw-selector>
              <span class={Typography.text}>
                Current value: <span id="selector-value">en</span>
              </span>
            </div>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Upward Selector">
          <CodeSample>
            <adw-selector placeholder="Select language" orientation="up">
              <adw-option value="de">German</adw-option>
              <adw-option value="en" selected="true">
                English
              </adw-option>
              <adw-option value="es">Spanish</adw-option>
              <adw-option value="fr">French</adw-option>
              <adw-option value="it">Italian</adw-option>
              <adw-option value="ja">Japanese</adw-option>
              <adw-option value="pl">Polish</adw-option>
              <adw-option value="pt">Portuguese</adw-option>
              <adw-option value="ru">Russian</adw-option>
              <adw-option value="zh">Chinese</adw-option>
            </adw-selector>
          </CodeSample>
        </ExampleSection>
        <ExampleSection
          label="Inert Selector Option"
          description="Inert selector option will display in the dropdown but cannot be interacted with."
        >
          <CodeSample>
            <adw-selector placeholder="Select animal">
              <adw-option inert>Mammals</adw-option>
              <adw-option value="cat">Cat</adw-option>
              <adw-option value="dog">Dog</adw-option>
              <adw-option value="platypus">Platypus</adw-option>
              <adw-option value="bat">Bat</adw-option>
              <adw-option value="lion">Lion</adw-option>
              <adw-option inert>Birds</adw-option>
              <adw-option value="eagle">Eagle</adw-option>
              <adw-option value="penguin">Penguin</adw-option>
              <adw-option value="parrot">Parrot</adw-option>
              <adw-option value="owl">Owl</adw-option>
              <adw-option value="pigeon">Pigeon</adw-option>
              <adw-option value="crow">Crow</adw-option>
              <adw-option value="raven">Raven</adw-option>
              <adw-option value="hummingbird">Hummingbird</adw-option>
              <adw-option inert>Arachnids</adw-option>
              <adw-option value="spider">Spider</adw-option>
              <adw-option value="scorpion">Scorpion</adw-option>
              <adw-option value="tick">Tick</adw-option>
            </adw-selector>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Disabled Selector">
          <CodeSample>
            <adw-selector disabled>
              <adw-option value="de">German</adw-option>
              <adw-option value="en" selected="true">
                English
              </adw-option>
            </adw-selector>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
