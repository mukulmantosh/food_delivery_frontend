import {useEffect, useState} from "react";
import axios from "axios";
import {ItemsResponse} from "../types/CartListing.ts";


function CartListing() {
    const [cartList, setCartList] = useState<ItemsResponse | null>(null);

        useEffect(() => {
            const token = localStorage.getItem("token");
            axios.get("http://localhost:8080/cart/list", {headers: {"Authorization": "Bearer " + token}}).then(
                response => {
                    setCartList(response.data)
                }).catch(error => {
                console.log(error);
            });

        }, []);

    return (<div>
        <div className="container mt-5">
            <nav className="panel">
                <p className="panel-heading">Cart</p>

                {cartList && cartList.items.map((item) => (

                    <div className="panel-block" key={item.cart_item_id}>
                        <figure className="image is-128x128">
                            <img src={"http://localhost:8080/" + item.menu_item.photo}/>
                        </figure>
                        <div className="columns">
                            <div className="column is-4 is-offset-4 is-size-5">{item.menu_item.name}</div>
                            <div className="column is-10 is-offset-8 is-size-5">Quantity : {item.quantity}</div>
                            <div className="column is-4 is-offset-10 is-size-5">${item.menu_item.price}</div>
                        </div>
                    </div>
                ))}

            </nav>
        </div>
    </div>)
}

export default CartListing;