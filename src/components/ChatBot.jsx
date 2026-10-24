
import React, { useState } from 'react';
import { MessageCircle, X, Mic, Send, Bot } from 'lucide-react';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! 👋 I'm Navnit's assistant. Ask me about skills, projects, resume, or contact.",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const getReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes('skill') || msg.includes('tech')) {
      scrollToSection('skills');
      return 'Navnit works with the MERN stack, Java, and modern web technologies. Visit the Technical Skills section for details. 💻';
    }

    if (msg.includes('project') || msg.includes('work')) {
      scrollToSection('projects');
      return 'Explore Navnit’s projects, including the Job Application Tracker, Doctor Appointment System, AI Assistant, Weather App, and more. 🚀';
    }

    if (msg.includes('contact') || msg.includes('hire') || msg.includes('email')) {
      scrollToSection('contact');
      return 'You can reach Navnit by email or connect through LinkedIn and GitHub. The Contact section has the details. 📩';
    }

    if (msg.includes('resume') || msg.includes('cv')) {
      scrollToSection('home');
      return 'You can open Navnit’s resume using the View Resume button in the Home section. 📄';
    }

    if (msg.includes('about') || msg.includes('education') || msg.includes('internship')) {
      scrollToSection('about');
      return 'Navnit is a Computer Science Engineering graduate from Galgotias University and completed a MERN Full Stack Developer internship at EduSkills Academy.';
    }

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return 'Hello! 👋 Welcome to Navnit’s portfolio. What would you like to know?';
    }

    return 'Try asking about skills, projects, resume, education, internship, or contact. 😊';
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const reply = getReply(text);

    setMessages((previous) => [
      ...previous,
      { text, sender: 'user' },
      { text: reply, sender: 'bot' },
    ]);

    setInput('');
  };

  const handleVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      window.alert('Voice recognition is not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText);
    };

    recognition.onerror = () => {
      setListening(false);
      window.alert('Voice recognition failed. Please try again.');
    };

    recognition.start();
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-[60] flex h-[min(500px,calc(100dvh-8rem))] w-[min(370px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020]/95 text-white shadow-2xl shadow-black/50 backdrop-blur-2xl sm:bottom-24 sm:right-6">
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-violet-600/20 to-fuchsia-500/10 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-500/15 text-violet-300">
                <Bot size={22} />
              </span>
              <div>
                <h2 className="font-bold text-white">Navnit AI Assistant</h2>
                <p className="mt-0.5 text-xs text-slate-400">
                  Portfolio guide
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={19} />
            </button>
          </div>

          <div
            className="flex-1 space-y-3 overflow-y-auto p-4"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((message, index) => (
              <div
                key={`${index}-${message.sender}`}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-3 text-sm leading-6 ${
                    message.sender === 'user'
                      ? 'rounded-br-md bg-violet-600 text-white'
                      : 'rounded-bl-md border border-white/[0.07] bg-white/[0.06] text-slate-200'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 bg-black/10 p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                placeholder="Ask about my portfolio..."
                aria-label="Chat message"
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
                    event.preventDefault();
                    handleSend();
                  }
                }}
                className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
              />

              <button
                type="button"
                onClick={handleVoice}
                aria-label={listening ? 'Listening' : 'Use voice input'}
                title={listening ? 'Listening...' : 'Voice input'}
                className={`flex h-11 w-10 shrink-0 items-center justify-center rounded-xl border transition ${
                  listening
                    ? 'border-rose-400/40 bg-rose-500/20 text-rose-300'
                    : 'border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/10'
                }`}
              >
                <Mic size={18} />
              </button>

              <button
                type="button"
                onClick={handleSend}
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-950/30 transition hover:bg-violet-500"
              >
                <Send size={17} />
              </button>
            </div>
            {listening && (
              <p className="mt-2 text-xs text-violet-300">
                Listening for your voice...
              </p>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-xl shadow-violet-950/40 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/20 sm:bottom-6 sm:right-6"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
};

export default ChatBot;
