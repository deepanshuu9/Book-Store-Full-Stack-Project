import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div>
            <form method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Contact Us</h3>
              <div className="mt-4 space-y-2 ">
                <span>Name</span>
                <br />
                <input
                  className="w-80 py-1 px-3 border rounded-md outline-none"
                  type="text"
                  placeholder="Enter your name"
                />
                <br />
              </div>
              <div className="mt-4 space-y-2 ">
                <span>Email</span>
                <br />
                <input
                  className="w-80 py-1 px-3 border rounded-md outline-none"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <input
                  className="input input-bordered input-lg w-full max-w-xs"
                  type="text"
                  placeholder="Type your message"
                />
                <br />
              </div>
              <div className="mt-4">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
