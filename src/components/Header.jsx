import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import tivanLogo from "../assets/tivan-icon.webp";
import Switcher from "./Switcher";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div>
      <Disclosure as="nav" className="dark:bg-gray-800 bg-[#d2ae6d]">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  {userInfo ? (
                    <>
                      <span className="ml-2">
                        <Switcher />
                      </span>
                    </>
                  ) : (
                    <>
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white dark:hover:bg-gray-700 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </>
                  )}
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src={tivanLogo}
                      alt="Your Company"
                    />
                    <h2 className="text-3xl text-white ml-2">
                      <Link to="/">Tivan</Link>
                    </h2>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className=" sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {/* <span className="sm:block hidden">
                        <Switcher />
                      </span> */}

                      {userInfo ? (
                        <>
                          {" "}
                          <span className="hidden lg:block">
                            {" "}
                            <Switcher />
                          </span>
                          <Menu as="div" className="relative ml-3">
                            <div>
                              <Menu.Button className="flex rounded-full dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 darkfocus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <UserCircleIcon className="h-8 text-white" />
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  {({ active }) => (
                                    <p
                                      to="/profile"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700 border-b-2"
                                      )}
                                    >
                                      {userInfo.name}
                                    </p>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/mycollections"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      My collections
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/create"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Create collection
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/settings"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Settings
                                    </Link>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <Link
                                      to="/logout"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                      onClick={logoutHandler}
                                    >
                                      Log out
                                    </Link>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Switcher />
                          <Link
                            to="/login"
                            className="bg-white text-[#d2ae6d] dark:text-gray-900 hover:bg-gray-50  dark:hover:bg-gray-700 dark:hover:text-white rounded-md px-3 py-2 text-sm font-medium hidden lg:block"
                          >
                            Log In
                          </Link>
                          <Link
                            to="/register"
                            className="bg-white text-[#d2ae6d] dark:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-700 dark:hover:text-white rounded-md px-3 py-2 text-sm font-medium hidden lg:block"
                          >
                            SignUp
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {userInfo ? (
              <></>
            ) : (
              <>
                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    <Disclosure.Button
                      href="/login"
                      as="a"
                      className="text-center bg-white text-[#d2ae6d] dark:text-gray-900 hover:bg-gray-100 block rounded-md px-3 py-2 text-base font-medium"
                    >
                      <Link to="/login">Log In</Link>
                    </Disclosure.Button>
                    <Disclosure.Button
                      href="/register"
                      as="a"
                      className="text-center bg-white text-[#d2ae6d] dark:text-gray-900 hover:bg-gray-100 block rounded-md px-3 py-2 text-base font-medium"
                    >
                      <Link to="/register">Register</Link>
                    </Disclosure.Button>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
