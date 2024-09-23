import './Footer.css';

function Footer() {
    return (
        <div className='container ' id='footer'>
            {/* Features Section */}
            <div className='bg-danger container px-4 py-5' id='features'>
                <div className='row row-cols-1 row-cols-md-3 text-white justify-content-center g-4'>
                    <div className='col d-flex flex-column align-items-start text-center text-md-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                        </svg> 
                                              <h5 className='fw-bold'>Free Shipping Method</h5>
                        <p className='fw-lighter' style={{ color: '#d1d1d1' }}>
                            Aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.
                        </p>
                    </div>

                    <div className='col d-flex flex-column align-items-start text-center text-md-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
                            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                            <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
                        </svg>                        
                        <h5 className='fw-bold'>Secure Payment System</h5>
                        <p className='fw-lighter' style={{ color: '#d1d1d1' }}>
                            Aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.
                        </p>
                    </div>

                    <div className='col d-flex flex-column align-items-start text-center text-md-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
</svg>
                        <h5 className='fw-bold'>Secure Payment System</h5>
                        <p className='fw-lighter' style={{ color: '#d1d1d1' }}>
                            Aorem ixpsacdolor sit ameasecur <br /> adipisicing elitsf edasd.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="container py-5">
                <div className='row row-cols-1 row-cols-md-4 g-4' id='footer-content'>
                    {/* Footer Title */}
                    <div className='col'>
                        <h3 className="fw-bold fs-3 mb-4">
                            <span className="fs-2">T</span>ime <span className="text-danger"><span className="fs-2">Z</span>one</span>
                        </h3>
                        <p className="text-secondary">
                            Asorem ipsum adipolor sdit amet, <br /> consectetur adipisicing elitcf sed do <br /> eiusmod tem.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='col'>
                        <h5 className="fw-bold mb-2">Quick Links</h5>
                        <ul className='list-unstyled d-flex flex-column row-gap-3'>
                            <li><a href="#action">About</a></li>
                            <li><a href="#action">Offers & Discounts</a></li>
                            <li><a href="#action">Get Coupon</a></li>
                            <li><a href="#action">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* New Products */}
                    <div className='col'>
                        <h5 className="fw-bold mb-2">New Products</h5>
                        <ul className='list-unstyled d-flex flex-column row-gap-3'>
                            <li><a href="#action">Women Cloth</a></li>
                            <li><a href="#action">Fashion</a></li>
                            <li><a href="#action">Men Accessories</a></li>
                            <li><a href="#action">Rubber made Toys</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className='col'>
                        <h5 className="fw-bold mb-2">Support</h5>
                        <ul className='list-unstyled d-flex flex-column row-gap-3'>
                            <li><a href="#action">Frequently Asked Questions</a></li>
                            <li><a href="#action">Terms & Conditions</a></li>
                            <li><a href="#action">Privacy Policy</a></li>
                            <li><a href="#action">Report a Payment Issue</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className='mt-5 text-center' id='copyright'>
                    <p>
                        Copyright ©2024 All rights reserved | This template is made with ❤️ by <a className='text-danger link-underline link-underline-opacity-0' href='https://colorlib.com'>Colorlib</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
