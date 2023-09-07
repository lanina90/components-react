import React from 'react';
import NavigationOne from "../components/NavigationOne/NavigationOne";
import NavigationTwo from "../components/NavigationTwo/NavigationTwo";

const Navigations = () => {


  return (
    <section className={'flex'}>
      <NavigationOne/>
      <NavigationTwo/>
    </section>
  );
};

export default Navigations;
