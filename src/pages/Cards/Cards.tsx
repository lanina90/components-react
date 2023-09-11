import {NavLink, Outlet} from "react-router-dom";


const Cards = () => {
  return (
    <div>
      <nav className={'flex items-center gap-7 text-white text-[20px]'}>
        <NavLink to={'3d'}>3D Effect</NavLink>
        <NavLink to={'hover'}>Hover Effect</NavLink>
      </nav>
      <div id="detail" className={'flex-grow p-6'}>
        <Outlet/>
      </div>
    </div>

  );
};

export default Cards;