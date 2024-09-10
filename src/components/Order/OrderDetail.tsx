import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {OrderDetailResponse} from "../../types/OrderDetail.ts";
import ConvertToReadableDateTime from "../../utils/dateFormat.ts";
import {API_BASE_URL} from "../../utils/urls.ts";

function OrderDetail() {
    const [orderDetail, setOrderDetail] = useState<OrderDetailResponse | null>(null);
    const {id} = useParams();
    let totalAmount: number = 0;


    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(API_BASE_URL + "/cart/orders/"+ id, {headers: {"Authorization": "Bearer " + token}}).then(
            response => {
                setOrderDetail(response.data)
            }).catch(error => {
            console.log(error);
        });
    }, []);

    function calcPrice(amount: number) {
        totalAmount += amount;
        return amount
    }


    return (
        <div>
            {orderDetail?.orders?.map((data) => (
                <div className="container order-detail mt-6" key={data.order_item_id}>
                    <section className="order-header">
                        <h1 className="title">Order Item #{data.order_item_id}</h1>
                        <p className="subtitle mb-6">{ConvertToReadableDateTime(data.CreatedAt)}</p>
                    </section>


                    <section className="order-items box">
                        <h2 className="title is-4">Order Items</h2>
                        <div className="order-item">
                            <div className="columns">
                                <div className="column is-6">
                                    <p><strong>{data.MenuItem.name}</strong></p>
                                    <img className="image is-128x128 mt-5" alt={data.MenuItem.name} src={API_BASE_URL + "/" + data.MenuItem.photo} />

                                </div>
                                <div className="column is-6 has-text-right">
                                    <p><strong>${calcPrice(data.MenuItem.price)}</strong></p>
                                    <p>Quantity: {data.quantity}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ))}
            <div className="container mt-6">
                <section className="order-summary box mb-6">
                    <h2 className="title is-4">Order Summary</h2>
                    <div className="columns">
                        <div className="column is-6">
                            <p><strong>Subtotal:</strong></p>
                            <p><strong>Tax:</strong></p>
                            <p><strong>Shipping:</strong></p>
                        </div>
                        <div className="column is-6 has-text-right">
                            <p>${totalAmount}</p>
                            <p>$0.00</p>
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-6">
                            <p className="title is-5">Total</p>
                        </div>
                        <div className="column is-6 has-text-right">
                            <p className="title is-5">${totalAmount}</p>
                        </div>
                    </div>
                </section>
            </div>
            </div>
            )
}
export default OrderDetail;