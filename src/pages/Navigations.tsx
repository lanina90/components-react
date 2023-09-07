import React from 'react';
import NavigationOne from "../components/Navigation1/NavigationOne";
import NavigationTwo from "../components/Navigation2/NavigationTwo";
import NavigationThree from "../components/Navigation3/NavigationThree";

const Navigations = () => {


  return (
    <section className={'flex'}>
      <div className={'flex flex-col h-full gap-[50px]'}>
        <NavigationOne/>
        <NavigationThree/>
      </div>
      <NavigationTwo/>
    </section>
  );
};

export default Navigations;
