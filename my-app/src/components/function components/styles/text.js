
import "./externaltext.css"
import style from "./externaltext.module.css"

const FancyText = () => {
    let objectStyling ={
        color:"red",
        backgroundColor : "skyblue",
    }

    return (
        <div>
        <h3 style ={{color: "red", backgroundColor: "yellow"}}>hello</h3>
        <h3 style ={objectStyling}>kedarnath</h3>
        <h3 className="text1">saikumar</h3>
        <h3 className={style.hello}>external module css we use one variable for styling</h3>
        </div>
    )
} 

export default FancyText









