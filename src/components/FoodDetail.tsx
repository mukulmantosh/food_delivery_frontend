import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import RestaurantDetail from "./RestaurantDetail.tsx";
import {API_BASE_URL} from "../utils/urls.ts";

interface Restaurant {
    name: string
    store_image: string
    description: string
    address: string
    city: string
    state: string
}

function FoodDetail() {
    const [restaurantData, setRestaurantData] = useState<Restaurant | null>(null);

    const {id} = useParams();
    const location = useLocation();

    const navigate = useNavigate();


    useEffect(() => {
        axios.get(API_BASE_URL + "/restaurant/" + location.state.restaurant_id).then(
            response => {
                setRestaurantData(response.data)
            }).catch(error => {
            console.log(error);
        });
    }, []);

    const submitCart = () => {
        const token = localStorage.getItem("token");
        if(token == null){
            navigate("/user/login");
            return false;
        }

        if (typeof id === "string") {
            axios.post(API_BASE_URL + "/cart/add", {
                "item_id": parseInt(id, 10),
                "restaurant_id": location.state.restaurant_id,
                "quantity": 1,
            }, {headers: {"Authorization": "Bearer " + token}}).then(() => {
                navigate("/cart");
            })
        }



    }

    return (
        <div>

            <div className="container is-fluid mt-6 pt-6">
                <div className="fixed-grid has-5-cols">
                    <div className="columns">
                        <div className="column"></div>
                        <div className="column">
                            <div className="grid">
                                <div className="cell">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <img className="box-shadow-large"
                                                     src={API_BASE_URL + "/" + location.state.photo}
                                                     alt={location.state.name}/>

                                            </figure>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="column">
                            <div className="grid">
                                <div className="content">
                                    <h1>{location.state.name}</h1>
                                    <p className="subtitle is-6">{location.state.category}</p>
                                    <p>
                                        {location.state.description}
                                    </p>
                                    <p className="title is-4 has-text-success">${location.state.price}</p>

                                    <button onClick={submitCart} className="button is-large">ADD</button>

                                </div>

                            </div>
                        </div>

                        <div className="column"></div>
                    </div>
                </div>
            </div>


            <RestaurantDetail restaurantData={restaurantData} location={location} />
        </div>
    )
}

export default FoodDetail;