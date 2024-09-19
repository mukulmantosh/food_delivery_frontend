import UserIcon from "./UserIcon";
import Cart from "./Cart";
import {Toaster} from "react-hot-toast";
import Order from "./Order";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <Toaster/>
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <div className="has-text-centered mt-5">
                            <Link to="/"><h1 className="title is-size-1">Go Eats</h1></Link>
                            <p className="subtitle is-size-3">Smoky Goodness in Every Bite</p>
                        </div>
                    </div>
                    <div className="column is-two-third"></div>
                    <div className="column">
                        <UserIcon/>
                    </div>
                    <div className="column">
                        <Cart/>
                    </div>
                    <div className="column">
                        <Order/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;