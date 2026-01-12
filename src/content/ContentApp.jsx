import React, { useState } from 'react'

const ContentApp = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-5 bg-white right-5 z-[9999]">
      <button 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close UI' : 'Open Rimon UI'}
      </button>
      
      {isOpen && (
        <div className="mt-4 p-6  border border-gray-200 rounded-lg shadow-xl w-64 text-gray-800">
          <h3 className="text-lg font-bold mb-2 text-indigo-600">Hello Rimon Sir!</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            This is now styled with Tailwind CSS inside the Shadow DOM!
          </p>
        </div>
      )}
    </div>
  )
}

export default ContentApp