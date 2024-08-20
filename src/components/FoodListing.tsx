import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function FoodListing(){
    const [foodListing, setFoodListing] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/restaurant/menu").then(
            response => {
                setFoodListing(response.data)
            }).catch(error => {
                console.log(error);
        });
    }, []);
    return (

        <div>
            <div className="container is-fluid mt-6 pt-6">
                <div className="fixed-grid has-5-cols">
                    <div className="grid">
                        {foodListing.map(({description, menu_id, name, photo}) => (

                            <div className="cell" id={menu_id}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <Link to={`/restaurant/${menu_id}`} state={{photo,description,name }}>
                                        <img
                                            src={"http://localhost:8080/" + photo}
                                            alt="Placeholder image"
                                        />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4 mb-2">{name}</p>
                                            <p className="subtitle is-6">{description}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        ))}



                    </div>
                </div>

            </div>


        </div>
    )
}

export default FoodListing;