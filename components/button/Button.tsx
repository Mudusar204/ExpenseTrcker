import { color } from "@chakra-ui/react"

type propType={
backgroundColor?:string,
buttonTitle:string,

}
const Button=(prop:propType)=>{
    return(
        <div>
<button style={{backgroundColor:prop.backgroundColor}}>{prop.buttonTitle}</button>
        </div>
    )
}
export default Button