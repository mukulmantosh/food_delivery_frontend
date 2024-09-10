import useAuth from "../../context/auth.tsx";
import {USER_LOGOUT_URL, USER_REGISTER_URL} from "../../utils/urls.ts";


function UserIcon() {
    const { isAuthenticated } = useAuth();

    let link: string;
    let imageUrl: string;
    if (isAuthenticated) {
        imageUrl = "/images/logout.png"
        link = USER_LOGOUT_URL
    } else {
        imageUrl = "/images/user-128.svg"
        link = USER_REGISTER_URL
    }
    return (
    <figure className="image is-48x48 mt-5">
        <a href={link}>
            <img alt="user" src={imageUrl}/>
        </a>
    </figure>
    )
}

export default UserIcon;