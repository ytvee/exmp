import type { Meta, StoryObj } from '@storybook/react'
import { CodeBlock } from './CodeBlock'

const meta: Meta<typeof CodeBlock> = {
  title: 'atoms/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    docs: {
        layout: 'centered',
    }
  },
  argTypes: {
    code: {
      control: 'text',
      description: 'Code to display',
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height of the code block',
    },
    width: {
      control: 'text',
      description: 'Width of the code block',
    },
  },
}

export default meta

type Story = StoryObj<typeof CodeBlock>

const sampleCode = `export const metadata = {\n  openGraph: {\n    images: [\n      url: 'https://mosaicimg.com/use?url=https://prav',\n      width: 1200, height: 630\n    ]\n  }\n}`

export const Default: Story = {
  args: {
    code: sampleCode,
  },
}

export const CustomWidth: Story = {
  args: {
    code: sampleCode,
    width: '400px',
  },
}

export const FullWidth: Story = {
  args: {
    code: sampleCode,
    width: '100%',
  },
}
