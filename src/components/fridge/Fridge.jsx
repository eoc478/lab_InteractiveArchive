import './Fridge.css';
import fridgeImage from './../../assets/fridge.png';


function Fridge({children, onClick}){
    return(
        <>
        <div className="fridgeContainer" onClick={onClick}>
            <img src={fridgeImage} alt="Fridge" className="fridgeImg"/>
            {children}
        </div>
        </>
    )
}

export default Fridge;