package com.example.project_sem_4.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class demoVoiceService {
    public String getTextFromWeb(String url) {
        try {
            Document doc = Jsoup.connect(url).get();
            Element body = doc.body();
            return body.text();
        } catch (IOException e) {
            e.printStackTrace();
            return "Error fetching content.";
        }
    }
}
