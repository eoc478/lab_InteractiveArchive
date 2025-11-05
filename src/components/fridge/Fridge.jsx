import './Fridge.css';
import fridgeImage from './../../assets/fridge.png';


function Fridge({children}){
    return(
        <>
        <div className="fridgeContainer">
            <img src={fridgeImage} alt="Fridge" className="fridgeImg"/>
            {children}
        </div>
        </>
    )
}

export default Fridge;