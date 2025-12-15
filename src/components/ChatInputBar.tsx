import { useState, useEffect, useRef } from 'react'
import './ChatInputBar.css'

interface ChatInputBarProps {
  onSend?: (message: string) => void
  isLoading?: boolean
  hasMessages?: boolean
}

const ChatInputBar = ({ onSend, isLoading: externalLoading, hasMessages }: ChatInputBarProps) => {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [placeholder, setPlaceholder] = useState('')
  
  const phrasesRef = useRef([
    "Ask anything about our services"
  ])

  useEffect(() => {
    const phrases = phrasesRef.current
    const state = {
      currentPhraseIndex: 0,
      currentCharIndex: 0,
      isDeleting: false
    }
    let timeoutId: NodeJS.Timeout

    const typeText = () => {
      // Don't animate if user is typing
      if (inputValue) {
        setPlaceholder(phrases[0])
        return
      }

      const currentPhrase = phrases[state.currentPhraseIndex]
      let typingSpeed = 50

      if (state.isDeleting) {
        setPlaceholder(currentPhrase.substring(0, state.currentCharIndex - 1))
        state.currentCharIndex--
        typingSpeed = 30
      } else {
        setPlaceholder(currentPhrase.substring(0, state.currentCharIndex + 1))
        state.currentCharIndex++
        typingSpeed = 50
      }

      if (!state.isDeleting && state.currentCharIndex === currentPhrase.length) {
        typingSpeed = 2000 // Pause at end
        state.isDeleting = true
      } else if (state.isDeleting && state.currentCharIndex === 0) {
        state.isDeleting = false
        state.currentPhraseIndex = (state.currentPhraseIndex + 1) % phrases.length
        typingSpeed = 500 // Pause before next phrase
      }

      timeoutId = setTimeout(typeText, typingSpeed)
    }

    typeText()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [inputValue])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const message = inputValue
    const messageToSend = message
    setInputValue('')

    // If onSend callback is provided, use it (for chat container)
    if (onSend) {
      onSend(messageToSend)
      return
    }

    // Otherwise, use the old standalone behavior
    setIsLoading(true)

    try {
      const webhookUrl = 'https://n8n.srv954053.hstgr.cloud/webhook/prayog-search-ai'

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageToSend,
          conversationId: 'default',
        }),
      })

      // Check if response is ok
      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = `Request failed with status ${response.status}`
        try {
          const errorData = await response.text()
          if (errorData) {
            try {
              const errorJson = JSON.parse(errorData)
              errorMessage = errorJson.message || errorJson.error || errorMessage
            } catch {
              errorMessage = errorData || errorMessage
            }
          }
        } catch {
          // If we can't parse the error, use default message
        }
        throw new Error(errorMessage)
      }

      // Check if response has content and is JSON
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
      const data = await response.json()
        console.log('Search response:', data)
      // You can handle the response here or show a notification
      } else {
        // If response is not JSON, just log the text
        const text = await response.text()
        console.log('Search response (text):', text)
      }
    } catch (error) {
      // Log error details to console for debugging
      console.error('Search error:', error)
      
      if (error instanceof Error) {
        console.error('Error message:', error.message)
        
        // Check if it's a network/CORS error
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
          console.warn('Network error - webhook may not be accessible or CORS issue')
        }
      }
      
      // Don't show alert - handle errors silently
      // Errors are logged to console for debugging
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
      // Stop recording
      setIsRecording(false)
      // Here you would typically stop the recording and process the audio
      console.log('Stop recording')
    } else {
      // Start recording
      setIsRecording(true)
      // Here you would typically start the recording
      console.log('Start recording')
    }
  }



  return (
    <div className={`chat-input-bar-container ${hasMessages ? 'chat-input-bar-container-full' : ''}`}>
      <div className="chat-input-bar">
        <div className="input-wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
            placeholder=""
          className="chat-input-field"
            disabled={isLoading || externalLoading}
        />
          {!inputValue && (
            <span className="typewriter-placeholder">
              {placeholder || "Ask anything about our services"}
              <span className="typewriter-cursor">|</span>
            </span>
          )}
        </div>
          <button
          type="button"
          className="microphone-btn"
            onClick={handleMicrophoneClick}
            disabled={isLoading}
          aria-label={isRecording ? "Stop recording" : "Start recording"}
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mic-icon"
            fill="none"
              viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
              d="M12 3.75a2.25 2.25 0 00-2.25 2.25v5.25a2.25 2.25 0 104.5 0V6A2.25 2.25 0 0012 3.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
              d="M19.5 10.5a7.5 7.5 0 01-15 0M12 18v2.25"
              />
            </svg>
          </button>
          <button
          type="button"
            className="send-btn"
            onClick={handleSend}
          disabled={(isLoading || externalLoading) || !inputValue.trim()}
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="send-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5 21 12 4.5 4.5 6 11l8.25 1-8.25 1z"
              />
            </svg>
          </button>
        </div>
    </div>
  )
}

export default ChatInputBar

