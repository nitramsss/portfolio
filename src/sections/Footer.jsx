import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-center sm:justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 sm:flex-row">
        <div className="flex gap-3 justify-center">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.icon}
                className="w-5 h-5 bg-white"
                alt={social.name}
              />
            </a>
          ))}
        </div>
        <p className="max-xl:text-[10px]">
          fitzjaymarjudedmartin@iskolarngbayan.pup.edu.ph
        </p>
      </div>
      <p>© nitramsss. All rights reserved.</p>
    </section>
  );
};

export default Footer;
