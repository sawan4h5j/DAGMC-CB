import { useEffect } from 'react';


const ClickSound = () => {
    useEffect(() => {
        const handleClick = () => {

            const audio = new Audio('./mouseClick.mp3');
            audio.volume = 0.5;
            audio.play();
        };

        document.body.addEventListener('click', handleClick);

        return () => {
            document.body.removeEventListener('click', handleClick);
        };
    }, []);

    return null;
};

export default ClickSound;
