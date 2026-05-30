import { Bot, Send } from 'lucide-react';
import { useState } from 'react';
import { getConstituencyReply } from '../services/chatbot';

export default function Chatbot({ placeholder }: { placeholder: string }) {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [reply, setReply] = useState('Ask me about Udupi projects, services, reports, or office information.');

  function ask() {
    if (!question.trim()) return;
    setReply(getConstituencyReply(question));
    setQuestion('');
  }

  if (!open) {
    return (
      <button className="chatbot-launch" onClick={() => setOpen(true)} aria-label="Open constituency AI desk">
        <Bot size={22} />
        <span>AI Desk</span>
      </button>
    );
  }

  return (
    <aside className="chatbot">
      <div className="chatbot-title">
        <Bot size={19} />
        <span>Constituency AI Desk</span>
        <button onClick={() => setOpen(false)} aria-label="Close AI desk">×</button>
      </div>
      <p>{reply}</p>
      <div className="chatbot-input">
        <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder={placeholder} />
        <button onClick={ask} aria-label="Ask chatbot">
          <Send size={17} />
        </button>
      </div>
    </aside>
  );
}
