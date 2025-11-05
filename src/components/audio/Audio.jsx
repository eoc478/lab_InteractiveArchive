import { useRef } from 'react';
import './Audio.css';
import fridgeSound from './../../assets/fridgeSound.mp3'
import cowIcon from './../../assets/cow2.png'

function Audio() {
    const audioRef = useRef(null);

    const handleCowClick = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    
    return (
        <>
        <div className="cowAudio" onClick={handleCowClick}>
            <img src={cowIcon} alt="cow" className="cowImg" />
            <audio ref={audioRef} loop>
                <source src={fridgeSound} type="audio/mpeg" />
            </audio>
        </div>


        </>
    );
}

export default Audio;