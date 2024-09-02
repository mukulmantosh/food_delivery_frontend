import useAuth from "../context/auth.tsx";


function UserIcon() {
    const { isAuthenticated, user } = useAuth();

    let link: string;
    if (isAuthenticated) {
        link = "/user/logout"
    } else {
        link = "/user/register"
    }
    return (

    <figure className="image is-48x48 mt-5">

        <a href={link}>
            <img alt="user" src="/images/user-128.svg"/>
        </a>
        <span>{user}</span>
    </figure>
    )
}

export default UserIcon;