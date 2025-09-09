import type React from "react"

export interface ModalAction {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'outlined'
  disabled?: boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children?: React.ReactNode
  actions?: ModalAction[]
  size?: "small" | "medium" | "large"
  className?: string
  disabled?: boolean
  loading?: boolean
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}