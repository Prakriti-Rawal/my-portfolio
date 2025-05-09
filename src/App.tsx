import "./global.css";

import { ThemeProvider } from "./theme/theme-provider";
import PortfolioPage from "./pages/portfolio";
import PortfolioNav from "./components/portfolio-nav";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioPage />
      <PortfolioNav />
    </ThemeProvider>
  );
}
