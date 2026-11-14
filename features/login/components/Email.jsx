import React from 'react'

function Email({ text }) {
  return (
    <>
      <div className="w-full flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

        <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            {text}
        </span>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>

      </div>
    </>
  )
}

export default Email
