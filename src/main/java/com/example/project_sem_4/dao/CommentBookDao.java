package com.example.project_sem_4.dao;

import com.example.project_sem_4.object.Book;
import com.example.project_sem_4.object.CommentBook;
import com.example.project_sem_4.object.Users;
import java.sql.*;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

public class CommentBookDao {
    private final String url = "jdbc:sqlserver://localhost:1433;databaseName=Project_Sem_4_DB";
    private final String user = "sa";
    private final String password = "1";

    public List<CommentBook> getAllBooks() throws SQLException {
        List<CommentBook> commentBookList = new ArrayList<>();
        String query = "SELECT * FROM CommentBook";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                CommentBook commentBook = new CommentBook();
                commentBook.setCommentId(rs.getInt("commentId"));
                commentBook.setBookId(rs.getInt("bookId"));
                commentBook.setUserId(rs.getInt("userId"));
                commentBook.setContents(rs.getString("contents"));
                commentBook.setCreatedAt(rs.getTimestamp("createdAt").toInstant().atZone(ZonedDateTime.now().getZone()));
                commentBook.setUpdatedAt(rs.getTimestamp("updatedAt").toInstant().atZone(ZonedDateTime.now().getZone()));
                commentBookList.add(commentBook);
            }
        }
        return commentBookList;
    }

    public void addBook(CommentBook commentBook) throws SQLException {
        String query = "INSERT INTO CommentBook(bookId, userId, contents, createdAt, updatedAt)\n" +
                ")" +
                "VALUES (?, ?, ?, ?, ?)";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setInt(1, commentBook.getBookId());
            pstmt.setInt(2, commentBook.getUserId());
            pstmt.setString(3, commentBook.getContents());
            pstmt.setTimestamp(4, Timestamp.valueOf(commentBook.getCreatedAt().toLocalDateTime()));
            pstmt.setTimestamp(5, Timestamp.valueOf(commentBook.getUpdatedAt().toLocalDateTime()));
            pstmt.executeUpdate();
        }
    }

    public void updateBook(CommentBook commentBook) throws SQLException {
        String query = "UPDATE CommentBook SET bookId = ?, userId = ?, contents = ?, updatedAt = ?, " +
                "WHERE commentId = ?";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setInt(1, commentBook.getBookId());
            pstmt.setInt(2, commentBook.getUserId());
            pstmt.setString(3, commentBook.getContents());
            pstmt.setTimestamp(4, Timestamp.valueOf(ZonedDateTime.now().toLocalDateTime()));
            pstmt.setInt(5, commentBook.getCommentId()); // Giả sử bạn có phương thức getter cho id
            pstmt.executeUpdate();
        }
    }

    public void deleteBook(int commentId) throws SQLException {
        String query = "DELETE FROM CommentBook WHERE commentId = ?";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setInt(1, commentId);
            pstmt.executeUpdate();
        }
    }

}
