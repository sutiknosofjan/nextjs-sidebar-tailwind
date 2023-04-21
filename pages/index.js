import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaPencilAlt, FaTimesCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div id="main" className="flex">
      <Sidebar />
      <div id="main-content" className="w-full h-screen">
        <Navbar />
        <div id="main-body" className="p-3 w-full mb-10">
          <h1 className="text-2xl font-semibold">Template NEXTo</h1>

          <div
            id="card-content"
            className=" shadow-md mt-5 p-3 border rounded-md"
          >
            Template simple <br />
            <ul className="list-disc list-inside">
              <li>NextJS 13</li>
              <li>Tailwind 3</li>
              <li>Daisy UI</li>
            </ul>
          </div>

          <div className="card shadow-md overflow-x-auto w-full bg-base-200 p-2 mt-3 rounded-md">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://daisyui.com/tailwind-css-component-profile-3@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Carroll Group
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Tax Accountant
                    </span>
                  </td>
                  <td>Red</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-2">
            {/* left */}
            <div className="card shadow-md overflow-x-auto w-full bg-base-200 p-2 mt-3 rounded-md">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Purple</td>
                    <td>
                      <button>
                        <FaPencilAlt />
                      </button>

                      <button>
                        <FaTimesCircle
                          size="20"
                          className="text-red-700 ml-2"
                        />
                      </button>
                    </td>
                  </tr>
                  {/* row 1 end */}

                  {/* row 2 */}
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Purple</td>
                    <td>
                      <button>
                        <FaPencilAlt />
                      </button>

                      <button>
                        <FaTimesCircle
                          size="20"
                          className="text-red-700 ml-2"
                        />
                      </button>
                    </td>
                  </tr>
                  {/* row 2 end */}
                </tbody>
              </table>
            </div>
            {/* end left */}

            {/* right */}
            <div className="card shadow-md overflow-x-auto w-full bg-base-200 p-2 mt-3 rounded-md">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Favorite Color</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Purple</td>
                    <td>
                      <button>
                        <FaPencilAlt />
                      </button>

                      <button>
                        <FaTimesCircle
                          size="20"
                          className="text-red-700 ml-2"
                        />
                      </button>
                    </td>
                  </tr>
                  {/* row 1 end */}

                  {/* row 2 */}
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Purple</td>
                    <td>
                      <button>
                        <FaPencilAlt />
                      </button>

                      <button>
                        <FaTimesCircle
                          size="20"
                          className="text-red-700 ml-2"
                        />
                      </button>
                    </td>
                  </tr>
                  {/* row 2 end */}
                </tbody>
              </table>
            </div>
            {/* end right */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
