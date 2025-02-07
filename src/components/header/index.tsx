import GitHubButton from "react-github-btn";
import { ModeToggle } from "../toggle-mode";
import { useTheme } from "../Theme-provider";

const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="p-4 flex items-center justify-between">
      <div>
        <GitHubButton
          data-icon="octicon-star"
          data-size="large"
          data-color-scheme={theme}
          data-show-count="true"
          href="https://github.com/PriyajitMaity"
        >
          wish
        </GitHubButton>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
