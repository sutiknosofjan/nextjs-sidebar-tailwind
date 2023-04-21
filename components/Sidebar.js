import { useState } from "react";
import Link from "next/link";
import {
  BsArrowLeftShort,
  BsKey,
  BsShieldLock,
  BsShieldLockFill,
} from "react-icons/bs";
import {
  AiOutlineCluster,
  AiOutlineDash,
  AiOutlineForm,
  AiOutlineGateway,
  AiOutlineGroup,
  AiOutlineHome,
  AiOutlineKey,
  AiOutlineLock,
  AiOutlineNotification,
  AiOutlinePartition,
  AiOutlinePoweroff,
  AiOutlineShop,
  AiOutlineUser,
} from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const Menu = [
    {
      title: "Home",
      icon: <AiOutlineHome />,
      link: "/",
    },
    {
      title: "Pages",
      icon: <AiOutlineGroup />,
      link: "/pages",
    },
    {
      title: "News",
      icon: <AiOutlineNotification />,
      link: "/news",
    },
    {
      title: "Jobs",
      icon: <AiOutlineCluster />,
      link: "/jobs",
    },
    {
      title: "My Profile",
      icon: <AiOutlineUser />,
      link: "/profile",
      space: true,
    },
    {
      title: "Change Password",
      icon: <AiOutlineLock />,
      link: "/changepassword",
    },
    {
      title: "Change Pin",
      icon: <BsShieldLock />,
      link: "/changepin",
    },
    {
      title: "Logout",
      icon: <AiOutlinePoweroff />,
      link: "/logout",
    },
    {
      title: "My Pages",
      icon: <AiOutlineShop />,
      link: "/mypages",
      space: true,
    },
    {
      title: "My Resume",
      icon: <FaRegPaperPlane />,
      link: "/myresume",
    },
    {
      title: "My Posts",
      icon: <AiOutlineForm />,
      link: "/myposts",
    },
  ];

  return (
    <div
      id="box-sidebar"
      className={`bg-base-300 h-screen p-2 pt-3 ${
        open ? "w-72" : "w-[60px]"
      } relative`}
    >
      <BsArrowLeftShort
        id="toggle-sidebar-colapse"
        className={`bg-base-200 absolute -right-5 mt-1 text-3xl rounded-full cursor-pointer duration-1000 ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open && "rotate-180")}
      />

      <div id="box-brand" className="inline-flex">
        <SiNextdotjs
          className={`float-left bg-gray-500 text-white text-4xl rounded cursor-pointer p-2 mr-3 duration-1000 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`origin-left font-medium text-2xl duration-200 ${
            !open && "hidden"
          }`}
        >
          NEXTo
        </h1>
      </div>

      <div id="box-user" className="flex items-center gap-x-2 p-1.5 mt-1">
        <Link href="">
          <div className="avatar">
            <div className="w-8 rounded-full ring ring-slate-300 ring-offset-base-100 ring-offset-2">
              <img src="https://api.nexto.id/assets/users/648148cd7580e56113746ae6879fdf5e.jpg" />{" "}
            </div>
          </div>
          <div className={!open && "hidden"}>Sutikno</div>
        </Link>
      </div>

      <ul id="sidebar-menu1" className="mt-6">
        {Menu.map((menu, index) => (
          <li key={index} className={menu.space && "mt-6"}>
            <Link href={menu.link}>
              <div
                data-tip={menu.title}
                className={`flex items-center gap-x-2 cursor-pointer p-2 hover:bg-base-100 duration-100 rounded-md ${
                  !open && "tooltip tooltip-right tooltip-ascent"
                }`}
              >
                <span
                  className={`text-xl text-base-content p-1 px-auto block float-left`}
                >
                  {menu.icon}
                </span>
                <span
                  className={`text-base flex-1 duration-100 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
