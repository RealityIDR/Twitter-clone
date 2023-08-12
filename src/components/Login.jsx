import Image from "next/image";
import { signIn } from "next-auth/react";

function Login({ providers }) {

  const handleSignIn = (e, providerId) => {
    e.preventDefault()
    if (providerId === 'credentials') {
      signIn(providerId, {
        email: 'john@gmail.com',
        password: '1234',
        redirect: false
      })
      
    }
    else {
      signIn(providerId, { callbackUrl: "/" })
    }
  }

  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <Image
        src="/twitter-icon.png"
        width={150}
        height={150}
        style={{ objectFit: "contain" }}
        alt=""
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div className="mb-10 flex justify-center" key={provider.name}>
            {/* https://devdojo.com/tailwindcss/buttons#_ */}
            <button
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              onClick={(e) => handleSignIn(e, provider.id)}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                {provider.name === 'Credentials' ? 'Sign in using Test Account' : `Sign in with ${provider.name}`}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
