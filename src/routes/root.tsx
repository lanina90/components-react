import {Outlet} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import NavigationLink from "../components/menu/NavigationLink";
import {BsFillMenuButtonWideFill} from "react-icons/bs";
import {MdOutlineAnimation} from "react-icons/md";


const Root = () => {
  return (
    <div className={'flex py-[10px] bg-[#545e6e] pl-[5px] '}>
      <div className={'w-[207px] bg-[#2f333b] rounded text-white pt-6 pl-[30px]'}>
        <nav>
          <ul>
            <li>
              <NavigationLink to={'/'}><FaHome size={20}/>Home</NavigationLink>
            </li>
            <li>
              <NavigationLink to={'menus'}><BsFillMenuButtonWideFill size={20}/>Navigation</NavigationLink>
            </li>
            <li>
              <NavigationLink to={'menus'}><MdOutlineAnimation size={20}/>Animation</NavigationLink>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail" className={'flex-grow p-6'}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Root;