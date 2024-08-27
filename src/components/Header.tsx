
function Header() {
    return (
        <div>
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <div className="has-text-centered mt-5">
                            <a href="/"><h1 className="title is-size-1">Go Eats</h1></a>
                            <p className="subtitle is-size-3">Smoky Goodness in Every Bite</p>
                        </div>
                    </div>
                    <div className="column is-one-third"></div>
                    <div className="column">
                        <figure className="image is-48x48 mt-5">
                            <a href="/user/register">
                            <img alt="user" src="/images/user-128.svg"/>
                            </a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;