'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { Bot, Send, X } from 'lucide-react';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Rajan's AI assistant. How can I help?", isBot: true },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());

    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    const currentInput = input;
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "I'd be happy to tell you more about Rajan's projects!",
        'Rajan is skilled in MERN stack development and C++ programming.',
        "You can download Rajan's resume using the button on the home page.",
        'Feel free to explore the different sections of the portfolio!',
        'Rajan is passionate about AI and technology exploration.',
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 h-14 w-14 rounded-full p-0 bg-purple-600 hover:bg-purple-700 shadow-md transition-all duration-200 hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-right duration-500"
        aria-label="Chat with AI assistant"
      >
        <Bot className="h-6 w-6 animate-pulse" />
      </Button>

      {isOpen && (
        <Card
          className={cn(
            'fixed z-50 flex flex-col shadow-lg border border-border animate-in fade-in duration-200',
            isMobile ? 'inset-4 h-[calc(100vh-32px)]' : 'bottom-24 right-4 w-96 max-h-[70vh]'
          )}
        >
          <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-400 p-3 text-white rounded-t-lg">
            <Typography variant="h6" className="text-white font-bold">
              AI Assistant
            </Typography>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-purple-700/50 rounded-full transition-colors duration-200"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.isBot ? 'justify-start' : 'justify-end'
                } animate-in fade-in slide-in-from-bottom duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={cn(
                    'rounded-lg px-3 py-2 max-w-[80%] shadow-sm transition-all duration-200',
                    msg.isBot
                      ? 'bg-muted text-foreground hover:bg-muted/80'
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="border-t p-3 flex gap-2">
            <Input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 focus:ring-2 focus:ring-purple-500 transition-all duration-200"
            />
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 rounded-full w-10 h-10 p-0 transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      )}
    </>
  );
}
