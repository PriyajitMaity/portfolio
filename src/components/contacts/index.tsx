import data from "@/assets/data/data";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="lg:px-16">
      <h1 className="mt-10 mb-8 text-3xl text-center">
        Let's get in touch: <span className="text-blue-900 font-bold">Ways to Connect with Me</span>
      </h1>
      <p>
        Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If
        you have a specific question or comment, please feel free to email me directly at{" "}
        <span className="bg-gradient-to-r from-red-600  via-yellow-400 to-blue-500 text-transparent bg-clip-text">
          info.priyajit0270@gmail.com
        </span>
        . I make an effort to respond to all messages within 24 hours, although it may take me longer during busy
        periods. Finally, if you prefer to connect on social media, you can connect with me using the social media links
        below.
      </p>
      <div className="mt-10 flex flex-col gap-4">
        <a href={data.socials.github} className="flex items-center gap-8 text-l md:text-xl">
          <FaGithub size={26} />
          for more projects
        </a>
        <a href={data.socials.linkedin} className="flex items-center gap-8 text-l md:text-xl">
          <FaLinkedin size={26} className="text-blue-500" />
          Follow on LinkedIn
        </a>
        <a href={data.socials.instagram} className="flex items-center gap-8 text-l md:text-xl">
          <FaInstagram size={26} className="text-pink-600" />
          Follow on Instagram
        </a>
        <a href="https://web.whatsapp.com" className="flex items-center gap-8 text-l md:text-xl">
          <FaWhatsapp size={26} className="text-green-400" />
          say Hi, on +91-8617845507
        </a>
        <a href={data.socials.facebook} className="flex items-center gap-8 text-l md:text-xl">
          <FaFacebook size={26} className="text-blue-500" />
          send request on, Facebook
        </a>
      </div>
    </section>
  );
};

export default Contact;
