import {useEffect, useState} from "react";
import axios from "axios";
import {ItemsResponse} from "../types/CartListing.ts";
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
import {API_BASE_URL} from "../utils/urls.ts";


function CartListing() {
    const [cartList, setCartList] = useState<ItemsResponse | null>(null);
    const navigate = useNavigate();

        useEffect(() => {
            const token = localStorage.getItem("token");
            axios.get(API_BASE_URL + "/cart/list", {headers: {"Authorization": "Bearer " + token}}).then(
                response => {
                    setCartList(response.data)
                }).catch(error => {
                console.log(error);
            });
        }, []);

    const removeItemFromCart = (cart_item_id: number) => {
        const token = localStorage.getItem("token");

        axios.delete(API_BASE_URL + "/cart/remove/" + cart_item_id, {headers: {"Authorization": "Bearer " + token}}).then(() => {
            
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const updatedCartItems = cartList.items.filter(item => item.cart_item_id !== cart_item_id);
            setCartList(prevState => ({...prevState, items: updatedCartItems}));

        })
    }

    const PlaceOrder = () => {
        const token = localStorage.getItem("token");
        axios.post(API_BASE_URL + "/cart/order/new", {}, {headers: {"Authorization": "Bearer " + token}}).then((response) => {
            toast.success(response.data.message);
            navigate("/");

        }).catch(error => {
            toast.error(error.message);
        })

    }


    return (<div>
        <div className="container mt-5 mb-5">
            <section className="section">
                <div className="container">
                    <h1 className="title">Cart Items</h1>
                    <div className="panel">
                        <p className="panel-heading"></p>
                        <div className="panel-block">
                            <div className="columns is-vcentered">
                                <div className="column is-4 has-text-centered has-text-weight-bold">Item</div>
                                <div className="column has-text-centered has-text-weight-bold">Name</div>
                                <div className="column is-4 has-text-centered has-text-weight-bold">Quantity</div>
                                <div className="column has-text-centered has-text-weight-bold">Price</div>
                                <div className="column has-text-centered has-text-weight-bold"></div>
                            </div>
                        </div>


                        {cartList?.items?.map((item) => (
                        <div className="panel-block">
                            <div className="columns is-vcentered">
                                <div className="column has-text-centered is-narrow">
                                    <img alt={item.menu_item.name} src={API_BASE_URL + "/" + item.menu_item.photo}
                                         className="image is-48x48"/>
                                </div>
                                <div className="column  has-text-centered">{item.menu_item.name}</div>
                                <div className="column is-4  has-text-centered">{item.quantity}</div>
                                <div className="column  has-text-centered">${item.menu_item.price}</div>
                                <div className="column has-text-centered">
                                    <button onClick={() => removeItemFromCart(item.cart_item_id)}
                                            className="button is-info">REMOVE
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))}



                    </div>
                </div>
            </section>

            <button onClick={PlaceOrder} className="button is-primary">PLACE ORDER</button>
        </div>

    </div>)
}

export default CartListing;