# ASI Design Tokens

> **Single source of truth for our UI library.**  
> All tokens are implemented as CSS variables in `src/styles/tokens/` and `src/styles/semantic/` for better performance and compatibility.

Design tokens are atomic variables that describe the base styles of the interface  
(colour, typography, spacing, shadows, breakpoints). Instead of hard‑coded values  
(hex codes, rems) we operate with named roles, which makes it easier to maintain  
themes, branding, and automate the design system.

## Contents
1. [Governance](#governance)
2. [Colours](#colours)
3. [Typography](#typography)
4. [Shadows & Focus](#shadows--focus)
5. [Breakpoints & Grid](#breakpoints--grid)
6. [Spacing](#spacing)
7. [Usage example](#usage-example)

---

## Governance

Component styles are built on **semantic tokens**  
(`theme-light.css`, `theme-dark.css`). If there is no suitable
semantic token, a **component token** is declared in
`Component.tokens.ts` and mapped to a base token from
`src/styles/tokens/`. Extending base tokens requires approval
from the design guild.

```css
.badge-warning {{
  background: var(--color-warning);
  color: var(--color-text-inverse);
  padding-inline: var(--spacing-3);
  box-shadow: var(--shadow-sm);
}}
```

---

## Colours

Colour tokens exist on two levels:

1. **Base (`--color-*`)** – fixed palette values, organised into groups:  
   - *Neutrals* (`gray-50…900`, `gray-alpha-*`) – greys for text and surfaces.  
   - *Brand Primary* (`primary-50…900`) – the brand gradient from 10 % tint to 90 % shade.  
   - *Status* (`success`, `warning`, `error`, `info` + `*-light/dark`) – universal status colours.  
   - *Accent* (`accent-*`) – auxiliary hues for graphics and illustrations.  
   - *Gradients (`--gradient-*`)* – ready multi‑colour backgrounds built from base colours.

2. **Semantic (`--color-text-*`, `--color-surface-*`, `--color-button-*`)**  
   express roles in the UI: card background, text on brand surface, etc.  
   Semantic token values vary per theme but reference base tokens only.

**Tips**

- For text use `text-primary / secondary / tertiary / disabled` instead of raw greys.  
- Do not place decorative `gradient-*` on interactive controls; use them for background planes only.  
- If you need a translucent neutral, pick a ready `gray-alpha-*` instead of writing `rgba()`.

---

## Typography

### Base tokens

- **Families**: `font-family-*` (primary, sans, mono) set the main font stack.  
- **Sizes**: `font-size-*` – dual scale: `rem`‑based (12‑32 px) and pixel series (xs‑6xl) for marketing.  
- **Weights**: `font-weight-*` (100‑900) exposed as CSS variables for browsers without variable fonts.  
- **Line & tracking**: `line-height-*`, `letter-spacing-*`, `tracking-*` are synced with Figma tokens.

### Semantic tokens

Headings (`headline1…5`) and body (`body1…4`) aggregate family, size, and tracking.  
This approach avoids “off‑guide” combos and accelerates typography updates.

**Practice**

- For `<h1>` use `headline1-font-size` plus a matching line height.  
- Code blocks and monitoring output use `--font-family-mono`.  
- In responsive layouts, scale only the size (`font-size-*`) while preserving line height.

---

## Shadows & Focus

`--shadow-*` tokens describe element elevation following Material Design:  
`sm` – hover, `md` – popover, `lg` – modal, `xl` – top‑level navigation.

Focus rings (`--shadow-focus-*`) enhance accessibility:  
they appear on keyboard navigation and match the control’s state colour.

**Important**: do not mix box‑shadow and outline; choose one accent type per element.

---

## Breakpoints & Grid

### Breakpoints

`--bp-sm` 576 → mobile, `--bp-md` 768 → portrait tablet,  
`--bp-lg` 992 → landscape tablet / small desktop,  
`--bp-xl` 1200 → desktop, `--bp-2xl` 1400 → wide desktop.

### Grid

- **Desktop**: 12 columns, outer gutters 54 px, inner gutter 24 px.  
  Container `--grid-desktop-width` (1512 px) includes margins.
- **Mobile**: 5 columns, margin 16 px, gutter 12 px, total width 320 px.

For custom layouts override gutters only; keep the column system intact.

---

## Spacing

### Spacing scale (`--spacing-*`)

Multiples of 4 px covering 0–128 px (`spacing-0…32`).  
The 4 px step builds a rhythmic vertical grid and quick recall in markup.

### Radii (`--radius-*`)

Follow the same rationale: 0, 4, 8, 12, 16, 24, 9999 px  
(`none, sm, md, lg, xl, 2xl, full`).  
Avoid intermediate values – they break the visual rhythm.

### Component paddings

Button and input paddings rely on the same scale:

```css
.button-sm {{
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
}}
```

---

## Usage example

```css
.card {{
  background: var(--color-surface-primary);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-16);
  line-height: var(--line-height-normal);
}}
```
