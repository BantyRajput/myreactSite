import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./menuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curelem) => {
      return curelem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);
  
  const filterItem = (category) => {
    if(category === "All"){
        setmenuData(Menu);
        return ; 
    }



    const updateList = Menu.filter((curelem) => {
      return curelem.category === category;
    });
    setmenuData(updateList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
