# Colors

> A single source of truth for color tokens and their roles inside the **ASI Create** platform.  
> All values come from `src/styles/tokens/colors.css` and are exposed as CSS variables (`--color-*`, `--gradient-*`). Semantic names guarantee consistent use across dashboards, chats, agent builders and promo pages.

---

## Categories & core tokens

| Category | Tokens | Typical use cases |
|----------|--------|-------------------|
| **Primary** | `primary-50…900`<br>`brand-light`, `brand-dark` | Primary CTA buttons, links, check‑boxes, radio indicators, active icon states |
| **Status** | `success`, `warning`, `error`, `info` (+ `*-light` / `*-dark`) | Status signals: agent badges, alerts, form validation highlights |
| **Accent** | `accent-purple`, `accent-orange`, `accent-dyellow`, `accent-red/green/blue` | Extra accents in charts, illustrations, text highlights |
| **Neutrals** | `white`, `black`, `gray-50…900`, `gray-alpha-87/60/38` | Base text, icons, borders, background layers |
| **Surface** | `surface-primary`, `surface-secondary`, `surface-tertiary`, `surface-quaternary`, `surface-elevated` | Cards, modals, sidebars, tabs |
| **Semantic text** | `text-primary/secondary/tertiary/disabled`,<br>`text-inverse`, `text-inverse-secondary`, `text-inverse-disabled` | Typography on light or brand backgrounds |
| **Gradients** | `gradient-primary`, `gradient-primary-alt`, `gradient-gray`,<br>`gradient-neon-void`, `gradient-aqua-horizon`, `gradient-ether-glow`, `gradient-pulse-nova`, `gradient-aurora-vortex`, `gradient-solar-ember` | Hero sections, Spaces covers, decorative blocks |

---

## Token values

<details>
<summary>Primary (Brand)</summary>

| Variable | Value |
|------------|----------|
| `--color-primary-50`  | `#F0F4FF` |
| `--color-primary-100` | `#E0E9FF` |
| `--color-primary-200` | `#C7D6FF` |
| `--color-primary-300` | `#A4BCFF` |
| `--color-primary-400` | `#7B9AFF` |
| `--color-primary-500` | `#685DFF` |
| `--color-primary-600` | `#4D38FF` |
| `--color-primary-700` | `#3B2FD9` |
| `--color-primary-800` | `#2F26B3` |
| `--color-primary-900` | `#272096` |
| `--color-brand-light` | `var(--color-primary-500)` *(синоним)* |
| `--color-brand-dark`  | `#403BFF` |
</details>

<details>
<summary>Status</summary>

| Variable | Value |
|------------|----------|
| `--color-success-light` | `#4ADE80` |
| `--color-success`       | `#1DB549` |
| `--color-success-dark`  | `#16A34A` |
| `--color-warning-light` | `#FCD34D` |
| `--color-warning`       | `#FFCC00` |
| `--color-warning-dark`  | `#F59E0B` |
| `--color-error-light`   | `#F87171` |
| `--color-error`         | `#D32F2F` |
| `--color-error-dark`    | `#DC2626` |
| `--color-info-light`    | `#60A5FA` |
| `--color-info`          | `#2E6CF3` |
| `--color-info-dark`     | `#2563EB` |
</details>

<details>
<summary>Accent</summary>

| Variable | Value |
|------------|----------|
| `--color-accent-purple` | `#9342F5` |
| `--color-accent-orange` | `#F75D16` |
| `--color-accent-dyellow`| `#BE9800` |
| `--color-accent-yellow` | `#FFCC00` *(дубль warning)* |
| `--color-accent-red`    | `var(--color-error)` |
| `--color-accent-green`  | `var(--color-success)` |
| `--color-accent-blue`   | `var(--color-info)` |
</details>

<details>
<summary>Neutrals</summary>

| Variable | Value |
|------------|----------|
| `--color-white`         | `#FFFFFF` |
| `--color-black`         | `#000000` |
| `--color-gray-50`       | `#F9FAFB` |
| `--color-gray-100`      | `#F3F4F6` |
| `--color-gray-200`      | `#E5E7EB` |
| `--color-gray-300`      | `#D1D5DB` |
| `--color-gray-400`      | `#9CA3AF` |
| `--color-gray-500`      | `#6B7280` |
| `--color-gray-600`      | `#4B5563` |
| `--color-gray-700`      | `#374151` |
| `--color-gray-800`      | `#1F2937` |
| `--color-gray-900`      | `#111827` |
| `--color-gray-alpha-87` | `rgba(0 0 0 / 0.87)` |
| `--color-gray-alpha-60` | `rgba(0 0 0 / 0.60)` |
| `--color-gray-alpha-38` | `rgba(0 0 0 / 0.38)` |
| `--color-gray-light`    | `#DDDDDD` |
| `--color-gray-paper-3`  | `#E8ECF1` |
| `--color-gray-paper-4`  | `#F3F6F8` |
</details>

