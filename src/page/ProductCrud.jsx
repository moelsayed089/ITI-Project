import "./Products.css";
import Cards from "../components/card/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik } from "formik";
import axios from "axios";
import { InputValidation } from "../validation";
import { useQuery } from "react-query";
import { useState } from "react"; // Import useState

function ProductCrud() {
    const [products, setProducts] = useState([]); // Create a state for products
    const [editMode, setEditMode] = useState(false); // Track if we are in edit mode
    const [currentProduct, setCurrentProduct] = useState(null); // Store the product being edited

    const addProducts = async (values) => {
        try {
            const { data } = await axios.post("http://localhost:5000/products", values);
            setProducts((prev) => [ data, ...prev ]); // Update state with new product
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getDataFromServer = async () => {
        const { data } = await axios.get("http://localhost:5000/products");
        return data;
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/products/${id}`);
            setProducts((prev) => prev.filter((product) => product.id !== id)); // Remove deleted product from state
        } catch (error) {
            console.log(error);
        }
    };

    const updateProduct = async (id, values) => {
        try {
            const { data } = await axios.put(`http://localhost:5000/products/${id}`, values);
            setProducts((prev) => prev.map((product) => (product.id === id ? data : product))); // Update product in state
            setEditMode(false); // Exit edit mode after updating
            setCurrentProduct(null); // Clear current product
        } catch (error) {
            console.log(error);
        }
    };

    const { isLoading } = useQuery("products", getDataFromServer, {
        onSuccess: (data) => {
            setProducts(data); // Set initial products from server
        },
    });

    const inputObj = useFormik({
        initialValues: {
            title: currentProduct?.title || "",
            price: currentProduct?.price || "",
            image: currentProduct?.image || "",
            description: currentProduct?.description || "",
            rating: currentProduct?.rating || "",
        },
        enableReinitialize: true,
        onSubmit: async (values, { resetForm }) => {
            if (editMode) {
                await updateProduct(currentProduct.id, values); // Update product if in edit mode
            } else {
                await addProducts(values); // Add product if not in edit mode
            }
            resetForm(); // Reset form after submission
            setEditMode(false); // Reset edit mode
        },
        validate: InputValidation,
    });

    const handleEdit = (product) => {
        setEditMode(true); // Switch to edit mode
        setCurrentProduct(product); // Set the product being edited
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className="container-fluid mt-5" >
                <h1 className="text-center">Products Crud Operation</h1>
            </div>

            <form onSubmit={inputObj.handleSubmit}>
                <div className="container mt-5">
                    <Row>
                        <Col lg={6} md={6} xs={12}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    id="title"
                                    value={inputObj.values.title}
                                    onChange={inputObj.handleChange}
                                    onBlur={inputObj.handleBlur}
                                    aria-invalid={inputObj.touched.title && !!inputObj.errors.title}
                                />
                                {inputObj.touched.title && inputObj.errors.title && (
                                    <div className="text-danger fw mt-2">{inputObj.errors.title}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    id="price"
                                    value={inputObj.values.price}
                                    onChange={inputObj.handleChange}
                                    onBlur={inputObj.handleBlur}
                                    aria-invalid={inputObj.touched.price && !!inputObj.errors.price}
                                />
                                {inputObj.touched.price && inputObj.errors.price && (
                                    <div className="text-danger fw mt-2">{inputObj.errors.price}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    Image
                                </label>
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    id="image"
                                    value={inputObj.values.image}
                                    onChange={inputObj.handleChange}
                                    onBlur={inputObj.handleBlur}
                                    aria-invalid={inputObj.touched.image && !!inputObj.errors.image}
                                />
                                {inputObj.touched.image && inputObj.errors.image && (
                                    <div className="text-danger fw mt-2">{inputObj.errors.image}</div>
                                )}
                            </div>
                        </Col>
                        <Col lg={6} md={6} xs={12}>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    id="description"
                                    value={inputObj.values.description}
                                    onChange={inputObj.handleChange}
                                    onBlur={inputObj.handleBlur}
                                    aria-invalid={inputObj.touched.description && !!inputObj.errors.description}
                                />
                                {inputObj.touched.description && inputObj.errors.description && (
                                    <div className="text-danger fw mt-2">{inputObj.errors.description}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="rating" className="form-label">
                                    Rating
                                </label>
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    id="rating"
                                    value={inputObj.values.rating}
                                    onChange={inputObj.handleChange}
                                    onBlur={inputObj.handleBlur}
                                    aria-invalid={inputObj.touched.rating && !!inputObj.errors.rating}
                                />
                                {inputObj.touched.rating && inputObj.errors.rating && (
                                    <div className="text-danger fw mt-2">{inputObj.errors.rating}</div>
                                )}
                            </div>
                        </Col>
                    </Row>
                    <button
                        type="submit"
                        className="btn btn-primary w-25"
                        disabled={inputObj.isSubmitting}
                    >
                        {editMode ? "Update Product!" : "Add Product!"}
                    </button>
                </div>
            </form>

            <div className="container mt-5">
                <Row className="mb-5">
                    {products.map((product) => (
                        <Col lg={4} md={6} xs={12} className="center" key={product.id}>
                            <Cards
                                title={product.title}
                                price={"$" + product.price}
                                image={product.image}
                                rating={product.rating}
                                id={product.id}
                                to={`/productdetailscrud/${product.id}`}
                            >
                                <button
                                    onClick={() => handleEdit(product)} // Pass product data to edit
                                    className="btn btn-secondary w-100"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteProduct(product.id)}
                                    className="btn btn-danger w-100"
                                >
                                    Delete
                                </button>
                            </Cards>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export default ProductCrud;
