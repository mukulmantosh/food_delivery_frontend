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
        <div className="container mt-5 mb-5">
            <nav className="panel">
                <p className="panel-heading">Cart</p>
                {cartList?.items?.map((item) => (


                    <div className="panel-block" key={item.cart_item_id}>

                        <figure className="image is-128x128">
                            <img src={"http://localhost:8080/" + item.menu_item.photo}/>
                        </figure>


                        <div className="columns has-text-centered">
                            <div className="column is-12 has-text-centered">{item.menu_item.name}</div>
                            <div className="column is-5 has-text-centered">Quantity: {item.quantity}</div>
                            <div className="column is-5 has-text-centered">${item.menu_item.price}</div>
                            <div className="column has-text-centered">
                                <button className="button is-info">REMOVE</button>
                            </div>
                        </div>

                    </div>
                ))}

            </nav>
        </div>
    </div>)
}

export default CartListing;