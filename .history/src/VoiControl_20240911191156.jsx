import { useEffect, useState } from "react";

const VoiceControl = () => {
  let [response, setResponse] = useState("");

  useEffect(() => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!window.SpeechRecognition) {
      alert(
        "Trình duyệt của bạn không hỗ trợ tính năng điều khiển bằng giọng nói"
      );
      return;
    }

    const recognition = new window.SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "vi-VN";

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript
        .trim()
        .toLowerCase();
      handleVoiceCommand(transcript);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  });

  const handleVoiceCommand = (command) => {
    console.log(command);
    switch (command) {
      case "mở menu":
        console.log("Menu được mở");
        setResponse("Menu was opened");
        break;
      case "đóng menu":
        console.log("Menu được đóng");
        break;
      case "xuống":
        window.scrollBy(0, window.innerHeight);
        break;
      case "lên":
        window.scrollBy(0, -window.innerHeight);
        break;
      case "vào thư viện sách":
        window.location.href = "products";
        break;
      case "vào trang chủ":
        window.location.href = "/";
        break;
      case "về trang chủ":
        window.location.href = "/";
        break;
      case "vào sách mới":
        window.location.href = "/newsProducts";
        break;
      default:
        alert("Không nhận diện được lệnh: " + command);
    }
    speak(response);
    const recognition = new window.SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "vi-VN";

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript
        .trim()
        .toLowerCase();
      handleVoiceCommand(transcript);
    };

    recognition.start();
  };
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
};

export default VoiceControl;
