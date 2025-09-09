import React from "react";
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { FooterLarge } from './FooterLarge';
import { FooterProps } from './Footer.types';
import Icon from "../../atoms/Icon/Icon";

const serviceItems = [
  { icon: <Icon name='RadioButtonChecked' />, text: 'All services are online' },
  {
    icon: null,
    text: (
      <>
        Copyright © 2024 ASI:Create
        {/* | <a href='#'>Terms of Use</a> | <a href='#'>Privacy Policy</a> */}
      </>
    ),
  },
];

const linksItems = [
  {
    label: 'Platform',
    href: '#',
    subItems: [
      { label: 'AI Chat', href: '#ai-chat' },
      { label: 'Spaces', href: '#spaces' },
      { label: 'Agent', href: '#agent' },
      { label: 'Data', href: '#data' },
    ],
  },
  {
    label: 'Resource',
    href: '#',
    subItems: [
      { label: 'Overview', href: '#overview' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    label: 'Company',
    href: '#',
    subItems: [
      { label: 'Overview', href: '#overview' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    label: 'Social',
    href: '#',
    subItems: [
      { label: 'Overview', href: '#overview' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
];

const meta: Meta<typeof Footer> = {
  title: 'organisms/Footer',
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: 'Footer component description',
      },
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'The list of items to display in the footer',
    },
    serviceItems: {
      control: 'object',
      description: 'The list of service items to display in the footer',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

const TemplateShortFooter: StoryFn<FooterProps> = (args) => <Footer {...args} items={linksItems} serviceItems={serviceItems} />;;


const TemplateLargeFooter: StoryFn<FooterProps> = (args) => <FooterLarge {...args} items={linksItems} serviceItems={serviceItems} />;

const DesktopArgs = {
  isMobile: false
};

export const DesktopShortFooter: Story = TemplateShortFooter.bind({});
DesktopShortFooter.args = DesktopArgs;

export const DesktopLargeFooter: Story = TemplateLargeFooter.bind({});
DesktopLargeFooter.args = DesktopArgs;

const MobileArgs = {
  isMobile: true,
};

const MobileParameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const MobileShortFooter: Story = TemplateShortFooter.bind({});
MobileShortFooter.args = MobileArgs;
MobileShortFooter.parameters = MobileParameters;

export const MobileLargeFooter: Story = TemplateLargeFooter.bind({});
MobileLargeFooter.args = MobileArgs;
MobileLargeFooter.parameters = MobileParameters;
