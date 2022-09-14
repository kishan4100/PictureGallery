import React from "react";

const Modal = ({selectedImage,setSelectedImage}) => {
	
	const handleCLick = (event)=>{
	   if(event.target.classList.contains("backdrop")){
		   setSelectedImage(null)
	   }

	}
		
	return(
		<div className="backdrop" onClick={handleCLick} >

		<img src={selectedImage} alt="Enlarged image"/>

		</div>
	)
}

export default Modal