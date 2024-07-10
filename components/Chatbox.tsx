// components/Chatbox.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Chatbox: React.FC = () => {
  const [conversation, setConversation] = useState<{ user: string; message: string; type?: string; fileUrl?: string; }[]>([]);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);

  const messages = [
    { user: 'User', message: 'Hi, I want to join this DAO.' },
    { user: 'AI', message: 'Great! Do you have a crypto wallet set up?' },
    { user: 'User', message: 'Yes, I have a MetaMask wallet.' },
    { user: 'AI', message: 'Please click here to connect your wallet.', type: 'link', fileUrl: '#' },
    { user: 'Action', message: 'User connects their MetaMask wallet.' },
    { user: 'AI', message: 'Your wallet is connected! Do you have at least 10 of our DAO tokens?' },
    { user: 'User', message: 'No, I don’t have any DAO tokens yet.' },
    { user: 'AI', message: 'You can purchase DAO tokens here: Purchase DAO Tokens.', type: 'link', fileUrl: '#' },
    { user: 'Action', message: 'User purchases the tokens.' },
    { user: 'User', message: 'I’ve bought the tokens.' },
    { user: 'AI', message: 'Let me verify your token balance.' },
    { user: 'Action', message: 'AI verifies the user’s token balance.' },
    { user: 'AI', message: 'You have the required tokens. Please confirm your details: Name and Email' },
    { user: 'User', message: 'Name: John Doe \nEmail: john.doe@example.com' },
    { user: 'AI', message: 'Your membership request has been submitted. Welcome to the DAO, John! Anything else I can help with?' },
    { user: 'User', message: 'That’s all for now. Thank you!' },
    { user: 'AI', message: 'You’re welcome! Have a great day!' },
  ];

  const chatboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasScrolledIntoView) {
          setHasScrolledIntoView(true);
          messages.forEach((message, index) => {
            setTimeout(() => {
              setConversation(prev => [...prev, message]);
            }, 1000 * index);
          });
        }
      });
    }, {
      threshold: 0.5
    });

    if (chatboxRef.current) {
      observer.observe(chatboxRef.current);
    }

    return () => {
      if (chatboxRef.current) {
        observer.unobserve(chatboxRef.current);
      }
    };
  }, [hasScrolledIntoView]);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [conversation]);

  return (
    <div ref={chatboxRef} className="bg-gray-900 p-4 rounded-lg shadow-md max-w-md mx-auto text-white max-h-[50vh] overflow-y-scroll">
      <div className="flex flex-col space-y-4">
        {conversation.map((chat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex ${chat.user === 'User' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-2 rounded-lg ${chat.user === 'User' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}
              style={{ maxWidth: '75%' }}
            >
              <strong>{chat.user === 'Action' ? '' : chat.user + ':'} </strong>
              {chat.type === 'link' ? (
                <a href={chat.fileUrl} className="block mt-2 text-blue-300 underline">
                  {chat.message}
                </a>
              ) : (
                <span>{chat.message}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Chatbox;
