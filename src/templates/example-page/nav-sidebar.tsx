import { NavSidebar } from "adwavecss";
import { CodeSample } from "../../components/code-sample";
import { Example, ExampleSection } from "../../components/example";
import { Layout } from "../../layout";
import { cls } from "../../utils/cls";

export default function NavSidebarExample() {
  return (
    <Layout title="Navigation Sidebar Example" activePage="nav-sidebar">
      <Example title="Nav Sidebar">
        <ExampleSection label="Nav Sidebar">
          <CodeSample>
            <div class={NavSidebar.navSidebar}>
              <button class={cls(NavSidebar.button, NavSidebar.active)}>Wi-Fi</button>
              <button class={NavSidebar.button}>Network</button>
              <button class={NavSidebar.button}>Bluetooth</button>
              <span class={NavSidebar.separator}></span>
              <button class={NavSidebar.button}>Appearance</button>
              <button class={NavSidebar.button}>Notifications</button>
              <button class={NavSidebar.button}>Search</button>
              <button class={NavSidebar.button}>Multitasking</button>
            </div>
          </CodeSample>
        </ExampleSection>
      </Example>
    </Layout>
  );
}
