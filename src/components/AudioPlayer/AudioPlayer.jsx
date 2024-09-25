import { useState, useEffect } from "react";
import {
  FaPause,
  FaUser,
  FaPlay,
  FaVolumeUp,
  FaVolumeDown,
} from "react-icons/fa";
import { MdStop } from "react-icons/md";

const AudioPlayer = ({ text, title, author, image }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Trạng thái ẩn/hiện thanh phát
  const [volume, setVolume] = useState(1); // Volume mặc định 1 (max)
  const [synth, setSynth] = useState(null);
  const [utterance, setUtterance] = useState(null);
  const [voices, setVoices] = useState([]); // Danh sách giọng đọc
  const [selectedVoice, setSelectedVoice] = useState(null); // Giọng đọc đã chọn
  const [elapsedTime, setElapsedTime] = useState(0); // Thời gian đã phát
  const [totalTime, setTotalTime] = useState(0); // Tổng thời gian phát

  // Lấy danh sách các giọng đọc khi component được render
  useEffect(() => {
    const synthInstance = window.speechSynthesis;
    setVoices(synthInstance.getVoices());

    const utteranceInstance = new SpeechSynthesisUtterance(text);
    utteranceInstance.lang = "en-US"; // Setup language
    utteranceInstance.rate = 1.1; // Read speed
    utteranceInstance.volume = volume; // Volume

    utteranceInstance.onboundary = (event) => {
      // Tính toán thời gian đã phát
      const currentTime = (event.charIndex / text.length) * totalTime;
      setElapsedTime(currentTime);
    };

    utteranceInstance.onend = () => {
      setIsPlaying(false);
    };

    setSynth(synthInstance);
    setUtterance(utteranceInstance);

    // Tính tổng thời gian phát
    const estimatedTime = text.split(" ").length / 2;
    setTotalTime(estimatedTime);

    return () => {
      if (synthInstance.speaking) {
        synthInstance.cancel();
      }
    };
  }, [text, volume]);

  const handlePlayPause = () => {
    setIsVisible(true); // Hiển thị thanh phát khi nhấn play

    if (!isPlaying) {
      if (synth.speaking) {
        synth.resume();
      } else {
        // Thiết lập giọng đọc đã chọn
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
        synth.speak(utterance);
      }
      setIsPlaying(true);
    } else {
      synth.pause(); // Tạm dừng
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    synth.cancel();
    setIsPlaying(false);
    setIsVisible(false);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (utterance) {
      utterance.volume = newVolume;
    }
  };

  const handleVoiceChange = (event) => {
    const selectedVoice = voices.find(
      (voice) => voice.name === event.target.value
    );
    setSelectedVoice(selectedVoice);
  };

  const handleSeek = (event) => {
    const seekTime = parseFloat(event.target.value);
    setElapsedTime(seekTime);

    const seekCharIndex = Math.floor((seekTime / totalTime) * text.length);

    // Hủy phiên bản cũ và tạo lại giọng đọc bắt đầu từ vị trí mới
    synth.cancel();

    const newUtterance = new SpeechSynthesisUtterance(
      text.slice(seekCharIndex)
    );
    newUtterance.lang = utterance.lang;
    newUtterance.rate = utterance.rate;
    newUtterance.volume = utterance.volume;
    newUtterance.voice = utterance.voice;

    newUtterance.onboundary = (event) => {
      const currentTime = (event.charIndex / text.length) * totalTime;
      setElapsedTime(currentTime);
    };

    newUtterance.onend = () => {
      setIsPlaying(false);
    };

    setUtterance(newUtterance);
    synth.speak(newUtterance);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <>
      {/* Nút để hiện thanh phát */}
      <button
        onClick={handlePlayPause}
        className="px-6 py-2 bg-primary text-white font-semibold rounded-full shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2" // Thêm flex và space-x-2 để tạo khoảng cách giữa icon và text
      >
        {isPlaying ? (
          <>
            <FaPause className="w-5 h-5" />
            <span>Pause Book</span>
          </>
        ) : (
          <>
            <FaPlay className="w-5 h-5" />
            <span>Play Book</span>
          </>
        )}
      </button>

      {/* Thanh trình phát ẩn đi khi không nhấn play */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 w-full bg-gray text-white p-4 shadow-lg z-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/*tên sách và tác giả */}
            <div className="flex items-center space-x-4">
              <img
                className="w-14 h-14 md:w-16 md:h-16 object-cover"
                src={image}
                alt={title}
              />
              <div>
                <span className="text-lg md:text-xl font-bold">{title}</span>
                <span className="flex text-sm text-gray-400">
                  <FaUser className="mr-2" /> {author}
                </span>
              </div>
            </div>

            {/* Nút play/pause và thanh thời gian */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePlayPause}
                  className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition"
                >
                  {isPlaying ? (
                    <FaPause className="w-5 h-5" />
                  ) : (
                    <FaPlay className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={handleStop}
                  className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
                >
                  <MdStop className="w-5 h-5" />
                </button>
              </div>

              {/* Thanh thời gian */}
              <div className="flex items-center space-x-2 w-full">
                <span>{formatTime(elapsedTime)}</span>
                <input
                  type="range"
                  min="0"
                  max={totalTime}
                  step="1"
                  value={elapsedTime}
                  onChange={handleSeek}
                  className="w-full h-2 bg-gray-600 rounded-full appearance-none cursor-pointer"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #3b82f6, #3b82f6)",
                  }}
                />
                <span>{formatTime(totalTime)}</span>
              </div>
            </div>

            {/*Điều chỉnh âm lượng và chọn giọng đọc */}
            <div className="flex items-center justify-center space-x-2 md:justify-end">
              <FaVolumeDown className="w-5 h-5" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 cursor-pointer"
              />
              <FaVolumeUp className="w-5 h-5" />

              {/*chọn giọng đọc */}
              <select
                onChange={handleVoiceChange}
                className="bg-gray text-white p-2 rounded-lg cursor-pointer"
              >
                {voices.map((voice) => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioPlayer;
