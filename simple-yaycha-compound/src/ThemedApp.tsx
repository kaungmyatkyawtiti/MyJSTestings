import App from './App';
import ThemedWrapper from './ThemedWrapper';
import ThemedToggle from './ThemedToggle';

export default function ThemedApp() {
  return (
    <ThemedWrapper>
      <ThemedToggle>
        <App />
      </ThemedToggle>
    </ThemedWrapper>
  )
}
