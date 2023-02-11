import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoderProps {
    className?: string
}

export const Loader = ({ className }: LoderProps) => (
    <div className={classNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
