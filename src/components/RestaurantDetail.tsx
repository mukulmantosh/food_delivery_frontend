function RestaurantDetail({restaurantData, location}) {
    return (
        <div className="container is-fluid mb-6">
        <hr/>

        <div className="fixed-grid">
            <div className="columns">
                <div className="column">
                    <div className="grid">
                        <div className="cell">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-6by3">
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
    </div>);

}

export default RestaurantDetail;