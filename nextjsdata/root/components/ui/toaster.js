'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'

let toasts = []
let toastId = 0

export function toast(message, type = 'info') {
  const id = toastId++
  const newToast = { id, message, type }
  toasts.push(newToast)
  
  // Trigger re-render
  window.dispatchEvent(new CustomEvent('toast-added', { detail: newToast }))
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    toasts = toasts.filter(t => t.id !== id)
    window.dispatchEvent(new CustomEvent('toast-removed', { detail: { id } }))
  }, 5000)
}

export function Toaster() {
  const [currentToasts, setCurrentToasts] = useState([])

  useEffect(() => {
    const handleToastAdded = () => {
      setCurrentToasts([...toasts])
    }

    const handleToastRemoved = () => {
      setCurrentToasts([...toasts])
    }

    window.addEventListener('toast-added', handleToastAdded)
    window.addEventListener('toast-removed', handleToastRemoved)

    return () => {
      window.removeEventListener('toast-added', handleToastAdded)
      window.removeEventListener('toast-removed', handleToastRemoved)
    }
  }, [])

  const removeToast = (id) => {
    toasts = toasts.filter(t => t.id !== id)
    setCurrentToasts([...toasts])
  }

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  const getBgColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200'
      case 'error':
        return 'bg-red-50 border-red-200'
      case 'warning':
        return 'bg-yellow-50 border-yellow-200'
      default:
        return 'bg-blue-50 border-blue-200'
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {currentToasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 300, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.9 }}
            className={`flex items-center p-4 rounded-lg border shadow-lg min-w-80 ${getBgColor(toast.type)}`}
          >
            {getIcon(toast.type)}
            <span className="ml-3 text-sm text-gray-800 flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-3 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}