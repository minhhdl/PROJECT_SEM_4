package com.example.project_sem_4.service;

import com.example.project_sem_4.object.*;

import java.util.List;

public interface ITotalReaderService {
    List<TotalReaders> getTotalReaders();

    TotalReaders getTotalReaderById(int totalReaderId);

    boolean insertTotalReader(TotalReaders totalReaders);

    boolean updateTotalReader(TotalReaders totalReaders);

    boolean deleteTotalReader(int totalReaderId);
}
