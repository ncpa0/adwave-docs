import { Typography } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";

const PAGE_DESCRIPTION =
  "Documentation and examples for Typography of the AdwaveCSS framework.";

const loremIpsum =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean posuere lacus quam, in commodo dolor posuere et. Sed at est convallis, commodo lorem vel, pellentesque tortor. Curabitur rutrum magna quis libero placerat, vitae vestibulum ex vestibulum. Proin vitae sapien velit. Nullam ex risus, cursus sit amet interdum eu, congue a felis. Sed congue, erat id euismod pharetra, mauris dolor mollis metus, eu vehicula risus massa ac justo. Nullam vulputate orci sed egestas mattis. Sed nec sem justo. Nulla facilisi.`;

export default function TypographyExample() {
  return (
    <Layout
      title="Typography Example"
      activePage="typography"
      description={PAGE_DESCRIPTION}
    >
      <Example title="Typography">
        <ExampleSection label="Header">
          <CodeSample>
            <span class={Typography.header}>Lorem ipsum dolor sit amet</span>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Label">
          <CodeSample>
            <span class={Typography.label}>Lorem ipsum dolor sit amet</span>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Text">
          <CodeSample>
            <span class={Typography.text}>{loremIpsum}</span>
          </CodeSample>
        </ExampleSection>
        <ExampleSection label="Subtitle">
          <CodeSample>
            <span class={Typography.subtitle}>{loremIpsum}</span>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