<details>
<summary>Surface</summary>

| Variable | Value |
|------------|----------|
| `--color-surface-primary`   | `#FFFFFF` |
| `--color-surface-secondary` | `#F9FAFB` |
| `--color-surface-elevated`  | `var(--color-white)` |
| `--color-surface-tertiary`  | `#E8ECF1` |
| `--color-surface-quaternary`| `#F3F6F8` |
</details>

<details>
<summary>Semantic text</summary>

| Variable | Value | Purpose |
|------------|----------|-----------|
| `--color-text-primary`   | `var(--color-gray-900)` | Основной текст на светлом фоне |
| `--color-text-secondary` | `var(--color-gray-600)` | Подписи, less‑important UI |
| `--color-text-tertiary`  | `var(--color-gray-500)` | Вспомогательные подписи |
| `--color-text-disabled`  | `var(--color-gray-400)` | Отключённые элементы |
| `--color-text-inverse`           | `#FFFFFF` | Текст на brand‑фоне |
| `--color-text-inverse-secondary` | `rgba(255 255 255 / 0.70)` | Вспомогательный текст на brand‑фоне |
| `--color-text-inverse-disabled`  | `rgba(255 255 255 / 0.38)` | Disabled на brand‑фоне |
</details>

<details>
<summary>Gradients</summary>

| Variable | Value / sample |
|------------|-------------------|
| `--gradient-primary`       | `linear-gradient(15deg, #685DFF 17.16%, #4D38FF 75%)` |
| `--gradient-primary-alt`   | `linear-gradient(180deg, #6D5BFF 0%, #403BFF 100%)` |
| `--gradient-gray`          | `linear-gradient(106deg, rgba(255 255 255 / 0.72) 6%, rgba(255 255 255 / 0.54) 41%, rgba(242 242 242 / 0.72) 93%)` |
| `--gradient-neon-void`     | `linear-gradient(180deg, #620D92 0%, #3843E2 100%)` |
| `--gradient-aqua-horizon`  | `linear-gradient(180deg, #4855DB 0%, #34E0E8 100%)` |
| `--gradient-ether-glow`    | `linear-gradient(180deg, #6A50DF 0%, #F8A4E9 100%)` |
| `--gradient-pulse-nova`    | `linear-gradient(180deg, #9C7CF4 0%, #F49782 100%)` |
| `--gradient-aurora-vortex` | `linear-gradient(180deg, #F35D82 0%, #E32D2F 100%)` |
| `--gradient-solar-ember`   | `linear-gradient(180deg, #B2335F 0%, #FAA682 100%)` |
</details>

---


## Usage rules

1. **Base and semantic tokens**  
   Use semantic tokens (`text-*`, `surface-*`) instead of raw colors.  
   This simplifies theme switching (light/dark) and re‑branding.

2. **Transparent neutrals**  
   `gray-alpha-*` tokens are intended for icons and text that sits on top of images.  
   Avoid arbitrary `rgba` values.

3. **Decorative gradients**  
   Tokens with the `gradient-*` prefix can be used on static blocks (hero sections, cards)  
   but must not be applied to interactive controls (buttons, inputs).

4. **Compatibility**  
   The `brand-light` and `brand-dark` variables maintain compatibility with the old UI kit,  
   yet new code should prefer `primary-500/600`.

---

## CSS example

```css
.button-primary {
  background: var(--color-button-primary-bg);
  color: var(--color-button-primary-text);
  box-shadow: var(--shadow-sm);
}

.button-primary:hover {
  background: var(--color-button-primary-hover);
}

.badge-published {
  background: var(--color-success-light);
  color: var(--color-success);
  border: 1px solid var(--color-success);
}

.card {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  box-shadow: var(--shadow-sm);
}

.input {
  background: var(--color-input-bg);
  border: 1px solid var(--color-input-border);
  color: var(--color-input-text);
}

.input:focus {
  border-color: var(--color-input-focus);
  box-shadow: 0 0 0 4px var(--color-primary-500);
}
```
