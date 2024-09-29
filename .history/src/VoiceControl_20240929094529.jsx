import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const VoiceControl = () => {
  let [response, setResponse] = useState("");
  let recognition;
  useEffect(() => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!window.SpeechRecognition) {
      setResponse("Your browser does not support voice control");
      return;
    }

    recognition = new window.SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    // recognition.lang = "vi-VN";

    recognition.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript
        .trim()
        .toLowerCase();
      handleVoiceCommand(transcript);
    };
    if (Cookies.get("offTheVoice") !== "true") {
      recognition.start();
    }

    recognition.onend = () => {
      setResponse("");
      setTimeout(() => {
        recognition.start();
      }, 1000);
    };

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
      case "top":
        window.scrollTo({ top: 0, behavior: "smooth" });
        setResponse("Scroll to the top successfully");
        break;
      case "bottom":
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        setResponse("Scroll to the bottom successfully");
        break;
      case "blogs":
        window.location.href = "/blogs";
        setResponse("Moved to the blogs page");
        break;
      case "contact":
        window.location.href = "/contact";
        setResponse("Moved to the contact page");
        break;
      case "help me":
        Cookies.set("isRead", "false");
        window.location.reload();
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
        window.location.href = "/sign-out";
        setResponse("Signed out successfully");
        break;
      case "sign in":
        window.location.href = "/sign-in";
        setResponse("Moved to the sign in page");
        break;
      case "normal":
        Cookies.set("offTheVoice", "true");
        window.location.reload();
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

    if (Cookies.get("offTheVoice") !== "true") {
      recognition.start();
    }
  };

  useEffect(() => {
    if (Cookies.get("notFound") === "true") {
      setResponse("This page is not contains");
    }
    if (location.pathname.includes("/product/")) {
      if (
        Cookies.get("pressSpace") !== "true" ||
        Cookies.get("pressSpace") === null
      ) {
        Cookies.set("pressSpace", "true");
        setResponse("Press space bar to listen");
      }
    }
    if (Cookies.get("isRead") === "false" || Cookies.get("isRead") == null) {
      if (location.pathname === "/") {
        setResponse(
          "Hello. You can read many types of books here. You can say the following words to change direction. 'Home' is to go to the home page. 'Books' is to go to the all books page. 'Blogs' is to go to the blogs page. 'Contact' is to go to the contact us page. 'Down' to scroll down the web page. 'Up' to scroll the web page up. 'Top' to scroll to the top of the web page. 'Bottom' to scroll to the bottom of the web page. 'Normal' to switch the website to normal mode. 'Help me' to hear the instructions again"
        );
      }
      if (location.pathname === "/sign-in") {
        setResponse("You are on the sign in page");
      }
    }
  }, []);

  useEffect(() => {
    if (response) {
      if (Cookies.get("offTheVoice") !== "true") {
        speak(response);
        setResponse("");
      }
    }
    if (Cookies.get("msg")) {
      if (Cookies.get("offTheVoice") !== "true") {
        speak(Cookies.get("msg"));
        setResponse("");
      }
    }
  }, [response]);

  function speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    console.log(voices);
    utterance.voice = voices.find((voice) =>
      voice.name.includes("Google US English")
    );

    // Read Speed
    utterance.rate = 1.1;
    // End Read Speed

    window.speechSynthesis.speak(utterance);
    utterance.onend = () => {
      window.location.reload();
      Cookies.remove("msg");
      Cookies.set("isRead", "true");
      Cookies.remove("notFound");
    };
  }
};

export default VoiceControl;
