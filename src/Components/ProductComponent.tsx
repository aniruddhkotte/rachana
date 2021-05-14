import "../CSS/Product.css";

function Product(props: any) {
    return(
        <div className="product-container" onClick={() => props.click(props.img)}>
            <img className="product-img" src={props.img} alt="door" />
            <p className="product-name">Door</p>
        </div>
    );
}

export default Product;