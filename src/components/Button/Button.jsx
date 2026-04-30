
import "./button.css";

const Button =({text , dataType, dataIcon})=>{

    return(
<div className="btn-wrapper">    
    <button  className="btn fw-bold" data-type={dataType} data-icon={dataIcon}>
        {text}
    </button>
</div>
        
    )
}


export default Button;