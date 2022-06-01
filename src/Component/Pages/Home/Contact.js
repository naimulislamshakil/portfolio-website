import React, { useState } from "react";
import { send } from "emailjs-com";
import { toast } from "react-toastify";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const formSubmit = (event) => {
    event.preventDefault();

    send(
      "service_dhnbpha",
      "template_m5aap6l",
      { name, email, subject, message },
      "Fkc4kg1aVX_E4HE2u"
    ).then((res) => {
      if (res.status === 200) {
        toast.success("Email Send Successfull.");
      }
    });

    event.target.reset();
  };

  return (
    <div className="mt-5" id="contact">
      <div class="divider"></div>
      <div className="text-center">
        <h2 className="font-bold text-accent text-2xl">Contact Us</h2>
      </div>
      <div class="divider"></div>
      <div>
        <div class="flex items-center justify-center py-5 bg-gray-200">
          <div class="w-full px-6 py-16 bg-white rounded-lg shadow-xl lg:w-2/5">
            <form onSubmit={formSubmit} class="mx-8 space-y-4">
              <div>
                <input
                  type="name"
                  onBlur={(e) => setName(e.target.value)}
                  class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  onBlur={(e) => setEmail(e.target.value)}
                  class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  onBlur={(e) => setSubject(e.target.value)}
                  class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  onBlur={(e) => setMessage(e.target.value)}
                  class="w-full p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none opacity-50 focus:border-blue-400"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <input
                type="submit"
                value="Send Massage"
                class="block w-full px-2 py-4 mt-2 btn btn-outline btn-success rounded-full"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
