import React, { useState, useEffect, useRef } from "react";
import Header from "../Local Components/Header1.js";
import ITSNavbar from "../Local Components/Navbar1.js";
import Footer from "../Local Components/Footer1.js";
import { io } from "socket.io-client";
import { v4 as uuid } from "uuid";
import "./Chat.css";

const SOCKET_URL = "http://localhost:5001";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [connected, setConnected] = useState(false);
    const [chatID] = useState(() => uuid());
    const socketRef = useRef(null);
    const messagesEndRef = useRef(null);

    // Helpdesk support chatID (in a real app this would come from staff assignment)
    const SUPPORT_CHAT_ID = "helpdesk-support";

    useEffect(() => {
        // Connect to socket server
        const socket = io(SOCKET_URL, {
            query: { chatID },
        });

        socketRef.current = socket;

        socket.on("connect", () => {
            setConnected(true);
            setMessages((prev) => [
                ...prev,
                {
                    id: uuid(),
                    type: "system",
                    content: "Connected to IT Helpdesk Chat",
                    time: new Date(),
                },
            ]);

            // Auto-welcome message after a short delay
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    {
                        id: uuid(),
                        type: "received",
                        content:
                            "Welcome to Ramapo College IT Helpdesk! 👋 How can we help you today?",
                        senderChatID: SUPPORT_CHAT_ID,
                        time: new Date(),
                    },
                ]);
            }, 1000);
        });

        socket.on("disconnect", () => {
            setConnected(false);
            setMessages((prev) => [
                ...prev,
                {
                    id: uuid(),
                    type: "system",
                    content: "Disconnected from chat",
                    time: new Date(),
                },
            ]);
        });

        socket.on("receive_message", (data) => {
            setMessages((prev) => [
                ...prev,
                {
                    id: uuid(),
                    type: "received",
                    content: data.content,
                    senderChatID: data.senderChatID,
                    time: new Date(),
                },
            ]);
        });

        return () => {
            socket.disconnect();
        };
    }, [chatID]);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (!input.trim() || !socketRef.current) return;

        const message = {
            receiverChatID: SUPPORT_CHAT_ID,
            senderChatID: chatID,
            content: input.trim(),
        };

        socketRef.current.emit("send_message", message);

        setMessages((prev) => [
            ...prev,
            {
                id: uuid(),
                type: "sent",
                content: input.trim(),
                senderChatID: chatID,
                time: new Date(),
            },
        ]);

        setInput("");
    };

    const formatTime = (date) => {
        return new Date(date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="chat-page">
            <Header />
            <ITSNavbar />

            <div className="chat-container">
                {/* Chat Header */}
                <div className="chat-header">
                    <div className="chat-header-icon">💬</div>
                    <div className="chat-header-text">
                        <h2>IT Helpdesk Live Chat</h2>
                        <div className="chat-status">
                            <span
                                className="dot"
                                style={{ background: connected ? "#4caf50" : "#f44336" }}
                            ></span>
                            {connected ? "Online" : "Connecting..."}
                        </div>
                    </div>
                </div>

                {/* Info Bar */}
                <div className="chat-info-bar">
                    ℹ️ Chat with our IT support team for real-time technical assistance.
                </div>

                {/* Messages Area */}
                <div className="chat-messages">
                    {messages.length === 0 && (
                        <div className="chat-empty">
                            <div className="chat-empty-icon">💬</div>
                            <p>Start a conversation with IT Support</p>
                        </div>
                    )}

                    {messages.map((msg) => {
                        if (msg.type === "system") {
                            return (
                                <div key={msg.id} className="system-message">
                                    {msg.content}
                                </div>
                            );
                        }
                        return (
                            <div key={msg.id} className={`message-row ${msg.type}`}>
                                <div className="message-avatar">
                                    {msg.type === "sent" ? "You" : "IT"}
                                </div>
                                <div>
                                    <div className="message-bubble">{msg.content}</div>
                                    <div className="message-time">{formatTime(msg.time)}</div>
                                </div>
                            </div>
                        );
                    })}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form className="chat-input-area" onSubmit={sendMessage}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        disabled={!connected}
                    />
                    <button
                        type="submit"
                        className="chat-send-btn"
                        disabled={!connected || !input.trim()}
                    >
                        ➤
                    </button>
                </form>
            </div>

            <Footer />
        </div>
    );
}
