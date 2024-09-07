import React, { useState } from 'react';
import axios from 'axios';

const CreateBook = () => {
  const [formData, setFormData] = useState({
    bookId: '',
    bookName: '',
    author: '',
    publisher: '',
    bookPrice: '',
    bookDescription: '',
    picture: '',
    readCount: 0,
    star: 0,
    isFavorite: false,
    createdAt: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5173/book', formData);
      alert('Book created successfully');
      setFormData({
        bookId: '',
        bookName: '',
        author: '',
        publisher: '',
        bookPrice: '',
        bookDescription: '',
        picture: '',
        readCount: 0,
        star: 0,
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <div>
      <h2>Create Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="bookId" value={formData.bookId} onChange={handleChange} placeholder="Book ID" />
        <input name="bookName" value={formData.bookName} onChange={handleChange} placeholder="Book Name" />
        <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" />
        <input name="publisher" value={formData.publisher} onChange={handleChange} placeholder="Publisher" />
        <input name="bookPrice" value={formData.bookPrice} onChange={handleChange} placeholder="Price" />
        <input name="bookDescription" value={formData.bookDescription} onChange={handleChange} placeholder="Description" />
        <input name="picture" value={formData.picture} onChange={handleChange} placeholder="Picture URL" />
        <input name="readCount" type="number" value={formData.readCount} onChange={handleChange} placeholder="Read Count" />
        <input name="star" type="number" value={formData.star} onChange={handleChange} placeholder="Star" />
        <label>
          Favorite:
          <input name="isFavorite" type="checkbox" checked={formData.isFavorite} onChange={handleChange} />
        </label>
        <button type="submit">Create Book</button>
      </form>
    </div>
  );
};

export default CreateBook;