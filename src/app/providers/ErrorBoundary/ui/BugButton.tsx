import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string
}
// тестирование ErrorBoundary
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const clickBtn = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button onClick={clickBtn}> throw erroe</button>
    );
};
