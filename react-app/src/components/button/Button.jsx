import "./index.css"

/* const Button = ({textContent, otherProp = false}) => { // Destructoring con valore di default 
    if (otherProp) return <button className="button__element passive">{textContent}</button>

    else return (<button className="button__element">{textContent}</button>)
   
}  */

const Button = ({textContent, intoForm = false}) => { 
     return (<button className={`button__element ${intoForm && `passive`}`}>{textContent}</button>)
} 



export default Button