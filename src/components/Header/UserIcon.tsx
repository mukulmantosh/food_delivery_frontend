import useAuth from "../../context/auth.tsx";


function UserIcon() {
    const { isAuthenticated } = useAuth();

    let link: string;
    let imageUrl: string;
    if (isAuthenticated) {
        imageUrl = "/images/logout.png"
        link = "/user/logout"
    } else {
        imageUrl = "/images/user-128.svg"
        link = "/user/register"
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