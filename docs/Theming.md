# Theme

> **Light and dark themes out of the box & easily extendable.**  
> Values are taken from `src/styles/semantic/theme-light.css` and `theme-dark.css`.  
> Theme switching is done via an HTML attribute and does not require changes to components.

---

## 1. What the theme includes

| Layer | Contains | Stored in |
|-------|----------|-----------|
| **Base tokens** | Raw data: colours, fonts, spacing, shadows | `src/styles/tokens/` |
| **Semantic tokens** | UI roles (`text.primary`, `surface.secondary`, `button.primary.bg`) | `src/styles/semantic/` <br> exports `theme-light.css` and `theme-dark.css` |
| **Component tokens** | Local settings of a specific component (`badge.warning.bg`) | `MyComponent.tokens.ts` next to the component |

**Semantic tokens** reference the **base palette**, and components use  
only **semantic** or **component tokens**. This cascade allows you to change the theme without touching any UI code.

---

## 2. Connecting the theme

```tsx
import { ThemeProvider } from './src/tokens/Themes/ThemeProvider';
import GlobalStyle from './src/globalstyles';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
```

`<ThemeProvider>`:
* injects CSS variables for both themes into `:root`;
* sets `data-theme="light"` (or `dark`);
* subscribes to `prefers-color-scheme` for automatic switching.

---

## 3. Runtime switching

```ts
document.documentElement.dataset.theme = 'dark'; // dark theme
document.documentElement.dataset.theme = 'light'; // light theme
```

Components automatically re‑read `var(--color-…)`, so no reassignment of `className` / `style` is required.

---

## 4. Variable structure

```css
:root {               /* light theme */
  --color-surface-primary: #ffffff;
  --color-text-primary: #111827;
  --color-button-primary-bg: #685dff;
  --color-button-primary-hover: #4d38ff;
}

[data-theme="dark"] {  /* dark theme */
  --color-surface-primary: #2b2b2b;
  --color-text-primary: #ffffff;
  --color-button-primary-bg: #685dff;
  --color-button-primary-hover: #4d38ff;
}
```

---

## 5. Adding a new theme

1. Create `src/styles/semantic/theme-custom.css`:
   ```css
   [data-theme="custom"] {
     --color-surface-primary: #f0f0f0;
     --color-text-primary: #333333;
     --color-button-primary-bg: #ff0076;
     --color-button-primary-hover: #d60064;
   }
   ```
2. Import the file in `ThemeProvider.tsx`.
3. For SSR add `<html data-theme="custom">`.

---

## 6. Best Practices

1. Use only semantic tokens in CSS.
2. Theme switch animation ≤ 150 ms; disable it when `prefers-reduced-motion` is active.
3. Components are unaware of themes — switching is implemented solely via CSS variables.
4. All colours must be defined in base tokens and consumed via semantic tokens.

---

## 7. Component example

```css
.card {
  background: var(--color-surface-primary);
  color: var(--color-text-primary);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border-primary);
}

.card--selected {
  border: 2px solid var(--color-button-primary-bg);
}

.button {
  background: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
  padding: var(--spacing-3) var(--spacing-4);
}

.button:hover {
  background: var(--color-button-primary-hover);
}

.badge {
  background: var(--color-success-light);
  color: var(--color-success);
  border: 1px solid var(--color-success);
}
```

---

## 8. File structure

```
src/
├─ styles/
│  ├─ tokens/
│  │  ├─ colors.css          # Base colour tokens
│  │  ├─ typography.css      # Base typography tokens
│  │  ├─ breakpoints.css     # Base breakpoint tokens
│  │  └─ spacing.css         # Base spacing tokens
│  └─ semantic/
│     ├─ theme-light.css     # Light theme semantic tokens
│     └─ theme-dark.css      # Dark theme semantic tokens
├─ tokens/
│  └─ Themes/
│     └─ ThemeProvider.tsx   # Theme provider component
└─ globalstyles.ts           # Global styles component
```

---

## 9. Automatic switching

When using `ThemeProvider` with auto switching:

```tsx
<ThemeProvider autoSwitch={true}>
  <GlobalStyle />
  <App />
</ThemeProvider>
```

The system will:
- Listen to `prefers-color-scheme`
- Automatically switch the theme when system settings change
- Respect `prefers-reduced-motion` for animations
