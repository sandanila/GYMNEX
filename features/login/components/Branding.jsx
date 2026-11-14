import React from 'react'
import Image from 'next/image'

function Branding() {
  return (
    <>
      <div className="w-full flex justify-center">
        <Image
            className="w-auto h-16 object-contain mx-auto"
            src="/logo.png"
            width={250}
            height={250}
            alt="GYMNEX Logo"
            loading="eager"
        />
      </div>
    </>
  )
}

export default Branding
