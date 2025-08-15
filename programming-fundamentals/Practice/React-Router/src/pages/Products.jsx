import { Link } from "react-router"

function Products() {
  return (
    <section>
        <h1>Our Amazing Gizmos</h1>
        <p>Click on product to see its details</p>
        <ul>
            <li>
                <Link to="/products/1">Gizmo Model 100</Link>
            </li>
            <li>
                <Link to="/products/2">Gizmo Model 2000</Link>
            </li>
            <li>
                <Link to="/products/3">Gizmo Model Mini-X</Link>
            </li>
            <li>
                <Link to="/products/4">Gizmo Model Ultra-Max</Link>
            </li>
            <li>
                <Link to="/products/5">Gizmo Model Eco-Lite</Link>
            </li>
        </ul>
    </section>
  )
}
export default Products