package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.repository.TotalReadersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class TotalReaderService implements ITotalReaderService {

    @Autowired
    TotalReadersRepository totalReadersRepository;
    @Autowired
    BookService bookService;
    @Autowired
    UserService userService;

    @Override
    public List<TotalReaders> getTotalReaders() {
        return totalReadersRepository.findAll();
    }

    @Override
    public TotalReaders getTotalReaderById(int totalReaderId) {
        Optional<TotalReaders> totalReaders = totalReadersRepository.findById(totalReaderId);
        return totalReaders.orElse(null);
    }

    @Override
    public boolean insertTotalReader(TotalReaders totalReaders) {
        Random random = new Random();
        totalReaders.setTotalId(Math.abs(random.nextInt()));
        boolean status = false;
        Book bookExist = bookService.getBookById(totalReaders.getBookId());
        Users userExist = userService.getUserById(totalReaders.getUserId());
        if (bookExist != null) {
            if (userExist != null) {
                TotalReaders totalReadersExist = getTotalReaderById(totalReaders.getTotalId());
                if (totalReadersExist == null) {
                    try {
                        TotalReaders totalReadersAdded = totalReadersRepository.save(totalReaders);
                        if (totalReadersAdded.getTotalId() > 0) {
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
    public boolean updateTotalReader(TotalReaders totalReaders) {
        boolean status = false;
        Book bookExist = bookService.getBookById(totalReaders.getBookId());
        Users userExist = userService.getUserById(totalReaders.getUserId());
        if (bookExist != null) {
            if (userExist != null) {
                TotalReaders totalReadersExist = getTotalReaderById(totalReaders.getTotalId());
                if (totalReadersExist != null) {
                    totalReaders.setCreatedAt(totalReadersExist.getCreatedAt());
                    totalReadersExist.setUpdatedAt(ZonedDateTime.now());
                    try {
                        TotalReaders totalReadersAdded = totalReadersRepository.save(totalReaders);
                        if (totalReadersAdded.getTotalId() > 0) {
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
    public boolean deleteTotalReader(int totalReaderId) {
        boolean status = false;
        TotalReaders totalReadersExist = getTotalReaderById(totalReaderId);
        if (totalReadersExist != null) {
            try {
                totalReadersRepository.delete(totalReadersExist);
                status = true;
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
        return status;
    }
}
