const InsUpUser = () => {
  return (
    <div>
      <h2>Create Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="bookId"
          value={formData.bookId}
          onChange={handleChange}
          placeholder="Book ID"
        />
        <input
          name="bookName"
          value={formData.bookName}
          onChange={handleChange}
          placeholder="Book Name"
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          placeholder="Publisher"
        />
        <input
          name="bookPrice"
          value={formData.bookPrice}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          name="bookDescription"
          value={formData.bookDescription}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          name="picture"
          value={formData.picture}
          onChange={handleChange}
          placeholder="Picture URL"
        />
        <input
          name="readCount"
          type="number"
          value={formData.readCount}
          onChange={handleChange}
          placeholder="Read Count"
        />
        <input
          name="star"
          type="number"
          value={formData.star}
          onChange={handleChange}
          placeholder="Star"
        />
        <label>
          Favorite:
          <input
            name="isFavorite"
            type="checkbox"
            checked={formData.isFavorite}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Book</button>
      </form>
    </div>
  );
};
