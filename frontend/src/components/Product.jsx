import Card from "react-bootstrap/Card";

const ProductCard = ({product}) => {
    return <Card className="mb-2 mt-2">
            <Card.Body>
                <h4>{product?.id}: {product?.name}</h4>
                <p>{product?.description}</p>
                <p>{product?.price}$</p>
            </Card.Body>
        </Card>
}

export default ProductCard;