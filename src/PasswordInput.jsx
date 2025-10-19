import { useState } from "react";

const PasswordInput = () => {
  const [password, setpassword] = useState("");

  const passwordGenerate = ()=>{
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 16;
    let pass = "";
    for (let i = 0; i <= passwordLength; i++){
      let randomPassword = Math.floor(Math.random() * chars.length);
      let randomChar = chars.charAt(randomPassword);
      pass = pass + randomChar;
      setpassword(pass);
    }
  }

  const coptToClipboard = () =>{
    navigator.clipboard.writeText(password);
    alert("Password Copied to Clipboard!");
  }
  
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 p-4">
        <h1 className="text-2xl font-bold mb-4">Password Generator</h1>

        <div className="flex items-center border rounded-lg overflow-hidden bg-white shadow-md">

          <input type="text" className="px-4 py-2 w-64 focus:outline-none" value={password} placeholder="Your password will appear here" readOnly/>

          <button className="bg-gray-400 hover:bg-gray-800 hover:text-white text-black px-4 py-2 font-semibold cursor-pointer" onClick={coptToClipboard}>Copy</button>

        </div>

        <button className="mt-4 bg-gray-400 hover:bg-gray-800 hover:text-white text-black px-6 py-2 rounded-lg font-semibold cursor-pointer" onClick={passwordGenerate}>Generate Password</button>
      </div>
    </>
  )
}

export default PasswordInput;