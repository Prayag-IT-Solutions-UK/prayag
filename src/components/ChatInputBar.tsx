import { useState } from 'react'
import './ChatInputBar.css'

const ChatInputBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isRecording, setIsRecording] = useState(false)

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const message = inputValue
    setInputValue('')
    setIsLoading(true)

    try {
      // Replace with your n8n webhook URL
      const n8nWebhookUrl =
        import.meta.env.VITE_N8N_WEBHOOK_URL ||
        'https://your-n8n-instance.com/webhook/chat'

      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          conversationId: 'default',
        }),
      })

      const data = await response.json()
      // You can handle the response here or show a notification
      console.log('Chat response:', data)
    } catch (error) {
      console.error('Chat error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleMicrophoneClick = () => {
    if (isRecording) {
      // Stop recording logic can be added here
      setIsRecording(false)
    } else {
      // Start recording logic can be added here
      setIsRecording(true)
    }
  }

  return (
    <div className="chat-input-bar-container">
      <div className="chat-input-bar">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about websites, mobile apps, AI automation..."
          className="chat-input-field"
          disabled={isLoading}
        />
        <div className="chat-input-actions">
          <button
            className="voice-btn"
            onClick={handleMicrophoneClick}
            disabled={isLoading}
            aria-label={isRecording ? 'Stop recording' : 'Start recording'}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill={isRecording ? 'currentColor' : 'none'}
              />
              <path
                d="M19 10V12C19 15.87 15.87 19 12 19M5 10V12C5 15.87 8.13 19 12 19M12 19V23M8 23H16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="send-btn"
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
            aria-label="Send message"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="chat-disclaimer">
        AI can make mistakes. Let's discuss your project requirements.
      </p>
    </div>
  )
}

export default ChatInputBar

