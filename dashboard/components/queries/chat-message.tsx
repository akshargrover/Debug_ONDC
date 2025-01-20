interface ChatMessageProps {
  sender: string
  message: string
  time: string
  avatar: string
  isUser?: boolean
}

export function ChatMessage({ sender, message, time, avatar, isUser = false }: ChatMessageProps) {
  return (
    <div className={`flex gap-4 mb-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <img src={avatar} alt={sender} className="h-full w-full object-cover" />
      </div>
      <div className={`flex flex-col ${isUser ? 'items-end' : ''}`}>
        <div className={`max-w-md p-3 rounded-2xl ${
          isUser ? 'bg-blue-600 text-white' : 'bg-gray-100'
        }`}>
          <p>{message}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1">{time}</span>
      </div>
    </div>
  )
} 