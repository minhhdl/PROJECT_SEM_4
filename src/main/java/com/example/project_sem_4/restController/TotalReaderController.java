package com.example.project_sem_4.restController;

import com.example.project_sem_4.object.*;
import com.example.project_sem_4.service.*;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/totalreader")
public class TotalReaderController {

    // VARIABLE
    @Autowired
    TotalReaderService totalReaderService;

    @Autowired
    BookService bookService;

    @Autowired
    UserService userService;
    // END VARIABLE

    // GET: API
    @GetMapping("/totalreaders")
    public ResponseEntity<?> getTotalReaders() {
        List<TotalReaders> totalReaderList = totalReaderService.getTotalReaders();
        if (totalReaderList.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body("There are no reader yet");
        }
        return ResponseEntity.ok(totalReaderList);
    }
    // END GET: API

    // POST: API
    @PostMapping("/inserttotalreader")
    public ResponseEntity<?> insertTotalReader(@Valid @RequestBody TotalReaders totalReader, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate
        Book bookExist = bookService.getBookById(totalReader.getBookId());
        if (bookExist != null) {
            Users userExist = userService.getUserById(totalReader.getUserId());
            if (userExist != null) {
                boolean isSuccessfully = totalReaderService.insertTotalReader(totalReader);
                if (!isSuccessfully) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Created failed. Please check your data and try again!");
                }
                return ResponseEntity.status(HttpStatus.OK).body("Created successfully");
            }
            return ResponseEntity.status(HttpStatus.OK).body("This user id does not exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body("This book id does not exist");
    }
    // END POST: API

    // PUT: API
    @PutMapping("/updatetotalreader/{totalid}")
    public ResponseEntity<?> updateTotalReader(@PathVariable("totalid") int totalId, @Valid @RequestBody TotalReaders totalReader, BindingResult result) {
        // Validate
        if (result.hasErrors()) {
            List<String> errorMessages = new ArrayList<>();
            for (var item : result.getFieldErrors()) {
                errorMessages.add("Error: " + item.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorMessages);
        }
        // End Validate
        Book bookExist = bookService.getBookById(totalReader.getBookId());
        if (bookExist != null) {
            totalReader.setTotalId(totalId);
            TotalReaders totalReaderExist = totalReaderService.getTotalReaderById(totalId);
            if (totalReaderExist != null) {
                boolean isSuccessfully = totalReaderService.updateTotalReader(totalReader);
                if (!isSuccessfully) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Updated failed. Please check your data and try again!");
                }
                return ResponseEntity.status(HttpStatus.OK).body("Updated successfully");
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This reader could not be found by id: " + totalId);
        }
        return ResponseEntity.status(HttpStatus.OK).body("This book id does not exist");
    }
    // END PUT: API

    // DELETE: API
    @DeleteMapping("/deletetotalreader/{totalid}")
    public ResponseEntity<?> deleteTotalReader(@PathVariable("totalid") int totalId) {
        TotalReaders totalReaderExist = totalReaderService.getTotalReaderById(totalId);
        if (totalReaderExist != null) {
            boolean isSuccessfully = totalReaderService.deleteTotalReader(totalId);
            if (!isSuccessfully) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Deleted failed. Please check your url and try again!");
            }
            return ResponseEntity.status(HttpStatus.OK).body("Deleted successfully");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This reader could not be found by id: " + totalId);
    }
    // END DELETE: API
}
