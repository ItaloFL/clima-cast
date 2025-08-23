import { Home } from "./screens/home";
import { ThemeProvider } from "./components/theme-provider";

export function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
