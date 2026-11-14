import React from 'react';
import Link from 'next/link';

function SignUp() {
  return (
    <>
      <div className="w-full mt-4 text-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link
          href="/signUp"
          className="text-blue-400 font-semibold hover:underline"
          >
          Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUp
