import { ThemeProvider } from '@/components/theme-provider';
import Homepage from './Homepage';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
