import GhLight from "../assets/github-mark-white.svg";
import GhDark from "../assets/github-mark.svg";

export function GithubBadge() {
  return (
    <a
      class="github-badge"
      href="https://github.com/ncpa0/ADWaveCSS"
      target="_blank"
      title="View source on GitHub"
    >
      <GhDark class="ghb-dark" />
      <GhLight class="ghb-light" />
    </a>
  );
}
