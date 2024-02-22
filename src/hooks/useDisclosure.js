import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * A hook to manage the state of a disclosure component
 * @param {number} delay - The delay in milliseconds to wait before setting the state to false
 * @returns {{isOpen, isAlive, onOpen, onClose, onToggle}} - The state and functions to manage the state
 */
export default function useDisclosure(delay = 0) {
    const [state, setState] = useState('DESTROYED');
    const delayRef = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(delayRef.current);
        };
    }, []);

    const onClose = useCallback(() => {
        setState('CLOSED');
        delayRef.current = setTimeout(() => {
            setState('DESTROYED');
        }, delay);
    }, [delay, setState]);

    const onOpen = useCallback(() => setState('OPEN'), []);
    const onToggle = useCallback(
        () =>
            setState((prev) => {
                if (prev) {
                    onClose();
                } else {
                    onOpen();
                }
            }),
        []
    );

    return {
        isOpen: state === 'OPEN',
        isAlive: state !== 'DESTROYED',
        onOpen,
        onClose,
        onToggle,
    };
}
