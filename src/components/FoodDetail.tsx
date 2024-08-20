import {useLocation, useParams} from "react-router-dom";

function FoodDetail() {
    const {id} = useParams();
    const location = useLocation();

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
                                                <img
                                                    src={"http://localhost:8080/" + location.state.photo}
                                                />
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
                                    <p>
                                        {location.state.description}
                                    </p>

                                    <ul>
                                        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                                        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                                        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                                        <li>Ut non enim metus.</li>
                                    </ul>
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