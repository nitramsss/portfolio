import React from "react";

const Contact = () => {
  return (
    <section className="mx-auto max-w-full bg-black/50 px-10 mask-t-from-90% mask-b-from-90% py-20" id="contact">
      <div className="mx-auto max-w-3xl flex flex-col justify-center inset-shadow-white-500 px-5 py-10 border border-white/10 rounded-md">
        <h1 className="text-2xl font-bold mb-3 md:text-center md:text-4xl">Let's Talk</h1>
        <p className="text-sm text-justify mb-5 md:text-center md:px-30 md:text-xl">
          Whether you're looking to build a new website, improve your existing
          platform, or bring a unique project to life, I'm here to help!
        </p>
        <form className="gap-3 flex flex-col md:px-10">
          <div>
            <p>Name</p>
            <input
              type="text"
              placeholder="Juan Dela Cruz"
              className="field-input field-input-focus"
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              placeholder="juandelacruz@gmail.com"
              className="field-input field-input-focus"
            />
          </div>
          <div>
            <p>Message</p>
            <textarea type="text" className="field-input field-input-focus h-25" />
          </div>
          <div className="items-center justify-center flex">
            <input
              type="submit"
              value="Send"
              className="cursor-pointer bg-indigo-500 shadow-lg shadow-indigo-500/50 px-8 py-1 text-lg font-bold rounded-lg"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
