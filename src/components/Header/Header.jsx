import svg from "../../assets/image 20.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="fixed w-full bg-dark z-[9999]">
      <div className="hidden lg:block">
        <main className="flex justify-between items-center w-[85%] mx-auto h-[80px] text-white">
          <div>
            <Link className="flex items-center" to={"/"}>
              <img src={svg} alt="logo" />
              <h1 className="text-3xl font-medium pl-2">Flexa</h1>
            </Link>
          </div>
          <nav>
            <ul className="flex">
              <li>
                <Link className="ml-[45px]" to={"/services"}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="ml-[45px]" to={"#"}>
                  How it Works
                </Link>
              </li>
              <li>
                <Link className="ml-[45px]" to={"/about"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="ml-[45px]" to={"/faq"}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <Link className="px-9 py-[13px]" to={"/sign-in"}>
              Sign in
            </Link>
            <Link
              to={"/create"}
              className="px-9 bg-white text-dark py-[13px] rounded-lg"
            >
              Sign up
            </Link>
          </div>
        </main>
      </div>

      <div className="block lg:hidden">
        <main className="flex justify-between items-center w-[85%] mx-auto h-[80px] text-white">
          <div>
            <Link className="flex items-center" to={"/"}>
              <img src={svg} alt="logo" />
              <h1 className="text-3xl font-medium pl-2">Flexa</h1>
            </Link>
          </div>
          <div className="cursor-pointer text-2xl" onClick={handleClick}>
            {toggle ? <IoMdClose /> : <MdOutlineMenu />}
          </div>
        </main>

        {toggle && (
          <nav className="bg-dark text-white">
            <ul className="flex flex-col items-center">
              <li className="py-2">
                <Link to={"/services"}>Services</Link>
              </li>
              <li className="py-2">
                <Link to={"#"}>How it Works</Link>
              </li>
              <li className="py-2">
                <Link to={"/about"}>About Us</Link>
              </li>
              <li className="py-2">
                <Link to={"/faq"}>FAQ</Link>
              </li>
              <li className="py-2">
                <Link to={"/sign-in"}>Sign in</Link>
              </li>
              {/* <li className="py-2">
                <Link
                  to={"/create"}
                  className="bg-white text-dark py-[13px] px-[30px] rounded-lg"
                >
                  Sign up
                </Link>
              </li> */}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Header;
