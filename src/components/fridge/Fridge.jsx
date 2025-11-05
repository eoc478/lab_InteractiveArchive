import './Fridge.css';
import fridgeImage from './../../assets/fridge.png';
import fridgeSound from './../../assets/fridgeSound.mp3'


function Fridge({children, onClick}){
    return(
        <>
        <audio autoPlay loop>
            <source src={fridgeSound} type="audio/mp3"></source>
        </audio>

        <div className="fridgeContainer" onClick={onClick}>
            <img src={fridgeImage} alt="Fridge" className="fridgeImg"/>
            {children}
        </div>
        </>
    )
}

export default Fridge;