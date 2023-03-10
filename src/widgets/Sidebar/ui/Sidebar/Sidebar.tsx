import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setcollapsed] = useState(false);

    const onToggle = () => {
        setcollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};
