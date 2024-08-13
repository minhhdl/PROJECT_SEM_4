package com.example.project_sem_4.restController;

import com.example.project_sem_4.service.demoVoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class demoVoiceController {
    @Autowired
    private demoVoiceService webTextService;

    @GetMapping("/read-text")
    public String readText(@RequestParam String url, Model model) {
        String text = webTextService.getTextFromWeb(url);
        model.addAttribute("text", text);
        return "read-web";
    }
}
