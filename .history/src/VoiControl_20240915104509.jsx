import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const VoiceControl = () => {
  let [response, setResponse] = useState("");
  useEffect(() => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!window.SpeechRecognition) {
      setResponse("Your browser does not support voice control");
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
        command = "";
        break;
      case "down":
        window.scrollBy(0, window.innerHeight);
        setResponse("Down successfully");
        break;
      case "up":
        window.scrollBy(0, -window.innerHeight);
        setResponse("Up successfully");
        break;
      case "sign up":
        window.location.href = "/sign-up";
        setResponse("Moved to the sign up page");
        break;
      case "books":
        window.location.href = "/products";
        setResponse("Moved to all book page");
        break;
      case "sign out":
        window.location.href = "/";
        setResponse("Logged out successfully");
        break;
      case "sign in":
        window.location.href = "/sign-in";
        setResponse("Moved to the sign in page");
        break;
      case "manage":
        if (Cookies.get("username") === "Admin") {
          setResponse("Moved to the page for admin");
          window.location.href = "/admin/dashboard";
        } else {
          setResponse("You do not have access to the admin area");
        }
        break;
      default:
        setResponse("Command not recognized: " + command);
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
      setResponse("");
    }
  }, [response]);

  function speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.find((voice) =>
      voice.name.includes("Microsoft Mark - English (United States)")
    );
    // Read Speed
    utterance.rate = 1.1;
    window.speechSynthesis.speak(utterance);
    utterance.onend = () => {
      utterance = null;
    };
  }
};

export default VoiceControl;
