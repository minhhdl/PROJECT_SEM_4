import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [bookId, setBookId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/books/${bookId}`);
      alert(`Book with ID ${bookId} deleted successfully`);
      setBookId('');
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Failed to delete the book. Please check the ID.');
    }
  };

  return (
    <div>
      <h2>Delete Book</h2>
      <input
        type="text"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        placeholder="Enter Book ID"
      />
      <button onClick={handleDelete}>Delete Book</button>
    </div>
  );
};

export default Delete;