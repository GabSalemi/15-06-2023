import "./index.css"

const Navbar = () => {
    const navbarItems = [{
        id: 1,
        name: "Daily",
        url: "#daily"
    }, {
        id: 2,
        name: "Weekly",
        url: "#weekly"
    }, {
        id: 3,
        name: "Monthly",
        url: "#monthly"
    }]


    return (
        <div className="Navbar">
            <ul className="navbar__list">
                {navbarItems.map((element) => (
                    <li className="navbar__item" key={element.id}>
                        <a href={element.url}>{element.name}</a>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default Navbar