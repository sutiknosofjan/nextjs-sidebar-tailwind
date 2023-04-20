import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown, BsSearch, BsDashSquareFill, BsFill1SquareFill, BsFillImageFill, BsPower, BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si"

export default function Home() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const [_search, setSearch] = useState("")

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <BsFill1SquareFill /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Project",
      icon: <BsReverseLayoutSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ]
    },
    { title: "Logout", icon: <BsPower /> },
  ];

  return (
    <div id="main" className="flex">
      <div id="box-sidebar" className={` bg-gray-800 text-white h-screen p-5 pt-3 sm:"w-20" ${open ? "w-60" : "w-20"} duration-200 relative`}>
        <BsArrowLeftShort id="toggle-sidebar-colapse" className={`bg-gray-500 text-gray-300 text-3xl rounded-full absolute -right-3 cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open && "rotate-180")} />

        <div id="box-brand" className="inline-flex ">
          <SiNextdotjs className={` bg-gray-500 text-white text-4xl rounded cursor-pointer float-left p-1 mr-3 duration-200 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white origin-left font-medium text-2xl duration-200 ${!open && "scale-0"}`}>
            NEXTo
          </h1>
        </div>

        <div id="box-search" className={`flex item-center bg-gray-600 rounded-md mt-6 py-2 ${!open ? "px-3" : "px-5"}`}>
          <BsSearch className={`text-gray-900 text-md block float-left cursor-pointer duration-200 ${open && "mt-1 mr-2"}`} />
          <input type="text" value={_search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className={`text-base text-gray-300 bg-transparent w-full outline-none duration-200 ${!open && "hidden"}`} />
        </div>

        <ul id="sidebar-menu" className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 hover:text-white duration-100 rounded-md ${menu.spacing ? "mt-8" : "mt-1"}`} onClick={() => setSubmenuOpen(!submenuOpen)}>
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <BsDashSquareFill />}
                </span>
                <span className={`text-base flex-1 duration-100 ${!open && "hidden"}`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown className={`${submenuOpen && "rotate-180"}`} />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul id="sidebar-submenu">
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-700 hover:text-white rounded-md">
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>

      <div id="content" className="w-full h-screen">
        <div id="navbar" className="bg-gray-500 text-white font-semibold p-4 border-bottom">
          menuNav1
        </div>

        <div id="content-body" className="p-3 w-full mb-10">
          <h1 className="text-2xl font-semibold">title: Home Page</h1>

          <div className="shadow-md w-full mt-5 p-3 border rounded-xl">
            content : lorem lorem lorem lorem lorem lorem lorem<br />
            lorem lorem lorem lorem lorem lorem lorem lorem<br />
            lorem lorem lorem lorem lorem lorem lorem lorem<br />
            lorem lorem lorem lorem lorem lorem lorem lorem<br />
            lorem lorem lorem lorem lorem lorem lorem lorem<br />
          </div>
        </div>

        <div id="footer" className="bg-gray-200 text-gray-500 text-xs p-3 text-right">
          Copyright nexto.id &copy;2023
        </div>

      </div>
    </div>
  )
}
