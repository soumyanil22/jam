import { ThemeProvider } from './@/components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;
