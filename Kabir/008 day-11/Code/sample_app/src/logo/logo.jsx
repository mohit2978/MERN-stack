import {useState} from "react";

function Logo(){

    var [img,setImg] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCelkmWfnQkGmyWNujbuC9mF04Ww5rGRN1vA&s");

    function changeImage(){
        setImg(
            "https://miro.medium.com/v2/resize:fit:1400/1*exqug2FOuGIwh_SEWWbKZA.png"
        )
    }

    return (
        <>
            <img  src={img} alt="logo" height={50} width={50} />
            <button onClick={changeImage}>Click here</button>
        </>
    )
}

export default Logo;