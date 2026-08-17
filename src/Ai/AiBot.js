import React, { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../Ai/AiBot.css";

const AIAssistant = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hello! I'm your EGPS AI Assistant. How can I help you today?",
        },
    ]);

    const sendMessage = async () => {
        if (!message.trim() || loading) return;

        const userMessage = message.trim();

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage,
            },
        ]);

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:11434/api/chat",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        model: "llama3.2",
                        stream: false,
                        messages: [
                            {
                                role: "system",
                                content: `
You are the EGPS website AI Assistant.

Help users with questions about:
- EGPS
- Retirement Plan Design
- Retirement Plan Compliance
- 3(16) Fiduciary Services
- Advisor Partnership
- Employers
- Advisors
- TPAs
- Recordkeepers
- Company services
- Careers
- Contact information

Be professional, concise, and helpful.

If you do not know something, do not invent an answer.
                                `,
                            },
                            ...messages,
                            {
                                role: "user",
                                content: userMessage,
                            },
                        ],
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Ollama request failed");
            }

            const data = await response.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        data?.message?.content ||
                        "Sorry, I couldn't generate a response.",
                },
            ]);
        } catch (error) {
            console.error("Ollama error:", error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "Unable to connect to the AI Assistant. Please make sure Ollama is running.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <>
            {/* AI Button */}
            <button
                className="ai-assistant-button"
                onClick={() => setOpen(!open)}
                aria-label="Open AI Assistant"
            >
                {open ? <FaTimes /> : <FaRobot />}
            </button>

            {/* Chat Window */}
            {open && (
                <div className="ai-chat-window">

                    {/* Header */}
                    <div className="ai-chat-header">
                        <div>
                            <FaRobot />
                            <div>
                                <strong>EGPS AI Assistant</strong>
                                <span>Powered by Ollama</span>
                            </div>
                        </div>

                        <button onClick={() => setOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="ai-chat-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`ai-message ${
                                    msg.role === "user"
                                        ? "user-message"
                                        : "bot-message"
                                }`}
                            >
                                {msg.content}
                            </div>
                        ))}

                        {loading && (
                            <div className="ai-message bot-message">
                                Thinking...
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="ai-chat-input">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={loading}
                        />

                        <button
                            onClick={sendMessage}
                            disabled={loading || !message.trim()}
                        >
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AIAssistant;