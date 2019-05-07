import React from 'react';
import './PillarComponent.css';

const PillarComponent = ({ id, name, onClick, active}) => {

	
	return (
	     <div className="tc dib br3 pa3 bw2 grow">
	     <h4>{name}</h4>
	     <div className={"rectangle"} onClick={() => onClick(id) }>
      </div>
	     </div>
      

	);

	 
}

export default PillarComponent;