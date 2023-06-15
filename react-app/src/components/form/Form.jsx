import "./index.css"
import Button from "../button";
import Input from "../input";

const Form = () => {

    return (
        <form className="form__section">
            <div className="general--input__div">
                <Input type={"text"} placeholder={"New task"}/>
                <div className="checkbox__div">
                    <label><Input type={"checkbox"} className={"daily"}/>Daily</label>
                    <label><Input type={"checkbox"} className={"weekly"}/>Weekly</label>
                    <label><Input type={"checkbox"} className={"monthly"}/>Monthly</label>
                </div>
            </div>
            <div className="button__div">
            <Button textContent={"Add"} intoForm={true} />
            </div>
        </form>
        
    )
}

export default Form
