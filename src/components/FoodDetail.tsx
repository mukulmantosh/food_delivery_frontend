import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

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

    //const {id} = useParams();
    const location = useLocation();

    useEffect(() => {
        axios.get("http://localhost:8080/restaurant/" + location.state.restaurant_id).then(
            response => {
                setRestaurantData(response.data)
            }).catch(error => {
            console.log(error);
        });
    }, []);

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
                                                     src={"http://localhost:8080/" + location.state.photo}
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

                                    <button className="button is-large">ADD</button>

                                </div>

                            </div>
                        </div>

                        <div className="column"></div>
                    </div>
                </div>
            </div>


            <div className="container is-fluid mb-6">
                <hr/>

                <div className="fixed-grid">
                    <div className="columns">
                        <div className="column">
                            <div className="grid">
                                <div className="cell">
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <img className="box-shadow-large"
                                                     src={restaurantData ? "http://localhost:8080/" + restaurantData.store_image : ""}
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
                                    <h1 className="has-text-info"> {restaurantData && restaurantData.name}</h1>

                                    <p className="has-text-grey">
                                        {restaurantData && restaurantData.description}
                                    </p>


                                    <p className="has-text-grey">{restaurantData && restaurantData.address},{restaurantData && restaurantData.city}, {restaurantData && restaurantData.state} </p>

                                </div>
                            </div>
                        </div>
                        <div className="column"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FoodDetail;