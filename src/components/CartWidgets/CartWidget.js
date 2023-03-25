import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div className='cart'>
            <img src={cart} alt="cart-widget"/>
            <div className='cart-value'>81</div>
        </div>
    )
}

export default CartWidget