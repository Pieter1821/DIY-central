


    const products = [
        {
            id: 1,
            key: "Hammer",
            price: 25,
            description: "A versatile hammer for various DIY tasks."
        },
        {
            id: 2,
            key: "Screwdriver Set",
            price: 30,
            description: "A set of essential screwdrivers for home repairs."
        },
        {
            id: 3,
            key: "Adjustable Wrench",
            price: 20,
            description: "A sturdy adjustable wrench for various uses."
        },
       
    ];
    
    export default function ProductPage() {
        return (
            <div className="product-container">
                <h1>Product Page</h1>
                {products.map((product) => (
                    <div key={product.id}>
                        <p>{product.id}</p>
                        <p>{product.key}</p>
                        <p>Price: R{product.price}</p>
                        <p>Description: {product.description}</p>
                    </div>
                ))}
            </div>
        );
    }


