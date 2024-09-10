import {Link} from "react-router-dom";
import {ORDERS_URL} from "../../routes/urls.ts";

function Order(){
    return <figure className="image is-48x48 mt-5">
        <Link to={ORDERS_URL}>
            <img alt="orders" src="/images/order.png"/>
        </Link>
    </figure>
}
export default Order;