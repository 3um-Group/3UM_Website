// components/FAQ.tsx
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is DeFi?',
    answer: 'DeFi stands for Decentralized Finance, an umbrella term for financial services on public blockchains, primarily Ethereum. DeFi allows users to engage in financial activities such as lending, borrowing, trading, and earning interest without the need for traditional intermediaries like banks.',
  },
  {
    question: 'What are the benefits of using DeFi?',
    answer: 'DeFi offers several benefits including permissionless access, transparency, and lower costs. Users can access financial services without a central authority, view transaction details publicly, and save on fees typically charged by traditional financial institutions.',
  },
  {
    question: 'How do I get started with DeFi?',
    answer: 'To get started with DeFi, you need a cryptocurrency wallet such as MetaMask. Once you have a wallet, you can transfer some cryptocurrency (like ETH) to it and start using various DeFi platforms such as Uniswap for trading or Aave for lending and borrowing.',
  },
  {
    question: 'What are stablecoins?',
    answer: 'Stablecoins are a type of cryptocurrency designed to maintain a stable value relative to a fiat currency (like USD) or a basket of assets. Examples include USDT, USDC, and DAI. They are commonly used in DeFi to mitigate the volatility of other cryptocurrencies.',
  },
  {
    question: 'What are the risks associated with DeFi?',
    answer: 'DeFi carries risks such as smart contract vulnerabilities, lack of regulation, and market volatility. It’s important to conduct thorough research, use well-audited platforms, and consider the risks before participating in DeFi activities.',
  },
  {
    question: 'How does yield farming work?',
    answer: 'Yield farming involves providing liquidity to DeFi protocols in exchange for rewards, often in the form of additional cryptocurrency tokens. Users can earn returns by locking their assets in liquidity pools on platforms like Uniswap, Sushiswap, or Compound.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {faqItems.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold">{item.question}</h3>
            {activeIndex === index ? (
              <FiChevronUp className="w-6 h-6 text-gray-700" />
            ) : (
              <FiChevronDown className="w-6 h-6 text-gray-700" />
            )}
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100 rounded-lg mt-2 shadow-inner">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
