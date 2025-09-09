export interface CodeBlockProps {
  /** The code content to display */
  code: string

  /** Additional CSS class name */
  className?: string

  /** Optional maximum height for the code block */
  maxHeight?: string

  /** Optional width for the code block */
  width?: string
}

export type TokenType =
  | 'keyword'
  | 'property'
  | 'string'
  | 'variable'
  | 'value'
  | 'plain'

export interface Token {
  type: TokenType
  content: string
}

export interface CodeLine {
  tokens: Token[]
}
