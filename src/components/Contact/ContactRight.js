import React, { useState } from "react";

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Email is required!");
    } else if (!emailValidation.test(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please Enter Your Subject!");
    } else if (message === "") {
      setErrMsg("Message is Required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Message has been sent Successfully`
      );
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrMsg("");
    }
  };

  return (
    <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-4 lgl:p-8 rounded-lg flex flex-col gap-8">
      <form className="w-full flex flex-col gap-4 lgl:gap-6 lgl:py-4 py-2">
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <div className="w-full flex flex-col lgl:flex-row gap-10">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              YOUR NAME
            </p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className={`${
                errMsg === "Username is required!" && "outline-designColor"
              } contactInput`}
              type="text"
              value={username}
            />
          </div>

          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={`${
                errMsg === "Phone number is required!" && "outline-designColor"
              } contactInput`}
              type="number"
              value={phoneNumber}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              errMsg === "Email is required!" && "outline-designColor"
            } contactInput`}
            type="email"
            value={email}
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            className={`${
              errMsg === "Please Enter Your Subject!" && "outline-designColor"
            } contactInput`}
            type="text"
            value={subject}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Message
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            cols="30"
            rows="8"
            className={`${
              errMsg === "Message is Required!" && "outline-designColor"
            } contactTextArea`}
            value={message}
          />
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            className="w-full h-12 rounded-lg bg-[#141518] text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactRight;
