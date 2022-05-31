import React from "react";

const Contact = () => {
  return (
    <div className="mt-5">
      <div class="divider"></div>
      <div className="text-center">
        <h2 className="font-bold text-accent text-2xl">Contact Us</h2>
      </div>
      <div class="divider"></div>
      <div>
        <div class="flex items-center justify-center py-5 bg-gray-200">
          <div class="w-full px-6 py-16 bg-white rounded-lg shadow-xl lg:w-2/5">
            <form class="mx-8 space-y-4">
              <div>
                <input
                  type="text"
                  class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  class="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  class="w-full p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none opacity-50 focus:border-blue-400"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button class="block w-full px-2 py-4 mt-2 btn btn-outline btn-success rounded-full">
                Send Massage
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
