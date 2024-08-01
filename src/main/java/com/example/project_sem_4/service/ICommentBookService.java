package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;

import java.util.List;

public interface ICommentBookService {
    List<CommentBook> getCommentBooks();

    CommentBook getCommentBookById(int commentId);

    boolean insertCommentBook(CommentBook comment);

    boolean updateCommentBook(CommentBook comment);

    boolean deleteCommentBook(int commentId);
}
