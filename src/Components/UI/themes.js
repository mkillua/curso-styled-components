
import {
  LightTheme,
  DarkTheme,
  LightThemeText,
  DarkThemeText,
  DarkThemeContent,
  LightThemeContent } from "./variables";

  export const ThemeAsDark =  {
    body: DarkTheme,
    inside: DarkThemeContent,
    text: DarkThemeText,
    filter: "invert(100%)"
  };

  export const ThemeAsLight =  {
    body: LightTheme,
    inside: LightThemeContent,
    text: LightThemeText,
    filter: ''
  };
