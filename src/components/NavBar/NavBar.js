import CartWidget from "../CartWidgets/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <header>
                <Link to='/'><h3 className="titulo">GamingPalace</h3></Link>
                <CartWidget />
            </header>
        
    <div className="menu-container">
        <div className="menu">
            <NavLink to={`/category/pcescritorio`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>PC escritorio</NavLink> 
            <NavLink to={`/category/notebook`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Notebooks</NavLink> 
            <NavLink to={`/category/periferico`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option' }>Perifericos</NavLink>  
        </div>
    </div>
  
        </nav>
    )
}

export default NavBar