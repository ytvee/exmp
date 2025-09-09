export interface MobilePageSwitchProps {
  /**
   * Currently selected page ID
   */
  currentPageId: string | number

  /**
   * Callback when a page is selected
   */
  onPageChange: (pageId: string | number) => void

  /**
   * Callback when back button is clicked
   */
  onBackClick: () => void

  /**
   * Optional className for additional styling
   */
  className?: string

  /**
   * Disabled state
   */
  disabled?: boolean

  /**
   * Children content
   */
  children?: React.ReactNode
}
  
  