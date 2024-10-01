import React, { useState } from "react";

function Contact() {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [toEmail, setToEmail] = useState("");

  const taxtareadChangeHandler = (e) => {
    setMsg(e.target.value);
  };

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  const emailInputHandler = (e) => {
    setToEmail(e.target.value);
  };

  // Function to create mailto link
  const createMailtoLink = () => {
    const subject = encodeURIComponent("WebContact");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${toEmail}\nMessage: ${msg}`
    );
    return `mailto:axiominfosys9@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Contact Us
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent form submission
              window.location.href = createMailtoLink(); // Open mailto link
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={nameInputHandler}
                  required
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={emailInputHandler}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  rows={5}
                  cols={40}
                  name="message"
                  id="message"
                  onChange={taxtareadChangeHandler}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
