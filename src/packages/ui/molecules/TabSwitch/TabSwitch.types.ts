import type React from "react"

export type TabSwitchVariant = "full" | "small" | "mobile"

export interface TabOption {
  label: string
  icon: React.ReactNode
  value?: string | number
}

export interface TabSwitchProps {
  /**
   * Array of tab options to display
   */
  options: TabOption[]

  /**
   * Index of the default selected tab
   */
  selected: number

  /**
   * Callback function when a tab is selected
   */
  onChange?: (index: number, option: TabOption) => void

  /**
   * Size variant of the tab switch
   */
  variant?: TabSwitchVariant

  /**
   * Color variant of the component
   */
  colorVariant?: "primary" | "secondary" | "error" | "warning"

  /**
   * Disabled state
   */
  disabled?: boolean

  /**
   * Loading state
   */
  loading?: boolean

  /**
   * Children content
   */
  children?: React.ReactNode

  /**
   * Optional className for additional styling
   */
  className?: string
}

