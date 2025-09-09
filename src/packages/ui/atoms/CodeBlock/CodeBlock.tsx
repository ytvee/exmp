import React, { useMemo } from 'react'
import styles from './CodeBlock.module.css'
import type { CodeBlockProps } from './CodeBlock.types'
import { IconButton } from '../IconButton'

const keywords = [
  'const',
  'let',
  'var',
  'function',
  'return',
  'export',
  'import',
  'from',
  'as',
  'if',
  'else',
  'for',
  'while',
  'switch',
  'case',
  'break',
  'continue',
  'default',
  'try',
  'catch',
  'finally',
  'throw',
  'new',
  'this',
  'class',
  'extends',
  'implements',
  'interface',
  'type',
  'typeof',
  'instanceof',
  'in',
  'of',
  'void',
  'null',
  'undefined',
  'true',
  'false',
];

const patterns = [
  { type: 'keyword', regex: new RegExp(`\\b(${keywords.join('|')})\\b`, 'g') },
  { type: 'plain', regex: /(\w+)(?=\s*:\s?)/g },
  { type: 'string', regex: /(["'])(.*?)\1/g },
  { type: 'number', regex: /\b(\d+)\b/g },
  { type: 'function', regex: /(\w+)(?=\s*\()/g },
  { type: 'symbol', regex: /[:,=.\\/{}[\]()]/g}
];

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, className, maxHeight, width }) => {
  const parsedCode = useMemo(() => {
    return code.split('\n').map((line, lineIndex) => {
      const tokens: React.ReactNode[] = []
      let remainingLine = line
      let currentIndex = 0

      while (remainingLine.length > 0) {
        let matched = false
        for (const { type, regex } of patterns) {
          regex.lastIndex = 0
          const match = regex.exec(remainingLine)
          if (match && match.index === 0) {
            const tokenClass = (styles as Record<string, string>)[`asi-token--${type}`]
            tokens.push(
              <span key={`${lineIndex}-${currentIndex}`} className={tokenClass}>
                {match[0]}
              </span>,
            )
            remainingLine = remainingLine.substring(match[0].length)
            currentIndex += match[0].length
            matched = true
            break
          }
        }

        if (!matched) {
          tokens.push(
            <span key={`${lineIndex}-${currentIndex}`} className={styles['asi-token--property']}>
              {remainingLine[0]}
            </span>,
          )
          remainingLine = remainingLine.substring(1)
          currentIndex += 1
        }
      }

      return (
        <div key={lineIndex} className={styles['asi-codeline']}>
          {tokens}
        </div>
      )
    })
  }, [code])

  const componentClasses = [styles['asi-codeblock'], className].filter(Boolean).join(' ')
  const style: React.CSSProperties = {
    width: width || '544px',
    maxHeight: maxHeight || undefined,
    overflowY: maxHeight ? 'auto' : 'visible',
  }

  function fallbackCopyTextToClipboard() {
    const textArea = document.createElement("textarea");
    textArea.value = code;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      throw new Error(`Can't copy ${err}`);
    }

    document.body.removeChild(textArea);
  }

  const copyCodeToClipboard = async () => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard();
      return;
    }
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      throw new Error(`Can't copy ${err}`);
    }
  }

  return (
    <div className={componentClasses} style={style} data-asi-component="codeblock">
      <IconButton 
        className={styles['asi-codeblock__copy-button']}
        iconName='Copy'
        size='medium'
        onClick={copyCodeToClipboard}
      />
      {parsedCode}
    </div>
  )
}

export default CodeBlock
