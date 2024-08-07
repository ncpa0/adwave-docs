import { Box, NavSidebar } from "adwavecss";
import HamburgerDark from "../assets/burger-dark.svg";
import HamburgerLight from "../assets/burger-light.svg";
import { cls } from "../utils/cls";
import { url } from "../utils/url";
import { FontSizeSelector } from "./font-size-selector";
import { ThemeSwitcher } from "./theme-switcher";

const NavbarLink = (props: {
  href: string;
  label: string;
  isActive?: boolean;
}) => {
  return (
    <a
      is="navbar-button"
      class="navbar-link"
      href={url(props.href)}
      hx-boost="true"
      hx-swap="outerHTML transition:true"
      hx-target="#example-view"
      hx-select="#example-view"
      preload="mouseover"
      tabindex={"-1"}
    >
      <button
        class={cls(NavSidebar.button, {
          active: props.isActive,
        })}
      >
        {props.label}
      </button>
    </a>
  );
};

const NavbarAllLinks = (props: { activePage?: string }) => {
  return (
    <>
      <NavbarLink
        label="Input"
        isActive={props.activePage === "input"}
        href="/example-page/input.html"
      />
      <NavbarLink
        label="Selector"
        isActive={props.activePage === "selector"}
        href="/example-page/selector.html"
      />
      <NavbarLink
        label="Slider"
        isActive={props.activePage === "slider"}
        href="/example-page/slider.html"
      />
      <NavbarLink
        label="Switch"
        isActive={props.activePage === "switch"}
        href="/example-page/switch.html"
      />
      <span class={NavSidebar.separator}></span>
      <NavbarLink
        label="Alert"
        isActive={props.activePage === "alert"}
        href="/example-page/alert.html"
      />
      <NavbarLink
        label="Box"
        isActive={props.activePage === "box"}
        href="/example-page/box.html"
      />
      <NavbarLink
        label="Breadcrumbs"
        isActive={props.activePage === "breadcrumbs"}
        href="/example-page/breadcrumbs.html"
      />
      <NavbarLink
        label="Button"
        isActive={props.activePage === "button"}
        href="/example-page/button.html"
      />
      <NavbarLink
        label="Card"
        isActive={props.activePage === "card"}
        href="/example-page/card.html"
      />
      <NavbarLink
        label="Checkbox"
        isActive={props.activePage === "checkbox"}
        href="/example-page/checkbox.html"
      />
      <NavbarLink
        label="Dialog"
        isActive={props.activePage === "dialog"}
        href="/example-page/dialog.html"
      />
      <NavbarLink
        label="Frame"
        isActive={props.activePage === "frame"}
        href="/example-page/frame.html"
      />
      <NavbarLink
        label="Linked"
        isActive={props.activePage === "linked"}
        href="/example-page/linked.html"
      />
      <NavbarLink
        label="List"
        isActive={props.activePage === "list"}
        href="/example-page/list.html"
      />
      <NavbarLink
        label="Message"
        isActive={props.activePage === "message"}
        href="/example-page/message.html"
      />
      <NavbarLink
        label="Nav Sidebar"
        isActive={props.activePage === "nav-sidebar"}
        href="/example-page/nav-sidebar.html"
      />
      <NavbarLink
        label="Scrollview"
        isActive={props.activePage === "scrollview"}
        href="/example-page/scrollview.html"
      />
      <NavbarLink
        label="Separator"
        isActive={props.activePage === "separator"}
        href="/example-page/separator.html"
      />
      <NavbarLink
        label="Skeleton"
        isActive={props.activePage === "skeleton"}
        href="/example-page/skeleton.html"
      />
      <NavbarLink
        label="Spinner"
        isActive={props.activePage === "spinner"}
        href="/example-page/spinner.html"
      />
      <NavbarLink
        label="Typography"
        isActive={props.activePage === "typography"}
        href="/example-page/typography.html"
      />
    </>
  );
};

const LeftNavbarDesktop = (props: { activePage?: string }) => {
  return (
    <div class="flexbox left-navbar column">
      <ThemeSwitcher />
      <FontSizeSelector />
      <span class="separator"></span>
      <div class={cls(NavSidebar.navSidebar, "flexbox column")}>
        <NavbarAllLinks activePage={props.activePage} />
      </div>
    </div>
  );
};

const LeftNavbarMobile = (props: { activePage?: string }) => {
  return (
    <div class="left-navbar-mobile column">
      <button class="btn square flat navbar-mobile-btn">
        <HamburgerDark class="light-theme-img" />
        <HamburgerLight class="dark-theme-img" />
      </button>
      <dialog class="navbar-dialog">
        <div class="dialog-container flexbox">
          <div class="left-navbar-mobile-overlay box bg-2 column">
            <ThemeSwitcher />
            <FontSizeSelector />
            <span class="separator"></span>
            <div class={cls(NavSidebar.navSidebar, "flexbox", "column")}>
              <NavbarAllLinks activePage={props.activePage} />
            </div>
          </div>
          <div class="navbar-overlay-backdrop"></div>
        </div>
      </dialog>
    </div>
  );
};

export const Navbar = (props: { activePage?: string }) => {
  return (
    <div class={cls(Box.box, "bg-3")}>
      <LeftNavbarDesktop activePage={props.activePage} />
      <LeftNavbarMobile activePage={props.activePage} />
    </div>
  );
};
