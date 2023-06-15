import "./index.css"

const Input = ({type, placeholder = null, className}) => {
        return (<input type={type} placeholder={placeholder} className={className}></input>)
}

export default Input