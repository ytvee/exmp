# ASI Design System

> 👋 Hello, colleague! This design system is an internal library of reusable UI components, design tokens, and developer tools.

It exists to ensure interface consistency, accelerate team delivery, and guarantee scalability across every internal application.  
It serves as the single foundation for building and maintaining a coherent user experience in all company projects.

---

## Table of Contents
1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Getting Started](#getting-started)
4. [Repository Structure](#repository-structure)
5. [Design Tokens](#design-tokens)
6. [Styling & Specificity](#styling--specificity)
7. [Component Layers](#component-layers)
8. [GlobalStyles](#globalstyles)
9. [Build & Release](#build--release)
10. [Testing](#testing)
11. [Adding a Component — Checklist](#adding-a-component--checklist)
12. [Theming & Runtime Customisation](#theming--runtime-customisation)
13. [License](#license)

---

## Overview
**ASI Design System** is an internal set of UI components.

* **Consistency** — a unified visual language across every product.
* **Velocity** — rapid interface assembly thanks to ready‑made building blocks.
* **Scalability** — new tokens / components can be added without breaking existing code.
* **Collaboration** — Storybook shows how each component looks and what props it accepts, so designers and developers stay in sync.

Tech stack: **React, TypeScript, Vite, Storybook, CSS Modules, Styled Components**.

---

## Quick Start
```bash
npm i          # install dependencies
npm run dev    # launch Storybook
```

---

## Getting Started
### Prerequisites
* Node ≥ 20
* **npm** or **yarn**

### Installation
```bash
git clone git@github.com:asi-alliance/asi-create-design-system.git && cd asi-create-design-system
npm i
```

### Local Storybook / Dev Server
```bash
npm run dev          # Vite + HMR
```

---

## Repository Structure
```
design-system/
├─ src/
│  ├─ packages/
│  │  ├─ tokens/          # CSS‑based tokens
│  │  ├─ ui/              # React components (atoms / molecules / organisms / templates)
│  │  └─ utils/           # Utility functions
│  ├─ styles/
│  │  ├─ tokens/          # Base tokens (colors.css, typography.css, spacing.css)
│  │  └─ semantic/        # Theme tokens (theme-light.css, theme-dark.css)
│  ├─ components/         # Legacy components
│  ├─ tokens/             # Theme providers and configuration
│  └─ hooks/              # Custom React hooks
├─ plop-templates/        # Component generation templates
└─ public/                # Static assets
```

---

## Design Tokens

### CSS‑based Tokens
Tokens are implemented via CSS variables for better performance and compatibility.

### Two‑tier Model
| Tier | Contains | Location |
|------|----------|----------|
| **base** | raw values | `src/styles/tokens/` |
| **semantic** | theme‑specific values | `src/styles/semantic/` |
| **component** | component‑private tokens | `Component.tokens.ts` |

### Token Structure
- **Base tokens** (`src/styles/tokens/`): colours, typography, spacing
- **Semantic tokens** (`src/styles/semantic/`): themed values for light / dark
- **Component tokens**: local settings of a specific component

### Switching Theme
```css
:root {             /* light theme */
  --color-surface-primary: #ffffff;
  --color-text-primary: #111827;
}

[data-theme="dark"] {  /* dark theme */
  --color-surface-primary: #2b2b2b;
  --color-text-primary: #ffffff;
}
```

---

## Styling & Specificity
Components use CSS Modules for style isolation and CSS variables for theming.  
Styles are written with semantic tokens instead of hard‑coded values:

```css
.button-primary {
  background: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
  padding: var(--spacing-3) var(--spacing-4);
}

.button-primary:hover {
  background: var(--color-button-primary-hover);
}
```

---

## Component Layers
```
[tokens] → [primitives] → [atoms] → [molecules] → [organisms] → [templates]
```
* **Atoms** — Button, Checkbox, Spinner, Input.
* **Molecules** — InputGroup, Tooltip, Card.
* **Organisms** — DatePicker, Table, Navigation.
* **Templates** — Layout templates.

Component directory template:
```
Button/
├─ Button.tsx
├─ Button.module.css
├─ Button.types.ts
├─ Button.stories.tsx
├─ __tests__/
│  └─ Button.test.tsx
└─ index.ts
```

---

## GlobalStyles
The component uses styled‑components and a ThemeProvider:

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

`<GlobalStyle>`:
* injects base styles and CSS variables;
* sets `data-theme="light"` (or `dark`);
* listens to `prefers-color-scheme` for automatic switching.

---

## Build & Release

1. **Ensure a clean tree**
   ```bash
   git status         # no uncommitted files
   npm run lint && npm run build
   ```

2. **Bump versions**
   ```bash
   npm version patch   # patch | minor | major
   ```

3. **Commit & tag**
   ```bash
   git commit -am "release: v0.0.0"
   git tag v0.0.0
   git push origin main --tags
   ```

4. **Login to the registry**
   ```bash
   npm login --registry=https://registry.npmjs.org
   # you can export NPM_TOKEN instead of login
   ```

5. **Publish the package**
   ```bash
   npm publish --access public --tag latest
   ```

---

## Testing
_TODO: specify unit and visual testing strategy._  <!-- preserved as in original if exists; adjust if necessary -->

---

## Adding a Component — Checklist
1. `npm run generate` — scaffold a component via Plop.
2. Define component‑tokens `Component.tokens.ts` (if needed).
3. Implement JSX + CSS Modules.
4. Write stories and tests.
5. PR → Review → merge.

---

## Theming & Runtime Customisation
```js
// switch theme
document.documentElement.dataset.theme = 'dark'
// custom var()
document.documentElement.style.setProperty('--color-primary-500', '#ff0')
```
`prefers-color-scheme` support is on by default if no theme specified explicitly.

---

## License
Project is distributed under the **MIT License**.
