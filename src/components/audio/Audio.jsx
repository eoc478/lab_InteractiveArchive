import { useRef } from 'react';
import './Audio.css';
import fridgeSound from './../../assets/fridgeSound.mp3'
import cowIcon from './../../assets/cow2.png'

function Audio() {
    const audioRef = useRef(null);

    const cowClick = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play();
            }
        }
    };
    
    return (
        <>
        <div className="cowAudio" onClick={cowClick}>
            <img src={cowIcon} alt="cow" className="cowImg" />
        </div>

        <audio ref={audioRef} loop>
            <source src={fridgeSound} type="audio/mpeg" />
        </audio>
        </>
    );
}

export default Audio;