const NavbarLink = (props: { href: string; label: string }) => {
  return (
    <a
      class="navbar-link"
      href={props.href}
      hx-swap="innerHTML"
      hx-target="#example-view"
      hx-select="#example-view"
    >
      <button class="nav-sidebar-btn">{props.label}</button>
    </a>
  );
};

export const Navbar = () => {
  return (
    <div class="flexbox">
      <div
        class="nav-sidebar flexbox column"
        hx-boost="true"
      >
        <NavbarLink
          label="Box"
          href="/example-page/box.html"
        />
        <NavbarLink
          label="Button"
          href="/example-page/button.html"
        />
        <NavbarLink
          label="Card"
          href="/example-page/card.html"
        />
        <NavbarLink
          label="Checkbox"
          href="/example-page/checkbox.html"
        />
        <NavbarLink
          label="Frame"
          href="/example-page/frame.html"
        />
        <NavbarLink
          label="Input"
          href="/example-page/input.html"
        />
        <NavbarLink
          label="Linked"
          href="/example-page/linked.html"
        />
        <NavbarLink
          label="List"
          href="/example-page/list.html"
        />
        <NavbarLink
          label="Message"
          href="/example-page/message.html"
        />
        <NavbarLink
          label="Nav Sidebar"
          href="/example-page/nav-idebar.html"
        />
        <NavbarLink
          label="Selector"
          href="/example-page/selector.html"
        />
        <NavbarLink
          label="Separator"
          href="/example-page/separator.html"
        />
        <NavbarLink
          label="Slider"
          href="/example-page/slider.html"
        />
        <NavbarLink
          label="Suggestions"
          href="/example-page/suggestions.html"
        />
        <NavbarLink
          label="Switch"
          href="/example-page/switch.html"
        />
        <NavbarLink
          label="Typography"
          href="/example-page/typography.html"
        />
      </div>
      <span class="separator vertical"></span>
    </div>
  );
};
