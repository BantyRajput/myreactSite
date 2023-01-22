import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curelem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curelem)}>
                {curelem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
