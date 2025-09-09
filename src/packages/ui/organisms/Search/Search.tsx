import React from 'react';
import styles from './Search.module.css';
import { SearchProps } from './Search.types';
import Icon from '../../atoms/Icon/Icon';
import type { IconName } from '../../atoms/Icon/Icon.types';

export const Search: React.FC<SearchProps> = ({
    className,
    iconName = 'Search' as IconName,
    buttonIconName = 'Filter' as IconName,
    buttonText = 'Filter',
    placeholder = 'Search 16, 400 spacer',
    value,
    onChange,
    width = '445px',
    buttonAction = () => {},
    disabled = false,
    loading = false,
    ...props
}) => {
    const componentClasses = [
        styles['asi-search'],
        className,
        disabled && styles['asi-search--disabled'],
        loading && styles['asi-search--loading'],
    ]
        .filter(Boolean)
        .join(' ');

    const [localValue, setLocalValue] = React.useState('');
    const isControlled = value !== undefined;
    const inputValue = isControlled ? value! : localValue;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        if (onChange) {
            onChange(newVal);
        }
        if (!isControlled) {
            setLocalValue(newVal);
        }
    };

    return (
        <div
            className={ componentClasses }
            data-asi-component="search"
            style={ {
                maxWidth: width || undefined,
            } }
            aria-disabled={ disabled || undefined }
            { ...props }
        >
            <div className={ styles['asi-search-input-wrapper'] }>
                <input
                    placeholder={ placeholder }
                    disabled={ disabled }
                    aria-label="search input"
                    value={ inputValue }
                    onChange={ handleInputChange }
                />
                <Icon name={ iconName } size="lg"/>
                <button
                    type="button"
                    className={ styles['asi-search-tag-button'] }
                    onClick={ buttonAction }
                    disabled={ disabled || loading }
                >
                    <Icon name={ buttonIconName } size="sm"/>
                    <span>{ buttonText }</span>
                </button>
            </div>
        </div>
    );
};

export default Search;
