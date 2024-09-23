import "./Products.css";
import Cards from "../components/card/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
const Products = () => {
    const [order, setOrder] = useState("asc");
    const [limit, setLimit] = useState(6);
    const [sortBy, setSortBy] = useState("price");
    const [category, setCategory] = useState("laptops");


    const categories = [
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches",
    ];

    const getProduct = async()=>{
        const { data } = await axios.get(`https://dummyjson.com/products/category/${category}?sortBy=${sortBy}&order=${order}&limit=${limit}`);
        return data
    }



    const handleNewest = () => {
        setOrder("asc");
        setSortBy("price");
    };

    const handlePriceDesc = () => {
        setOrder("desc");
        setSortBy("price");
    };

    const handleMostPopular = () => {
        setOrder("desc");
        setSortBy("rating");
    };

    const handelSelect = (e) => {
        const selectedLimit = parseInt(e.target.value);
        setLimit(selectedLimit); 
    };

    const handleCategory = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        console.log(selectedCategory);
    };


    const {data ,isLoading }=useQuery(["products",order,sortBy,limit,category],getProduct)



    if(isLoading){
        return <h1>Loading...</h1>
    }


  return (
   <>
          {/* Sorting */}
          <div className="container mt-5" id="products">
              <div className="sort-filter d-flex flex-wrap justify-content-between mb-3">
                  <div className="sort-options d-flex gap-2">
                      <button onClick={handleNewest} className="sort-option" autoFocus>
                          Newest Arrivals
                      </button>
                      <button onClick={handlePriceDesc} className="sort-option">Price High To Low</button>
                      <button onClick={handleMostPopular} className="sort-option">Most Popular</button>
                  </div>
                  <div className="per-page mt-2 mt-md-0">
                      <select onChange={handelSelect} className="px-3 py-1 rounded-5 bg-secondary-subtle border-0">
                          
                          <option value="6">6 per </option>
                          <option value="9">9 per </option>
                          <option value="12">12 per </option>
                          <option value="15">15 per </option>
                      </select>
                  </div>
              </div>

{/* ============================================================================ */}
              {/* Products */}
              <div className="container my-5">
                  <h2 className="mb-4">Categories</h2>
                  <div className="row">
                      
                          <div  className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        
                                  <select onChange={handleCategory} className="form-select mt-2">
                                      <option value={category}>Select</option>
                              {categories.map((category, index) => (
                                  <option key={index} value={category}>{category}</option>
                                      ))}
                                  </select>
                              </div>
                       
                     
                  </div>
              </div>




              <Row className="mb-5">
                  {data?.products.map((product) => (
                      <Col lg={4} md={6} xs={12} className="center" key={product.id}>
                          <Cards
                              title={product.title.split(" ").slice(0, 2).join(" ")}
                              price={product.price}
                              image={product.thumbnail}
                              rating={product.rating}
                              id={product.id}
                              to={`/productdetails/${product.id}`}
                          />
                      </Col>
                  ))}
              </Row>

          </div>
   </>
  )
}

export default Products