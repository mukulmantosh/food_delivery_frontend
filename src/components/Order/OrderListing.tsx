import {useEffect, useState} from "react";
import {OrderListingResponse} from "../../types/OrderListing.ts";
import ConvertToReadableDateTime from "../../utils/dateFormat.ts";
import axios from "axios";
import {Link} from "react-router-dom";
import {API_BASE_URL, getOrderDetailUrl} from "../../utils/urls.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMotorcycle} from "@fortawesome/free-solid-svg-icons";

function OrderListing() {
    const [orderList, setOrderList] = useState<OrderListingResponse | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(API_BASE_URL + "/cart/orders", {headers: {"Authorization": "Bearer " + token}}).then(
            response => {
                setOrderList(response.data)
            }).catch(error => {
            console.log(error);
        });
    }, []);



    function OrderStatus(status: string, id: number){
        const ORDER_DELIVERY_INFO_LISTING_URL = "/cart/order/deliveries/" + id

        if(status == "in_progress") {
            return <span className="tag is-link">IN PROGRESS</span>
        } else if (status == "failed"){
            return <span className="tag is-danger">FAILED</span>
        } else if (status == "delivered"){
            return <span className="tag is-success">DELIVERED</span>
        } else if (status == "cancelled"){
            return <span className="tag is-warning">CANCELLED</span>
        } else if (status == "on_the_way"){
            return (<><span className="tag is-primary">ON THE WAY</span>
                <Link to={ORDER_DELIVERY_INFO_LISTING_URL}>
                <span className="ml-3 tag is-dark"> RIDER INFO <FontAwesomeIcon className="ml-3"  icon={faMotorcycle} /></span>
                </Link>
            </>)
        }
    }

    return (
        <div>
        <div className="container mt-6">
                <h1 className="title">Orders</h1>

                <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                    <thead>
                    <tr>
                        <th>OrderID</th>
                        <th>Order Status</th>
                        <th>Total Amount</th>
                        <th>Delivery Address</th>
                        <th>Created At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orderList?.orders?.map((data) => (
                    <tr key={data.order_id}>

                        <td><Link to={getOrderDetailUrl(data.order_id)}>{data.order_id}</Link></td>
                        <td>{OrderStatus(data.order_status, data.order_id)}</td>
                        <td>{data.total_amount}</td>
                        <td>{data.delivery_address}</td>
                        <td>{ConvertToReadableDateTime(data.CreatedAt)}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderListing;