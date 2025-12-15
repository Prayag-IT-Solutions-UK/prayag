import { useState, useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage'
import ChatInputBar from './ChatInputBar'
import './ChatInputBar.css'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface ChatContainerProps {
  onMessagesChange?: (messageCount: number) => void
  hasMessages?: boolean
}

const ChatContainer = ({ onMessagesChange, hasMessages }: ChatContainerProps) => {
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current
      // Smooth scroll to bottom within the container only (not the whole page)
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    // Notify parent about message count changes
    if (onMessagesChange) {
      onMessagesChange(messages.length)
    }
  }, [messages, onMessagesChange])

  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      scrollToBottom()
    }, 100)
    return () => clearTimeout(timer)
  }, [messages, isLoading])

  const handleSend = async (messageText: string) => {
    if (!messageText.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const webhookUrl = 'https://n8n.srv954053.hstgr.cloud/webhook/prayog-search-ai'

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          conversationId: 'default',
        }),
      })

      let aiResponseText = ''

      if (response.ok) {
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json()
          // Extract text from response - check common response properties
          aiResponseText =
            data.output ||           // Check for 'output' property
            data.response ||         // Check for 'response' property
            data.message ||          // Check for 'message' property
            data.text ||             // Check for 'text' property
            data.answer ||           // Check for 'answer' property
            data.content ||          // Check for 'content' property
            (typeof data === 'string' ? data : 'Thank you for your message. I received your request.')
        } else {
          const text = await response.text()
          aiResponseText = text || 'Thank you for your message. I received your request.'
        }
      } else {
        aiResponseText =
          'I apologize, but I encountered an error processing your request. Please try again.'
      }

      // Add AI response
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error('Chat error:', error)

      // Add error message as AI response
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I apologize, but I encountered an error processing your request. Please try again later.',
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`chat-container ${hasMessages ? 'chat-container-full' : ''}`}>
      <div className={`chat-messages ${hasMessages ? 'chat-messages-full' : ''}`} ref={messagesContainerRef}>
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        {isLoading && (
          <div className="loading-indicator">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInputBar onSend={handleSend} isLoading={isLoading} hasMessages={hasMessages} />
    </div>
  )
}

export default ChatContainer

