import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        description: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { title, price, description } = formData;

    useEffect(() => {
        axios.get(`http://localhost:3000/productData/get/${id}`)
            .then((res) => {
                setFormData(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch product details');
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/productData/update/${id}`, formData)
            .then((res) => {
                setFormData(res.data.data);
                alert('Product updated successfully!');
                navigate('/');  // Redirect to product list
            })
            .catch(err => setError('Failed to update product'));
    };

    if (loading) return <p>Loading product details...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter title" 
                    name="title" 
                    value={title} 
                    onChange={handleChange} 
                />
                <br />
                <input 
                    type="number" 
                    placeholder="Enter price" 
                    name="price" 
                    value={price} 
                    onChange={handleChange} 
                />
                <br />
                <textarea 
                    name="description" 
                    placeholder="Enter description" 
                    value={description} 
                    onChange={handleChange} 
                />
                <br />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
