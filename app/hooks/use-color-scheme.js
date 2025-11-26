// app/hooks/use-color-scheme.js
import { useColorScheme as _useColorScheme } from 'react-native';

/**
 * Returns 'light' or 'dark' depending on the system color scheme.
 * You can extend it later to support user overrides.
 */
export function useColorScheme() {
  return _useColorScheme() ?? 'light';
}
