import type React from "react"
export type NotificationVariant = "info" | "success" | "warning" | "error"

export interface NotificationAlertProps {
  /**
   * The variant of the notification
   */
  variant?: NotificationVariant

  /**
   * The title of the notification
   */
  title?: string

  /**
   * The description text of the notification
   */
  description?: string

  /**
   * The text for the link
   */
  linkText?: string

  /**
   * The URL for the link
   */
  linkHref?: string

  /**
   * Optional className for additional styling
   */
  className?: string

  /**
   * Optional click handler for the link
   */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void

  /**
   * Children elements
   */
  children?: React.ReactNode
}

