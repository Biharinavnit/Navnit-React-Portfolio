
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Send,
  ArrowUpRight,
} from 'lucide-react';

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    if (sending) return;

    setSending(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        'service_24wqqas',
        'template_mf47dcs',
        form.current,
        'qDZ9qPkhmj3OlOBMb'
      );

      setStatus('Message sent successfully!');
      form.current?.reset();
    } catch (error) {
      setStatus('Failed to send your message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/Biharinavnit',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/navnit-bihari-9a894b298/',
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/biharinavnit12/',
      icon: Instagram,
    },
  ];

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-[#080d1b]/70 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 transition focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/15';

  return (
    <section
      id="contact"
      className="section-shell relative scroll-mt-20 overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="ambient-glow bottom-[-8rem] left-[15%] h-80 w-80 bg-violet-600/15" />
      <div className="ambient-glow right-[-8rem] top-10 h-72 w-72 bg-fuchsia-500/10" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">Let's connect</p>
          <h2 className="section-title mt-3">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Have a project idea or an opportunity? Send me a message. I'd be
            happy to connect.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass-card flex flex-col p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white">Contact details</h3>
            <p className="mt-3 leading-7 text-slate-400">
              Reach out through email or connect with me on my professional
              and social platforms.
            </p>

            <a
              href="mailto:biharinavnit28@gmail.com"
              className="mt-8 flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:border-violet-400/30 hover:bg-violet-500/[0.06]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                <Mail size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-slate-400">Email</span>
                <span className="mt-1 block break-all font-medium text-white">
                  biharinavnit28@gmail.com
                </span>
              </span>
              <ArrowUpRight size={17} className="ml-auto shrink-0 text-slate-500" />
            </a>

            <a
              href="tel:+919097944359"
              className="mt-3 flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 transition hover:border-violet-400/30 hover:bg-violet-500/[0.06]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300">
                <Phone size={20} />
              </span>
              <span>
                <span className="block text-sm text-slate-400">Phone</span>
                <span className="mt-1 block font-medium text-white">
                  +91 9097944359
                </span>
              </span>
              <ArrowUpRight size={17} className="ml-auto shrink-0 text-slate-500" />
            </a>

            <div className="mt-auto pt-8">
              <p className="mb-4 text-sm font-semibold text-slate-300">
                Find me online
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-white">Send a message</h3>
            <p className="mt-2 mb-7 text-sm leading-6 text-slate-400">
              Fill in the details below and I'll receive your message by email.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label htmlFor="user_name" className="mb-2 block text-sm font-medium text-slate-300">
                  Your name
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="user_email" className="mb-2 block text-sm font-medium text-slate-300">
                  Email address
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about your message..."
                  required
                  className={`${inputClass} resize-y`}
                />
              </div>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border p-3 text-sm ${
                    status.startsWith('Message sent')
                      ? 'border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300'
                      : 'border-rose-400/20 bg-rose-400/[0.08] text-rose-300'
                  }`}
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="button-primary flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={17} />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
