import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/itemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()


    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        
        asyncFunc(categoryId)
            .then(response=> {
                setProducts(response)
            })
            .catch(error=> {
                console.error(error)
            })
    }, [categoryId])
    
    
    
    return (
        <div className="landing">
             <h1 className="ladinng-title">{greeting}</h1>
             <h2 className="landing-subtitle">Sin tantas vueltas, tenemos la PC gamer que buscas.</h2>
             <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer