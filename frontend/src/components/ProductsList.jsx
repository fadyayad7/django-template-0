import Container from "react-bootstrap/esm/Container";
import ProductCard from "./Product";

const ProductsList = ({products = []}) => {
    return <Container>
        {products.map(p => <ProductCard product={p} />)}
    </Container>
}

export default ProductsList;