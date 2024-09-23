import { Button } from "react-bootstrap"
import '../App.css'
import Products from "./Products"
import About from "./About"
import Gallary from "./Gallary"
import Gategory from "./Gategory"
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <article className='container-fluid bg-image'>
        <div className=' d-flex flex-column align-items-start row-gap-4 ms-5'>
          <h1 id='page-title' className='fw-bold mt-5'>Select Your New <br /> Perfect Style</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse accusamus optio <br /> est reprehenderit minima necessitatibus, animi modi rem expedita repellat <br /> a dolorem laboriosam voluptates qui nihil. Qui esse deserunt quo!</p>
          <Button variant="outline-danger "  id='shop-btn' size='lg'>Shop Now</Button>
        </div>
      </article>
      <About />
      <Gallary />
      <Products/>
      <Gategory />
      <Footer />
      
    </>
  )
}

export default Home