import React, { useCallback, useState } from "react";
import { InputField } from "../../atoms/InputField";
import { Option } from "./DropdownImages.types";
import classNames from "classnames";
import styles from './DropdownImages.module.css';
import { Typography } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icon";

export interface ICategoryList {
    options: Option[];
    handleSelect: ((value: string) => void);
    searchable: boolean;
    value?: string;
    searchPlaceholder: string;
}

const CategoryOptionsList: React.FC<ICategoryList> = ({
    handleSelect,
    searchable,
    options,
    searchPlaceholder,
    value
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['public', 'private'];
    const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

    const filteredOptions = options.filter(option => {
        const matchesSearch = !searchable || !searchTerm ||
            option?.label?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'public' || option.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });


    const normalizeCategoryName = (categoryName: string) => {
        return categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    }
    const CategoriesList = useCallback(() => {
        return (
            <div className={classNames(
                styles['asi-dropdown-images__categories'],
                styles['asi-dropdown-images__menu-items']
            )}>
                {categories.map(category => (
                    <button
                        key={category}
                        className={classNames(styles['asi-dropdown-images__category-item'],
                            selectedCategory === category && styles['active']
                        )}
                        onClick={() => setSelectedCategory(category)}
                    >
                        <Typography variant='body2' color={selectedCategory === category ? 'primary' : 'secondary'}>
                            {normalizeCategoryName(category)}
                        </Typography>
                    </button>
                ))}
            </div>
        )
    }, [categories, selectedCategory])

    const OptionsList = () => (
        <div className={styles['asi-dropdown-images__menu-items']}>
            {filteredOptions.map((option) => (
                <div key={option.value}
                    className={classNames(styles['asi-dropdown-images__option'],
                        value === option.value && styles['selected'])}
                    onClick={() => handleSelect(option.value)}
                >
                    <div className={styles['asi-dropdown-images__label-group']}>
                        {option?.icon}
                        <span>{option.label}</span>
                    </div>
                    {option.description && (
                        <Typography variant='body3' color='secondary'>
                            {option.description}
                        </Typography>
                    )}
                </div>
            ))}
        </div>
    )

    return (
        <div>
            {searchable && (
                <div className={styles['asi-dropdown-images__search']}>
                    <InputField
                        id='drop-down-image-search'
                        type="text"
                        placeholder={searchPlaceholder}
                        startIcon={<Icon size="lg" name="Search" />}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles['asi-dropdown-images__search-input']}
                    />
                </div>
            )}
            <div className={styles['asi-dropdown-images__menu']}>
                <CategoriesList />
                <OptionsList />
            </div>
        </div>
    )
}

export default CategoryOptionsList;