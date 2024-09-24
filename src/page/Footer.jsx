import { Col, Row } from 'react-bootstrap';
import './Footer.css';
function Footer() {
    return (
        <div className='container col' id='footer'>
            {/* Features Section */}
            <div className="container">
          <Row className='px-4 py-3 bg-danger mt-3'>
            <Col lg={4} md={6} xs={12} className="text-start p-5 text-white">
              <svg
                aria-hidden="true"
                data-prefix="fal"
                data-icon="box"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-box fa-w-16 fa-7x"
              >
                <path
                  fill="currentColor"
                  d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V199.8c0-5.2-.8-10.3-2.5-15.2zM32 199.8c0-1.7.3-3.4.8-5.1L83.4 42.9C85.6 36.4 91.7 32 98.6 32H240v168H32v-.2zM480 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V232h448v232zm0-264H272V32h141.4c6.9 0 13 4.4 15.2 10.9l50.6 151.8c.5 1.6.8 3.3.8 5.1v.2z"
                  class=""
                ></path>
              </svg>{" "}
              <span className="d-block mb-2 fw-bold fs-5">
                Free Shipping Method
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                nostrum a animi.
              </span>
            </Col>
            <Col lg={4} md={6} xs={12} className=" text-start p-5 text-white">
              <svg
                aria-hidden="true"
                data-prefix="fal"
                data-icon="lock"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-lock fa-w-14 fa-7x"
              >
                <path
                  fill="currentColor"
                  d="M400 224h-16v-62.5C384 73.1 312.9.3 224.5 0 136-.3 64 71.6 64 160v64H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM96 160c0-70.6 57.4-128 128-128s128 57.4 128 128v64H96v-64zm304 320H48c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v192c0 8.8-7.2 16-16 16z"
                  class=""
                ></path>
              </svg>
              <span className="d-block mb-2 fw-bold fs-5">
                Secure Payment System
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                nostrum a animi.
              </span>
            </Col>
            <Col lg={4} md={6} xs={12} className=" text-start p-5 text-white">
              <svg
                aria-hidden="true"
                data-prefix="fal"
                data-icon="repeat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-repeat fa-w-16 fa-7x"
              >
                <path
                  fill="currentColor"
                  d="M512 256c0 88.225-71.775 160-160 160H110.628l68.201 68.201c4.686 4.686 4.686 12.284 0 16.971l-5.656 5.656c-4.686 4.686-12.284 4.686-16.971 0l-98.343-98.343c-4.686-4.686-4.686-12.284 0-16.971l98.343-98.343c4.686-4.686 12.284-4.686 16.971 0l5.656 5.656c4.686 4.686 4.686 12.284 0 16.971L110.628 384H352c70.579 0 128-57.421 128-128 0-28.555-9.403-54.952-25.271-76.268-3.567-4.792-3.118-11.462 1.106-15.686l5.705-5.705c5.16-5.16 13.678-4.547 18.083 1.271C499.935 186.438 512 219.835 512 256zM57.271 332.268C41.403 310.952 32 284.555 32 256c0-70.579 57.421-128 128-128h241.372l-68.201 68.201c-4.686 4.686-4.686 12.284 0 16.971l5.656 5.656c4.686 4.686 12.284 4.686 16.971 0l98.343-98.343c4.686-4.686 4.686-12.284 0-16.971L355.799 5.172c-4.686-4.686-12.284-4.686-16.971 0l-5.656 5.656c-4.686 4.686-4.686 12.284 0 16.971L401.372 96H160C71.775 96 0 167.775 0 256c0 36.165 12.065 69.562 32.376 96.387 4.405 5.818 12.923 6.432 18.083 1.271l5.705-5.705c4.225-4.224 4.674-10.893 1.107-15.685z"
                  class=""
                ></path>
              </svg>
              <span className="d-block mb-2 fw-bold fs-5">
                Secure Payment System
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                nostrum a animi.
              </span>
            </Col>
          </Row>
        </div>

            {/* Footer Section */}
            <footer className="container py-5">
                <div className='row row-cols-1 g-4' id='footer-content'>
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
                            <li><a href="#about">About</a></li>
                            <li><a href="#products">Offers & Discounts</a></li>
                            <li><a href="#action">Get Coupon</a></li>
                            <li><a href="#action">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* New Products */}
                    <div className='col'>
                        <h5 className="fw-bold mb-2">New Products</h5>
                        <ul className='list-unstyled d-flex flex-column row-gap-3'>
                            <li><a href="#products">Women Cloth</a></li>
                            <li><a href="#products">Fashion</a></li>
                            <li><a href="#products">Men Accessories</a></li>
                            <li><a href="#products">Rubber made Toys</a></li>
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
            </footer>
        </div>
    );
}

export default Footer;
