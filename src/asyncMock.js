const products = [
    {
        id: '1',
        name: 'PC Early Game',
        price: 1000,
        category: 'pcescritorio',
        img: 'https://nzxt.com/assets/cms/34299/1643912258-2xbuild-with-the-best.png?auto=format&fit=fillmax&h=1344&w=1344',
        stock: 81,
        description:'PC armada entrada de gama, con posibilidad de mejoras facilmente, ideal para 1080p.'
    },
    {
        id: '2',
        name: 'PC Mid Game',
        price: 1500,
        category: 'notebook',
        img: 'https://nzxt.com/assets/cms/34299/1617971513-h510i-2020-white-black-kraken-x-system.png?ar64=MTox&auto=format&bg64=I2Y2ZjZmOQ&fit=crop&h=400&w=400',
        stock: 32,
        description:'PC armada gama media,  ideal para jugar en 2k o 1080p a altos cuadros por segundo.'
    },
    {
        id: '3',
        name: 'PC Late Game',
        price: 2500,
        category: 'periferico',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Yyeh93oueoZalJn2v_v8oqNqSdu2CdEZrA&usqp=CAU',
        stock: 6,
        description:'PC armada gama alta, ideal para jugar en 2k ultra a alta tasa de cuadros o para jugar a 4k 60fps.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category  === productCategory))
        }, 500)
    })
}