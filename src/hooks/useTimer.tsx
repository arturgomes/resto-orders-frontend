import { useState } from 'react';

const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState);
    const [isActive, setIsActive] = useState(false);

    const handleStart = () => {
        setIsActive(true);
        startTimer();
    };
    const handlePause = () => {
        setIsActive(false);
    };

    const startTimer = () => {
        setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };

    return {
        timer,
        isActive,
        handleStart,
        handlePause,
    };
};

export default useTimer;
