import { useParams } from "react-router";

function ProductDetails() {

    const { productId } = useParams();


  return (
    <section>
        <h1>Product Details</h1>
        <p>This is the page for a specific product.</p>
    </section>
  )
}
export default ProductDetails;