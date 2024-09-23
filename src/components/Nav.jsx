import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Link } from 'react-router-dom'

const Nav = () => {
    const { user } = useContext(AuthContext)


    const userLogout = () => {
        localStorage.removeItem('user')
        window.location.reload()
    }
    return (
        <>
            <nav className="p-3 navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">E-Commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {user ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="product"> Products</Link>
                            </li>
                        </ul> : null}


                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

                            {user ? <>
                                <li className="nav-item mx-lg-2 mb-3 mb-lg-0  ">
                                    <div className="pt-3 ">
                                        <h6>@{user?.username}</h6>

                                    </div>
                                </li>

                                <li className="nav-item mx-lg-2 mb-3 mb-lg-0 ">
                                    <button
                                        className="nav-link btnNav btn bg-danger text-white px-3 shadow-none"
                                        onClick={userLogout}
                                    >
                                        Logout
                                    </button>
                                </li>

                            </> : <li className="nav-item mx-lg-2 mb-3 mb-lg-0 ">
                                <Link
                                    className="nav-link btnNav btn bg-dark text-white px-3 shadow-none"
                                    to="/login"
                                >
                                    Sign in
                                </Link>
                            </li>
                            }









                        </ul>

                        {/* {user ? <button type="button" className="btn btn-danger" onClick={userLogout}>Logout</button> : <Link to="/login" type="button" className="btn btn-primary">Login</Link>} */}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav