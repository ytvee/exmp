import React from 'react';
import { IconName } from "../../atoms/Icon/Icon.types";

export interface AuthorProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    action?: () => void;
    createdAt: string;
    name: string;
    avatarURL: string;
    iconName?: IconName;
}
