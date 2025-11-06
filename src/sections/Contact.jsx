import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import Particles from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    console.log(alertType);
    console.log(showAlert);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const scrollBack = () => {
    setTimeout(() => {
      const section = document.getElementById("contact");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_jpqj8ml",
        "template_kpk6ap4",
        {
          from_name: formData.name,
          to_name: "Jude",
          from_email: formData.email,
          to_email: "jude.nitram08@gmail.com",
          message: formData.message,
        },
        "7f45MyjPQo_KdKJh-"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You're message has been sent!");
      scrollBack();
    } catch (err) {
      setIsLoading(false);
      console.error(err);
      showAlertMessage("danger", "Something went wrong!");
      scrollBack();
    }

    // service_jpqj8ml
    // template_kpk6ap4
  };

  return (
    <div
      className="pb-50 w-full justify-center items-center relative mask-t-from-90% mask-b-from-90% bg-black/70"
      id="contact"
    >
      <div
        style={{ width: "100%", height: "600px", position: "relative" }}
        className="items-center justify-center flex align-middle absolute inset-0 bg-black/70"
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <section className="absolute inset-0 mx-auto max-w-full bg-black/50 px-10 mask-t-from-90% mask-b-from-90% py-20 z-20">
        {showAlert && <Alert type={alertType} text={alertMessage} />}
        <div className="mx-auto max-w-3xl flex flex-col justify-center inset-shadow-white-500 px-5 py-10 border border-white/10 rounded-md">
          <h1 className="text-2xl font-bold mb-3 md:text-center md:text-4xl">
            Let's Talk
          </h1>
          <p className="text-sm text-justify mb-5 md:text-center md:px-30 md:text-xl">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help!
          </p>
          <form
            className="gap-3 flex flex-col md:px-10"
            onSubmit={handleSubmit}
          >
            <div>
              <p>Name</p>
              <input
                type="text"
                placeholder="Juan Dela Cruz"
                value={formData.name}
                name="name"
                onChange={handleChange}
                required
                className="field-input field-input-focus"
              />
            </div>
            <div>
              <p>Email</p>
              <input
                type="email"
                placeholder="juandelacruz@gmail.com"
                value={formData.email}
                name="email"
                onChange={handleChange}
                required
                className="field-input field-input-focus"
              />
            </div>
            <div>
              <p>Message</p>
              <textarea
                type="text"
                value={formData.message}
                name="message"
                onChange={handleChange}
                required
                className="field-input field-input-focus h-25"
              />
            </div>
            <div className="items-center justify-center flex">
              <button
                type="submit"
                className="cursor-pointer bg-indigo-500 hover:bg-indigo-400 shadow-lg shadow-indigo-500/50 px-8 py-1 text-lg font-bold rounded-lg"
              >
                {!isLoading ? "Send" : "Sending..."}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
