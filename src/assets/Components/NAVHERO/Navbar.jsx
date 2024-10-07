import "./../../../tailwind.css";

const Navbar = ({ logo, menuItems, authLinks }) => {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            <a href="/" className="navbar-logo block w-60 max-w-full px-4">
              {logo}
            </a>

            <ul className="hidden lg:flex">
              {menuItems.map((item, index) => (
                <li key={index} className="group relative">
                  <a
                    href={item.href}
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="sm:flex">
              <a
                href={authLinks.signIn.href}
                className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
              >
                {authLinks.signIn.label}
              </a>
              <a
                href={authLinks.signUp.href}
                className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
              >
                {authLinks.signUp.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
