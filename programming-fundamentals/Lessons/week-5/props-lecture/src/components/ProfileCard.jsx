import { useState } from "react";

function ProfileCard({title, description, imageUrl, age}) {

  const [ageing, ageingCat] = useState(age);

  const handleClick = () => {
    ageingCat((ageing) => ageing + 1)
  };

  return (

    <div className="card" style={{ width: '434', textAlign: 'center' }}>
        <div className="card-body">
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={imageUrl} alt="cat" />
            <p>{ageing}</p>
            <button className="btn btn-primary" onClick={handleClick}>birthday</button>
        </div>
    </div>
  )
}

export default ProfileCard;

