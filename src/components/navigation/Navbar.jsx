import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import logoMain from "../../assets/img/logoMain.png";
import DotLoader from "react-spinners/BounceLoader";
import { useState } from "react";

// import loadingButton from "../../assets/img/loading-button.gif";

export const Navbar = (props) => {
  // variable de react que empieza en verdadero
  const [Loading, setLoading] = useState(true);

  return (
    // CAJA PADRE de aca no s encargamos del background
    <nav id="navbar" className="w-full bg-gradient-to-b shadow-navbar from-gray-200 to-transparent fixed py-4 ">
      <div className=" px-4 top-0 sm:px-6">
        {/* div general */}
        <div className=" -ml-4 md:px-12 px-2 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          {/* SECCION DEL LOGO */}
          <Link to={"/"}>
            <div className="ml-4 mt-2 ">
              <img
                width="40"
                src={logoMain}
                className="transform hover:rotate-90 transition duration-300 hover:ease-out text-lg font-medium leading-6 inline-flex text-gray-900"
              />
              <span className="inline-flex pl-2 transparent transition duration-150 hover:ease-out  hover:text-orange-button leading-6 text-lg logoMain-fuente font-bold">
                Z0SoBiTs
              </span>
            </div>
          </Link>

          {/* parte de botones a la izquierda */}
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to={"/casos"}
              className="text-lg  border-b-2 border-transparent hover:border-b-orange-button inline-flex mx-4 font-medium leading-6 text-gray-900"
            >
              Casos
            </NavLink>
            <NavLink
              to={"/servicios"}
              className="text-lg  border-b-2 border-transparent hover:border-b-orange-button inline-flex mx-4 font-medium leading-6 text-gray-900"
            >
              Servicios
            </NavLink>
            <NavLink
              to={"/nosotros"}
              className="text-lg inline-flex  border-b-2 border-transparent hover:border-b-orange-button mx-4 font-medium leading-6 text-gray-900"
            >
              Nosotros
            </NavLink>
            <NavLink
              to={"/carreras"}
              className="text-lg inline-flex mx-4 font-medium leading-6   border-b-2 border-transparent hover:border-b-orange-button text-gray-900"
            >
              Carreras
            </NavLink>
            <NavLink
              to={"/blog"}
              className="text-lg inline-flex mx-4 font-medium  hover:underline-offset- border-b-2 border-transparent hover:border-b-orange-button leading-6 text-gray-900"
            >
              Blog
            </NavLink>
            <NavLink
              to={"/contacto"}
              className="text-lg  border-b-2 border-transparent hover:border-b-orange-button inline-flex mx-4 font-medium leading-6 text-gray-900"
            >
              Contacto
            </NavLink>
            {/* boton general de mas a la izquierda */}
            <Link
              to={'/contacto'}
              className="inline-flex transition duration-300 hover:ease-out items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Contratanos
              <DotLoader className="ml-3 -mr-1 h-5 w-5" aria-hidden="true"  size={12} color={"#ffffff"} />
            </Link>
            

          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
