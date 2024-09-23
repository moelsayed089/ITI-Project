import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"

function   Productdetailscrud() {
    const { id } = useParams();

    // get product details
    const getProductDetails = async () => {
        const { data } = await axios.get(`http://localhost:5000/products/${id}`)
        return data
    }

    const { data, isLoading } = useQuery("productDetails", getProductDetails)

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <div className="container mt-5 border border-1 mb-5">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img
                            id="product-image"
                            src={data?.image}
                            className="img-fluid w-100 p-3 my-auto"
                            alt={data?.title}
                        
                        />
                    </div>
                    <div className="col-md-8">
                        <h1 id="product-title">{data?.title}</h1>
                      
                        <p id="product-description" className='text-muted'>{data?.description}</p>
                        <h4 id="product-price">{data?.price} $</h4>

                    </div>
                </div>

              

                <div className="d-flex justify-content-center">
                    <Link to='/productcrud' className='btn btn-primary mt-2 mb-3 px-5 ' >Back to Home</Link>
                </div>
            </div>
        </>
    )
}

export default Productdetailscrud