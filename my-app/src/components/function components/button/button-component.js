

function ButtonComponent({title,width = 100,bgColor}){
    return(
        
        <button style={{width :width, backgroundColor:bgColor }}>{title}</button>
    )
}

export default ButtonComponent;