'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export function VoiceNavigation() {
  const router = useRouter();
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  // Use refs to avoid recreation of objects on each render
  const recognitionRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize speech recognition once
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const current = event.resultIndex;
        const command = event.results[current][0].transcript.toLowerCase();

        // Process the command
        processCommand(command);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // Ignore errors when stopping
        }
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const processCommand = (command: string) => {
    // Navigation commands
    if (command.includes('go to home') || command.includes('home page')) {
      setFeedback('Navigating to Home page...');
      router.push('/');
    } else if (command.includes('about') || command.includes('about me')) {
      setFeedback('Navigating to About page...');
      router.push('/about');
    } else if (command.includes('education') || command.includes('study')) {
      setFeedback('Navigating to Education page...');
      router.push('/education');
    } else if (command.includes('skills') || command.includes('abilities')) {
      setFeedback('Navigating to Skills page...');
      router.push('/skills');
    } else if (command.includes('projects') || command.includes('portfolio')) {
      setFeedback('Navigating to Projects page...');
      router.push('/projects');
    } else if (command.includes('experience') || command.includes('work')) {
      setFeedback('Navigating to Experience page...');
      router.push('/experience');
    } else if (command.includes('contact') || command.includes('get in touch')) {
      setFeedback('Navigating to Contact page...');
      router.push('/contact');
    } else {
      setFeedback(`I heard: "${command}" but I don't understand that command.`);
    }

    setShowFeedback(true);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      setShowFeedback(false);
    }, 3000);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      setFeedback('Voice recognition is not supported in your browser.');
      setShowFeedback(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setShowFeedback(false);
      }, 3000);
      return;
    }

    if (isListening) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        // Ignore errors when stopping
      }
      setIsListening(false);
    } else {
      setFeedback('Listening...');
      setShowFeedback(true);

      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        setFeedback('Error starting voice recognition. Please try again.');

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setShowFeedback(false);
        }, 3000);
      }
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-24 right-8 z-40 rounded-full p-3 bg-background shadow-md border transition-all duration-200 hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-right duration-500"
        onClick={toggleListening}
        aria-label={isListening ? 'Stop voice navigation' : 'Start voice navigation'}
      >
        {isListening ? (
          <MicOff className="h-5 w-5 text-purple-600 animate-pulse" />
        ) : (
          <Mic className="h-5 w-5" />
        )}
      </Button>

      {showFeedback && (
        <Alert className="fixed top-20 right-4 z-50 w-auto max-w-xs bg-background/95 backdrop-blur-sm border-purple-600/20 animate-in fade-in slide-in-from-top duration-300">
          <AlertDescription className="flex items-center gap-2">
            {isListening && (
              <div className="flex gap-1">
                <div
                  className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                  style={{ animationDelay: '0ms' }}
                />
                <div
                  className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                  style={{ animationDelay: '150ms' }}
                />
                <div
                  className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
                  style={{ animationDelay: '300ms' }}
                />
              </div>
            )}
            {feedback}
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}
