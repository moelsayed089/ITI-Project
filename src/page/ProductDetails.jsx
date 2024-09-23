import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"

function ProductDetails() {
    const { id } = useParams();

    // get product details
    const getProductDetails = async () => {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`)
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
                            src={data?.thumbnail}
                            className="img-fluid"
                            alt={data?.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <h1 id="product-title">{data?.title}</h1>
                        <p id="product-brand " className='text-danger'>Brand: {data?.brand}</p>
                        <p id="product-description" className='text-muted'>{data?.description}</p>
                        <h4 id="product-price">{data?.price} $</h4>

                    </div>
                </div>

                <div className='mt-3' >
                    <h5 className='text-muted'>reviews from users !</h5>
                    {data?.reviews.map((review) => (
                        <div className="card p-3 mb-3" key={review.id}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="name fs-5 ">{review.reviewerName}</span>
                                <div className="user d-flex flex-row align-items-center">

                                    <span className="date text-danger">{review.date}</span>
                                </div>

                            </div>
                            <div className="action d-flex justify-content-between mt-2 align-items-center">
                                <p className="text text-muted fw-medium">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-center">
                    <Link to='/' className='btn btn-primary mt-2 mb-3 px-5 ' >Back to Home</Link>
                </div>
            </div>
        </>
    )
}

export default ProductDetails