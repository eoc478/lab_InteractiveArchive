import './Magnets.css';

function Magnets({ image }) {
  return (
    <>
        <div className="magnetContainer">
            <img src={image.url} alt={image.alt} width="150px" className="magnetImg" />
        </div>
    </>
  );
}

export default Magnets;