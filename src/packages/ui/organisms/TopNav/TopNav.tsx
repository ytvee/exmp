import React, { useState } from 'react';
import styles from './TopNav.module.css';
import type { TopNavProps } from './TopNav.types';
import NavLink from '../../molecules/NavLink/NavLink';
import Icon from '../../atoms/Icon/Icon';
import IconButton from '../../atoms/IconButton/IconButton';
import Avatar from '../../atoms/Avatar/Avatar';
import Button from '../../atoms/Button/Button';
import SideBar from '../SideBar/SideBar';
import type { SidebarSection } from '../SideBar/SideBar.types';

export const TopNav: React.FC<TopNavProps> = ({
    disabled = false,
    loading = false,
    className,
    avatarSrc,
    activeTab,
    isUserAuthorized,
    navMenu,
    onTabClick,
    onLogoClick,
    onIconClick,
    onAvatarClick,
    onHamburgerClick,
    onLoginClick,
    onSignUpClick,
    ...props
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const componentClasses = [
        styles['asi-topnav'],
        disabled && styles['asi-topnav--disabled'],
        loading && styles['asi-topnav--loading'],
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const HamburgerMenu = () => (
        <div
            className={styles['topnav-hamburger-menu']}
            onClick={() => {
                setIsSidebarOpen((prev) => !prev);
                onHamburgerClick?.();
            }}
        >
            <Icon name="Hamburger" />
        </div>
    );

    const sidebarSections: SidebarSection[] = [
        {
            sectionHeader: 'Menu',
            items: navMenu?.map((item) => ({
                type: 'base',
                label: item.label,
                icon: <Icon name={item.iconName} />,
                value: item.label,
                path: item.label,
                active: activeTab === item.label,
            })) || [],
        },
    ];

    return (
        <>
            <div
                className={componentClasses}
                data-asi-component="topnav"
                {...props}
            >
                <HamburgerMenu />

                <div
                    className={styles['topnav-logo-container']}
                    onClick={onLogoClick}
                >
                    <Icon name="Logo" size="xl" />
                    <span>ASI:Create</span>
                </div>

                <div className={styles['topnav-menu-container']}>
                    {navMenu?.map((item, i) => (
                        <NavLink
                            key={i}
                            isActive={activeTab === item.label}
                            icon={<Icon name={item.iconName} />}
                            label={item.label}
                            onClick={() => onTabClick(item.label)}
                        />
                    ))}
                </div>

                {isUserAuthorized && (
                    <div className={styles['topnav-user-container']}>
                        <IconButton
                            size="medium"
                            variant="default"
                            hasBackground={false}
                            active={false}
                            disabled={false}
                            iconName="Notification"
                            onClick={onIconClick}
                        />
                        <Avatar
                            src={avatarSrc}
                            alt="User avatar"
                            size="small"
                            onClick={onAvatarClick}
                        />
                    </div>
                )}

                {!isUserAuthorized && (
                    <div className={styles['topnav-buttons-container']}>
                        <Button variant="secondary" size="small" onClick={onLoginClick}>
                            Login
                        </Button>
                        <Button variant="primary" size="small" onClick={onSignUpClick}>
                            Sign up
                        </Button>
                    </div>
                )}
            </div>

            {isSidebarOpen && (
                <div className={styles['topnav-sidebar-container']}>
                    <SideBar
                        menuHeader="Back"
                        withBackButton
                        onBackClick={() => setIsSidebarOpen(false)}
                        sections={sidebarSections}
                        onItemClick={(path: string) => {
                            onTabClick(path);
                            setIsSidebarOpen(false);
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default TopNav;
