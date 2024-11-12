import logo from '../../assets/logo.png'
import SerchIcon from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import ProfileIcon from '../../assets/profile_img.png'
import carets_Icon from '../../assets/caret_icon.svg'
import '../Navbar/Navbar.css'
import '@fortawesome/fontawesome-free'
import { useEffect, useRef, useState } from 'react'
import { logout } from '../../firebase'


const Navbar = () => {

  const handleLogout = async () => {
    try {
        await logout();  // Ensure logout function is being called here
        console.log("Logged out successfully.");
    } catch (error) {
        console.error("Error logging out: ", error);
    }
};

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('nav-dark');
        } else {
          navRef.current.classList.remove('nav-dark');
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar w-full px-4 md:px-24 py-4 flex justify-between fixed text-[14px]  z-[1]" ref={navRef}>
      
      {/* Left Navbar */}
      <div className="navbar-left flex items-center space-x-4 md:space-x-14 pl-5">
        <img src={logo} alt="Logo" className="w-[90px]" />
        <ul className="hidden md:flex list-none space-x-4 md:space-x-4 cursor-pointer">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li className="hidden lg:inline">My List</li>
          <li className="hidden lg:inline">Browse by Languages</li>
        </ul>
      </div>

      {/* Right Navbar */}
      <div className="navbar-right flex items-center space-x-3 md:space-x-6 pr-8">
        <img src={SerchIcon} alt="Search Icon" className="w-5 md:w-5 cursor-pointer" />
        <p className="hidden md:inline">Children</p>
        <img src={BellIcon} alt="Bell Icon" className="w-5 md:w-5 cursor-pointer" />
        
        {/* Profile with Dropdown */}
        <div className="navbar-profile items-center space-x-3 cursor-pointer relative group hidden md:flex">
        <img src={ProfileIcon} alt="Profile Icon" className="rounded-[4px] w-[35px] md:w-9" />
        <img src={carets_Icon} alt="Caret Icon" className="w-4 md:w-4" />
        <div className="drop_down absolute top-[100%] right-0 w-[max-content] bg-[#191919] py-[18px] px-[22px] rounded-[2px] underline z-[1] hidden group-hover:block">
          <p onClick={handleLogout} className="text-[13px] cursor-pointer">Sign Out of Netflix</p>
        </div>
      </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
          <i className="fas fa-bars text-xl"></i> {/* Menu icon */}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {openMenu && (
        <div className="absolute top-[100%] right-0 w-full bg-[#191919] py-4 px-6 flex flex-col space-y-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
          {/* <div className="flex items-center space-x-3">
            <img src={SerchIcon} alt="Search Icon" className="w-5 cursor-pointer" />
            <p>Children</p>
            <img src={BellIcon} alt="Bell Icon" className="w-5 cursor-pointer" />
          </div> */}
          <div className="navbar-profile flex items-center space-x-3 cursor-pointer">
            <img src={ProfileIcon} alt="Profile Icon" className="rounded-[4px] w-[35px]" />
            <p className="text-[13px] cursor-pointer"  onClick={handleLogout}>Sign Out of Netflix</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;