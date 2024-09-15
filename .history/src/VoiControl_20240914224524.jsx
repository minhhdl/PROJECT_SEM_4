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
    // recognition.lang = "vi-VN";

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
      case "home":
        window.location.href = "/";
        setResponse("Returned to the home page");
        break;
      case "đóng menu":
        console.log("Menu được đóng");
        break;
      case "down":
        window.scrollBy(0, window.innerHeight);
        setResponse("Down successfully");
        break;
      case "up":
        window.scrollBy(0, -window.innerHeight);
        setResponse("Up successfully");
        break;
      case "vào thư viện sách":
        window.location.href = "products";
        setResponse("Okay");
        break;
      case "sign up":
        window.location.href = "/sign-up";
        setResponse("Moved to the sign up page");
        break;
      case "sign out":
        window.location.href = "/";
        setResponse("Logged out successfully");
        break;
      case "sign in":
        window.location.href = "/sign-in";
        setResponse("Moved to the sign in page");
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
        setResponse("Command not recognized: " + command);
        recognition.continuous = false;
        recognition.interimResults = false;
        // recognition.lang = "vi-VN";

        recognition.onresult = (event) => {
          const transcript = event.results[event.resultIndex][0].transcript
            .trim()
            .toLowerCase();
          handleVoiceCommand(transcript);
        };

        recognition.start();
    }
    const recognition = new window.SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    // recognition.lang = "vi-VN";

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript
        .trim()
        .toLowerCase();
      handleVoiceCommand(transcript);
    };

    recognition.start();
  };

  useEffect(() => {
    if (response) {
      speak(response);
    }
  }, [response]);

  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }
};

export default VoiceControl;
