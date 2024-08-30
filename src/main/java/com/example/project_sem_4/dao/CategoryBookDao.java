package com.example.project_sem_4.dao;

import java.sql.*;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import com.example.project_sem_4.object.CategoryBook;

public class CategoryBookDao {
    private final String url = "jdbc:sqlserver://localhost:1433;databaseName=Project_Sem_4_DB";
    private final String user = "sa";
    private final String password = "1";

    public List<CategoryBook> getAllCategories() throws SQLException {
        List<CategoryBook> categoryBookList = new ArrayList<>();
        String query = "SELECT * FROM CategoryBook";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            while (rs.next()) {
                CategoryBook category = new CategoryBook();
                category.setCategoryId(rs.getInt("categoryId"));
                category.setCategoryName(rs.getString("categoryName"));
                category.setCreatedAt(rs.getTimestamp("createdAt").toInstant().atZone(ZonedDateTime.now().getZone()));
                category.setUpdatedAt(rs.getTimestamp("updatedAt").toInstant().atZone(ZonedDateTime.now().getZone()));
                categoryBookList.add(category);
            }
        }
        return categoryBookList;
    }

    public void addCategory(CategoryBook category) throws SQLException {
        String query = "INSERT INTO CategoryBook (categoryName, createdAt, updatedAt) \n" +
                "VALUES (?, ?, ?)";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setString(1, category.getCategoryName());
            pstmt.setTimestamp(2, Timestamp.valueOf(category.getCreatedAt().toLocalDateTime()));
            pstmt.setTimestamp(3, Timestamp.valueOf(category.getUpdatedAt().toLocalDateTime()));
            pstmt.executeUpdate();
        }
    }

    public void updateCategory(CategoryBook category) throws SQLException {
        String query = "UPDATE CategoryBook SET categoryName = ?, updatedAt = ? WHERE categoryId = ?";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setString(1, category.getCategoryName());
            pstmt.setTimestamp(2, Timestamp.valueOf(ZonedDateTime.now().toLocalDateTime()));
            pstmt.setInt(3, category.getCategoryId());
            pstmt.executeUpdate();
        }
    }

    public void deleteCategory(int categoryId) throws SQLException {
        String query = "DELETE FROM CategoryBook WHERE categoryId = ?";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setInt(1, categoryId);
            pstmt.executeUpdate();
        }
    }

}
