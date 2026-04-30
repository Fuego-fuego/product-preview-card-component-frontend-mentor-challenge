


const Button =({text , dataType})=>{

    return(
        
        <button  className="btn" data-type={dataType}>
            {text}
        </button>
        
    )
}


export default Button;