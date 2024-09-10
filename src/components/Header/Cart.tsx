import {CART_URL} from "../../utils/urls.ts";
import {Link} from "react-router-dom";

function Cart() {
    return <figure className="image is-48x48 mt-5">
        <Link to={CART_URL}>
            <img alt="cart" src="/images/trolley.png"/>
        </Link>
    </figure>
}

export default Cart;