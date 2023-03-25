import CartWidget from "../CartWidgets/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <header>
                <h3 className="titulo">GamingPalace</h3>
                <CartWidget />
            </header>
        
    <div className="menu-container">
        <div className="menu">
              <button className="menu-button">PC escritorio</button>  
              <button className="menu-button">Notebooks</button>  
              <button className="menu-button">Perifericos</button>  
        </div>
    </div>
        </nav>
    )
}

export default NavBar