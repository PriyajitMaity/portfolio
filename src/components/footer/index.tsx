import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="my-8 px-10">
      <hr />
      <div className="flex justify-between px-12  mt-8">
        <p className="text-center text-l">© 2024 Priyajit Maity. All Rights Reserved</p>
        <button className="flex items-center gap-2" onClick={() => scrollToTop()}>
          <FaArrowCircleUp />
          top
        </button>
      </div>
    </div>
  );
};

export default Footer;
