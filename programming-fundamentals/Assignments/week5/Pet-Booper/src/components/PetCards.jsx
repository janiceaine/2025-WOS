import { useState } from "react";

function PetCards({ name, type, description, initialBoops, image, extremeBoops=10}) {

    const [boops, setBoops] = useState(initialBoops);

    const handleClicks = () => {
        setBoops((boops) => boops + 1)
    };

    const boopMessage = () => {
        const elem = document.querySelector("#message");
        
        return boops > extremeBoops? elem.style.display = 'block': elem.style.display = 'none';
        
    };

    const boopConsequences = () => {
        handleClicks();
        boopMessage();
    };



  return (
    <div className="card container p-0 mt-5" style={{width: 400}}>
      <div className="card-body">
        <img src={image} alt="pet" style={{width: '100%'}}/>
        <h2 style={{textAlign: 'center'}}>{name}</h2>
        <h5>{type}</h5>
        <p>{description}</p>
        <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary btn-sm" onClick={boopConsequences} >🐾 Boops</button> 
            <span>{boops} </span> 
            
            <span id="message" className="alert alert-warning text-center fw-bold py-1 px-2 m-0" style={{display: 'none'}}>This pet is extremely booped!</span>
        </div>

      </div>
    </div>
  );
}

export default PetCards;
