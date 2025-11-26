// app/hooks/use-theme-color.js
import { useColorScheme } from './use-color-scheme';

// Define light and dark color palettes
const Colors = {
  light: {
    text: '#000',
    background: '#fff',
    tint: '#2f95dc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: '#fff',
    tabIconDefault: '#888',
    tabIconSelected: '#fff',
  },
};

/**
 * Gets a color from the theme based on current color scheme.
 * Example: useThemeColor({}, 'background')
 */
export function useThemeColor(props, colorName) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];
  return colorFromProps ?? Colors[theme][colorName];
}
