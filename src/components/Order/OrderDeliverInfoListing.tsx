import {useEffect, useState} from "react";
import ConvertToReadableDateTime from "../../utils/dateFormat.ts";
import axios from "axios";
import {useParams} from "react-router-dom";
import {API_BASE_URL} from "../../utils/urls.ts";
import {DeliveryListingResponse} from "../../types/DeliveryListing.ts";
import {faPhone, faCar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function OrderDeliverInfoListing() {
    const [deliveryList, setDeliverList] = useState<DeliveryListingResponse | null>(null);
    const {id} = useParams();

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(API_BASE_URL + "/cart/orders/deliveries/" + id, {headers: {"Authorization": "Bearer " + token}}).then(
            response => {
                setDeliverList(response.data)
            }).catch(error => {
            console.log(error);
        });
    }, []);


    return (
        <div>
            <div className="container mt-6">
                <h1 className="title">Delivery Information</h1>
                <table className="table is-bordered  is-hoverable is-fullwidth">
                    <thead>
                    <tr>
                        <th>DeliveryID</th>
                        <th>Delivery Person</th>
                        <th>Vehicle Information</th>
                        <th>Contact</th>
                        <th>Delivery Time</th>
                        <th>Delivery Status</th>
                        <th>Created At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {deliveryList?.delivery_info?.map((data) => (
                        <tr key={data.delivery_id}>
                            <td>{data.delivery_id}</td>
                            <td>{data.name}</td>
                            <td><FontAwesomeIcon className="mr-1"  icon={faCar} /> {data.vehicle_details} </td>
                            <td><FontAwesomeIcon className="mr-1" icon={faPhone} /> {data.phone} </td>
                            <td>{data.delivery_status === 'delivered' ? data.delivery_time : '-'}</td>
                            <td>{data.delivery_status}</td>
                            <td>{ConvertToReadableDateTime(data.created_at)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderDeliverInfoListing;