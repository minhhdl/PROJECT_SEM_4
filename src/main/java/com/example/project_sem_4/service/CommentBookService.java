package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.repository.CommentBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class CommentBookService implements ICommentBookService {

    @Autowired
    CommentBookRepository commentBookRepository;
    @Autowired
    BookService bookService;
    @Autowired
    UserService userService;

    @Override
    public List<CommentBook> getCommentBooks() {
        return commentBookRepository.findAll();
    }

    @Override
    public CommentBook getCommentBookById(int commentId) {
        Optional<CommentBook> comment = commentBookRepository.findById(commentId);
        return comment.orElse(null);
    }

    @Override
    public boolean insertCommentBook(CommentBook comment) {
        Random random = new Random();
        comment.setCommentId(Math.abs(random.nextInt()));
        boolean status = false;
        Book bookExist = bookService.getBookById(comment.getBookId());
        Users userExist = userService.getUserById(comment.getUserId());
        if (bookExist != null) {
            if (userExist != null) {
                CommentBook commentExist = getCommentBookById(comment.getBookId());
                if (commentExist == null) {
                    try {
                        CommentBook commentAdded = commentBookRepository.save(comment);
                        if (commentAdded.getBookId() > 0) {
                            status = true;
                        }
                    } catch (Exception ex) {
                        ex.printStackTrace();
                    }
                }
            }
        }
        return status;
    }

    @Override
    public boolean updateCommentBook(CommentBook comment) {
        boolean status = false;
        Book bookExist = bookService.getBookById(comment.getBookId());
        Users userExist = userService.getUserById(comment.getUserId());
        if (bookExist != null) {
            if (userExist != null) {
                CommentBook commentExist = getCommentBookById(comment.getCommentId());
                if (commentExist != null) {
                    comment.setCreatedAt(commentExist.getCreatedAt());
                    comment.setUpdatedAt(ZonedDateTime.now());
                    try {
                        CommentBook commentAdded = commentBookRepository.save(comment);
                        if (commentAdded.getBookId() > 0) {
                            status = true;
                        }
                    } catch (Exception ex) {
                        ex.printStackTrace();
                    }
                }
            }
        }
        return status;
    }

    @Override
    public boolean deleteCommentBook(int commentId) {
        boolean status = false;
        CommentBook commentExist = getCommentBookById(commentId);
        if (commentExist != null) {
            try {
                commentBookRepository.delete(commentExist);
                status = true;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }
}
