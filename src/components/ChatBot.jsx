import React, { useState } from 'react';
import { MessageCircle, X, Mic } from 'lucide-react';

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi 👋 I am Navnit's assistant. Ask about skills, projects or contact!",
      sender: 'bot',
    },
  ]);

  const [input, setInput] = useState('');

  // ✅ Scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  // ✅ Smart Reply System
  const getReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes('skill') || msg.includes('tech')) {
      scrollToSection('skills');
      return 'Navnit works with MERN stack, Java, Python and modern web technologies 💻';
    }

    if (msg.includes('project') || msg.includes('work')) {
      scrollToSection('projects');
      return 'Check out projects like AI Assistant, Watch Party, E-commerce and Face Recognition 🚀';
    }

    if (msg.includes('contact') || msg.includes('hire')) {
      scrollToSection('contact');
      return 'You can contact Navnit via email, LinkedIn or GitHub 📩';
    }

    if (msg.includes('resume')) {
      return 'You can view or download the resume from the hero section 📄';
    }

    if (msg.includes('hello') || msg.includes('hi')) {
      return 'Hello 👋 Welcome to Navnit’s portfolio website!';
    }

    return 'Try asking about skills, projects, resume or contact 😊';
  };

  // ✅ Send Message
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: 'user',
    };

    const botMessage = {
      text: getReply(input),
      sender: 'bot',
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);

    setInput('');
  };

  // ✅ Voice Recognition (SAFE VERSION)
  const handleVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Voice recognition is not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
    };

    recognition.onerror = () => {
      alert('Voice recognition failed');
    };
  };

  return (
    <>
      {/* ✅ Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 p-4 rounded-full shadow-lg text-white z-50 transition duration-300"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {/* ✅ Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-gray-900 text-white rounded-2xl shadow-2xl p-4 z-50 border border-gray-700 animate-fade-in">

          {/* Header */}
          <div className="text-center mb-3">
            <h2 className="font-bold text-lg text-blue-400">
              Navnit AI Assistant 🤖
            </h2>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto mb-3 space-y-3 pr-1">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl text-sm max-w-[85%] break-words ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 ml-auto'
                    : 'bg-gray-700'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex gap-2">

            {/* Input */}
            <input
              type="text"
              value={input}
              placeholder="Ask something..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && handleSend()
              }
              className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none border border-gray-700 focus:border-blue-500"
            />

            {/* Voice Button */}
            <button
              onClick={handleVoice}
              className="bg-green-500 hover:bg-green-600 px-3 rounded-lg transition"
            >
              <Mic size={18} />
            </button>

            {/* Send Button */}
            <button
              onClick={handleSend}
              className="bg-blue-500 hover:bg-blue-600 px-4 rounded-lg transition"
            >
              Send
            </button>

          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;