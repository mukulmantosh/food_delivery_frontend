import {useEffect, useState} from "react";
import {OrderListingResponse} from "../../types/OrderListing.ts";
import axios from "axios";
import {useParams} from "react-router-dom";

function OrderDetail() {
    const [orderDetail, setOrderDetail] = useState<OrderListingResponse | null>(null);
    const {id} = useParams();


    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:8080/cart/orders/"+ id, {headers: {"Authorization": "Bearer " + token}}).then(
            response => {
                setOrderDetail(response.data)
                console.log(orderDetail)
            }).catch(error => {
            console.log(error);
        });
    }, []);


    return (
        <div>
            <div className="container mt-6">
                <h1 className="title">Order Detail</h1>


            </div>

        </div>
    )
}

export default OrderDetail;