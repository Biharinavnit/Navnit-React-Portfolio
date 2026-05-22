import React, { useState } from 'react';
import { MessageCircle, X, Mic } from 'lucide-react';


const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I am Navnit's assistant. Ask about skills, projects or contact!", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  // ✅ Scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ Smart NLP (simple keyword matching)
  const getReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes('skill') || msg.includes('tech')) {
      scrollToSection('skills');
      return "Navnit works with MERN stack, Java, Python and modern web tech 💻";
    }

    if (msg.includes('project') || msg.includes('work')) {
      scrollToSection('projects');
      return "Check out projects like AI Assistant, E-commerce, Face Recognition 🚀";
    }

    if (msg.includes('contact') || msg.includes('hire')) {
      scrollToSection('contact');
      return "You can contact him via email or LinkedIn 📩";
    }

    if (msg.includes('resume')) {
      return "You can view or download resume from the top section 📄";
    }

    return "Try asking about skills, projects, resume or contact 😊";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: 'user' };
    const botReply = getReply(input);

    setMessages([...messages, userMsg, { text: botReply, sender: 'bot' }]);
    setInput('');
  };

  // 🎤 Voice Input
  const handleVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
    };
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full shadow-lg text-white z-50"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-gray-900 text-white rounded-xl shadow-xl p-4 z-50">

          <div className="h-64 overflow-y-auto mb-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 ml-auto'
                    : 'bg-gray-700'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded bg-gray-800 text-white"
              placeholder="Ask something..."
            />

            {/* 🎤 Voice */}
            <button onClick={handleVoice} className="bg-green-500 px-2 rounded">
              <Mic size={18} />
            </button>

            <button onClick={handleSend} className="bg-blue-500 px-3 rounded">
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatBot;