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
                        {foodListing.map(({description,
                                              menu_id,
                                              restaurant_id,
                                              name,
                                              photo,
                                              price,
                                              category}) => (

                            <div className="cell" key={menu_id}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <Link to={`/restaurant/${menu_id}`} state={{photo,description,name,price,category,restaurant_id }}>
                                        <img
                                            src={"http://localhost:8080/" + photo}
                                        />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4 mb-2 has-text-centered">{name}</p>
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