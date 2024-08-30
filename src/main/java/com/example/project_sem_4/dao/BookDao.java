package com.example.project_sem_4.dao;

import java.sql.*;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import com.example.project_sem_4.object.Book;

public class BookDao {
    private final String url = "jdbc:sqlserver://localhost:1433;databaseName=Project_Sem_4_DB";
    private final String user = "sa";
    private final String password = "1";

    public List<Book> getAllBooks() throws SQLException {
        List<Book> bookList = new ArrayList<>();
        String query = "SELECT * FROM Book";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                Book book = new Book();
                book.setBookId(rs.getInt("bookId"));
                book.setCategoryId(rs.getInt("categoryId"));
                book.setBookName(rs.getString("bookName"));
                book.setAuthor(rs.getString("author"));
                book.setPublisher(rs.getString("publisher"));
                book.setBookPrice(rs.getDouble("bookPrice"));
                book.setBookDescription(rs.getString("bookDescription"));
                book.setPicture(rs.getString("picture"));
                book.setReadCount(rs.getInt("readCount"));
                book.setStar(rs.getDouble("star"));
                book.setFavorite(rs.getBoolean("isFavorite"));
                book.setCreatedAt(rs.getTimestamp("createdAt").toInstant().atZone(ZonedDateTime.now().getZone()));
                book.setUpdatedAt(rs.getTimestamp("updatedAt").toInstant().atZone(ZonedDateTime.now().getZone()));
                bookList.add(book);
            }
        }
        return bookList;
    }

    public void addBook(Book book) throws SQLException {
        String query = "INSERT INTO Books (categoryId, bookName, author, publisher, bookPrice, " +
                "bookDescription, picture, readCount, star, isFavorite, createdAt, updatedAt) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setInt(1, book.getCategoryId());
            pstmt.setString(2, book.getBookName());
            pstmt.setString(3, book.getAuthor());
            pstmt.setString(4, book.getPublisher());
            pstmt.setDouble(5, book.getBookPrice());
            pstmt.setString(6, book.getBookDescription());
            pstmt.setString(7, book.getPicture());
            pstmt.setInt(8, book.getReadCount());
            pstmt.setDouble(9, book.getStar());
            pstmt.setBoolean(10, book.isFavorite());
            pstmt.setTimestamp(11, Timestamp.valueOf(book.getCreatedAt().toLocalDateTime()));
            pstmt.setTimestamp(12, Timestamp.valueOf(book.getUpdatedAt().toLocalDateTime()));
            pstmt.executeUpdate();
        }
    }

    public void updateBook(Book book) throws SQLException {
        String query = "UPDATE Books SET categoryId = ?, bookName = ?, author = ?, publisher = ?, " +
                "bookPrice = ?, bookDescription = ?, picture = ?, readCount = ?, star = ?, " +
                "isFavorite = ?, updatedAt = ? WHERE bookId = ?";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setInt(1, book.getCategoryId());
            pstmt.setString(2, book.getBookName());
            pstmt.setString(3, book.getAuthor());
            pstmt.setString(4, book.getPublisher());
            pstmt.setDouble(5, book.getBookPrice());
            pstmt.setString(6, book.getBookDescription());
            pstmt.setString(7, book.getPicture());
            pstmt.setInt(8, book.getReadCount());
            pstmt.setDouble(9, book.getStar());
            pstmt.setBoolean(10, book.isFavorite());
            pstmt.setTimestamp(11, Timestamp.valueOf(ZonedDateTime.now().toLocalDateTime()));
            pstmt.setInt(12, book.getBookId()); // Giả sử bạn có phương thức getter cho id
            pstmt.executeUpdate();
        }
    }

    public void deleteBook(int bookId) throws SQLException {
        String query = "DELETE FROM Book WHERE bookId = ?";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setInt(1, bookId);
            pstmt.executeUpdate();
        }
    }

}
