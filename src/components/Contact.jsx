import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_24wqqas',
        'template_mf47dcs',
        form.current,
        'qDZ9qPkhmj3OlOBMb'
      )
      .then(
        () => {
          setStatus('Message sent successfully ✅');
          form.current.reset();
        },
        () => {
          setStatus('Failed to send ❌');
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">Contact</h2>

        {/* ✅ Email Form Added */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4 mb-8">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded text-white font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="text-green-400 mb-4">{status}</p>}

        {/* 👇 YOUR ORIGINAL CODE (UNCHANGED) */}
        <div className="space-y-4 text-gray-300 text-lg">
          <p className="flex items-center justify-center gap-2">
            <Mail className="text-indigo-400 w-5 h-5" />
            Email:{' '}
            <a
              href="mailto:biharinavnit28@gmail.com"
              className="text-blue-400 hover:underline"
            >
              biharinavnit28@gmail.com
            </a>
          </p>

          <p className="flex items-center justify-center gap-2">
            <Phone className="text-pink-400 w-5 h-5" />
            Phone: <span className="text-white font-medium">+91 9097944359</span>
          </p>

          <div className="flex justify-center gap-6 mt-6 text-blue-400">
            <a
              href="https://github.com/Biharinavnit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/navnit-bihari-9a894b298/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/biharinavnit12/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>

            {/* GFG Link Added */}
            <a
              href="https://www.geeksforgeeks.org/profile/biharina42po"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              GFG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;