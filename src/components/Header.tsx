import UserIcon from "./UserIcon.tsx";
import Cart from "./Cart.tsx";
import {Toaster} from "react-hot-toast";

function Header() {
    return (
        <div>
            <Toaster/>
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <div className="has-text-centered mt-5">
                            <a href="/"><h1 className="title is-size-1">Go Eats</h1></a>
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
                </div>
            </div>
        </div>
    )
}

export default Header;