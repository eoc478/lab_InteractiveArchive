import './Fridge.css';
import fridgeImage from './../../assets/fridge.png';


function Fridge(){
    return(
        <>
        <div className="fridgeContainer">
            <img src={fridgeImage} alt="Refrigerator" className="fridgeImg"/>
        </div>
        </>
    )
}

export default Fridge;