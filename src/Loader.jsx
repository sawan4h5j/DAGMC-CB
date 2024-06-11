import { useLottie } from 'lottie-react';
import animation from '../src/assets/animationJson/loading.json'

const Loader = () => {

    const options = {
        animationData: animation,
        loop: 2,

    };

    const { View } = useLottie(options);

    return (
        <div className='flex justify-center items-center w-full h-screen mx-auto'>
            {/* <img className='' src={View} alt="" /> */}
            {View}
        </div>
    );
};

export default Loader;