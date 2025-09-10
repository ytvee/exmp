import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { IconName, IconSize } from "./Icon.types";
import '@/storybookStyles.css';
import classNames from 'classnames';

export const ICON_NAMES: IconName[] = [
    'Add',
    'AddFilled',
    'Android',
    'ArrowDropDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeftOutlined',
    'ArrowRightOutlined',
    'AttachFile',
    'Bitbucket',
    'Chart',
    'Chat',
    'ChatFilled',
    'Checked',
    'CheckCircle',
    'Close',
    'Cloud',
    'Copy',
    'Dashboard',
    'DataBase',
    'DeployedCode',
    'Draft',
    'Edit',
    'Exit',
    'GithubIcon',
    'GoogleIcon',
    'Home',
    'Info',
    'Inbox',
    'Loader',
    'Location',
    'Mail',
    'Memory',
    'Menu',
    'Moon',
    'MoreHoriz',
    'MoreVert',
    'Person',
    'Play',
    'RadioButtonChecked',
    'Rocket',
    'RotateRight',
    'Settings',
    'SmartToy',
    'Star',
    'StarShield',
    'Sun',
    'TextSnippet',
    'WarningAmber',
    'Web',
    'Work',
    'ZoomIn',
    'ZoomOut',
    'Favourite',
    'FavouriteFilled',
    'ShoppingBag',
    'Sales',
    'Reload',
    'Coin',
    'VisibilityOff',
    'Views',
    'Logo',
    'Notification',
    'Hamburger',
    'Search',
    'Filter',
    'LargeArrowRight',
];

const meta: Meta<typeof Icon> = {
    title: 'Atoms/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: ICON_NAMES,
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        color: {
            control: 'color',
        },
        onClick: {
            action: 'clicked',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'Settings',
        size: 'md',
    },
};

export const Interactive: Story = {
    args: {
        name: 'Home',
        size: 'md',
        color: '#222222',
    },
    render: () => <Icon name='Home' size='md' color='#222222' />,
};

export const AllSizes: Story = {
    render: () => (
        <div className='asi-story-row'>
            { ['xs', 'sm', 'md', 'lg', 'xl'].map((s) => (
                <div key={ s } style={ { textAlign: 'center' } }>
                    <Icon name="Settings" size={ s as IconSize }/>
                    <div style={ { fontSize: 12, marginTop: 4 } }>{ s }</div>
                </div>
            )) }
        </div>
    ),
};

export const AllIcons: Story = {
    render: () => (
        <div className='asi-story-grid'>
            { ICON_NAMES.map((n) => (
                <div
                    key={ n }
                    className={classNames('asi-story-box', 'asi-story-content')}
                >
                    <Icon name={ n as IconName } size="lg"/>
                    <div>{ n }</div>
                </div>
            )) }
        </div>
    ),
};

export const WithColors: Story = {
    render: () => (
        <div className='asi-story-row'>
            <Icon name="Settings" color="#ff0000"/>
            <Icon name="Settings" color="#00ff00"/>
            <Icon name="Settings" color="#0000ff"/>
            <Icon name="Settings" color="#ff00ff"/>
            <Icon name="Settings" color="#ffff00"/>
        </div>
    ),
};

export const Clickable: Story = {
    render: () => (
        <div className='asi-story-row'>
            <Icon name="Settings" onClick={ () => alert('Settings clicked!') }/>
            <Icon name="Home" onClick={ () => alert('Home clicked!') }/>
            <Icon name="Chat" onClick={ () => alert('Chat clicked!') }/>
        </div>
    ),
};

export const FilteredGrid: Story = {
    render: () => {
        const [filter, setFilter] = useState('');
        const filtered = ICON_NAMES.filter((n) =>
            n.toLowerCase().includes(filter.toLowerCase())
        );
        return (
            <div className='asi-story-column'>
                <div>
                    <input
                        aria-label="Filter icons"
                        placeholder="Filter icons..."
                        value={ filter }
                        onChange={ (e) => setFilter(e.target.value) }
                        className='asi-story-box'
                    />
                </div>
                <div className='asi-story-grid'>
                    { filtered.map((n) => (
                        <div
                            key={ n }
                            className={classNames('asi-story-box', 'asi-story-content')}
                        >
                            <Icon name={ n as IconName } size="md"/>
                            <div style={ { fontSize: 11 } }>{ n }</div>
                        </div>
                    )) }
                    { filtered.length === 0 && <div style={ { gridColumn: '1/-1' } }>No icons match “{ filter }”</div> }
                </div>
            </div>
        );
    },
};
