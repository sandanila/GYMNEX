import React from 'react'
import Branding from './Branding';
import Welcome from './Welcome';
import GoogleSignIn from './GoogleSignIn';
import Email from './Email';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SignInButton from './SignInButton';
import SignUp from './SignUp';

function LoginPageLayout() {
  return (
    <>
      <div className="w-full min-h-screen">
        <section className="w-full min-h-screen">
            <div className="relative flex w-full min-h-screen overflow-hidden">

                {/* bg image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/image.jpeg')",
                    }}
                />

                {/* login form */}
                <div className="relative lg:w-1/2 z-10 w-full min-h-screen flex flex-col justify-center items-center px-6 py-8 md:px-8 lg:ml-auto">

                    <div className="w-full max-w-md border border-white/30 bg-black/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl">

                    <Branding/>

                    <Welcome/>

                    <GoogleSignIn/>

                    <Email text="or login with email" />

                    <EmailInput/>

                    <PasswordInput/>

                    <SignInButton/>

                    <SignUp/>
                    </div>

                </div>
            </div>
        </section>
      </div>
    </>
  );
}

export default LoginPageLayout
