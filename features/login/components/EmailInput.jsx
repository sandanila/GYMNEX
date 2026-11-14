import React from 'react'

function EmailInput() {
  return (
    <>
      <div className="w-full mt-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          htmlFor="email"
        >
            Email Address
        </label>

        <input
          id="email"
          name="email"
          placeholder="Enter your email"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
        />

      </div>
    </>
  );
}

export default EmailInput
