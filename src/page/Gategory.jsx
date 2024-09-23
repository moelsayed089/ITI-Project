import React from 'react';

const Gategory = () => {
    return (
        <>
            {/* First Section */}
         <div className='container ' id='category'>
                <div className='row  px-5 py-5 choice' id='choice1'>
                    {/* Text Section */}
                    <div className='col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center text-center text-lg-start'>
                        <div className='d-flex flex-column row-gap-4'>
                            <h3 className='fs-1 fw-bold'>Men’s Clothes Of Choice</h3>
                            <p>
                                Enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br /> irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                            <a href='#action' className= 'mb-5 text-white bg-danger p-3 col-12 col-lg-6 text-center text-decoration-none'>
                                SHOW MORE
                            </a>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className='col-lg-6 col-md-12 d-flex justify-content-center'>
                        <img className='w-100 w-lg-75' src="https://images.unsplash.com/photo-1441984536979-3513fd89f0d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='popular5' />
                    </div>
                </div>

                {/* Second Section */}
                <div className='row  px-5 py-5 choice' id='choice2'>
                    {/* Image Section */}
                    <div className='col-lg-6 col-md-12 d-flex justify-content-center'>
                        <img className='w-100 w-lg-75' src='https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='popular6' />
                    </div>
                    {/* Text Section */}
                    <div className='col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center text-center text-lg-start'>
                        <div className='d-flex flex-column row-gap-4'>
                            <h3 className='fs-1 fw-bold'>Women’s Clothes Of Choice</h3>
                            <p>
                                Enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br /> irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                            <a href='#action' className='text-white bg-danger p-3 col-12 col-lg-6 text-center text-decoration-none'>
                                SHOW MORE
                            </a>
                        </div>
                    </div>
                </div>
         </div>
        </>
    );
}

export default Gategory;
