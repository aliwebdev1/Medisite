import React from "react";
import logo from "../../../assets/images/Medisite logo.png";
import call from "../../../assets/icons/call.png";
import facebook from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import rightArray from "../../../assets/icons/rightarray.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer md:flex sm:footer-horizontal bg-primary text-white p-4 md:p-29 shape">
        <aside className=" md:w-1/4 space-y-5 pt-20 md:pt-0 pe-12">
          <img src={logo} alt="medisite" />
          <p className="">
            When Stan Britten established BritKare in 1995, he did so with a
            true desire to asist the medical community with the quality care of
            their desire
          </p>
        </aside>
        <nav className="w-1/4">
          <h6 className="footer-title ">Link</h6>
          <a className="link link-hover flex items-center">
            <img className="w-1 h-1.5 mr-3" src={rightArray} alt="" /> Service
            Area
          </a>
          <a className="link link-hover flex items-center">
            <img className="w-1 h-1.5 mr-3" src={rightArray} alt="" /> About
          </a>
          <a className="link link-hover flex items-center">
            <img className="w-1 h-1.5 mr-3" src={rightArray} alt="" /> Contact
          </a>
          <a className="link link-hover flex items-center">
            <img className="w-1 h-1.5 mr-3" src={rightArray} alt="" /> Blog
          </a>
          <a className="link link-hover flex items-center">
            <img className="w-1 h-1.5 mr-3" src={rightArray} alt="" /> Solutions
          </a>
        </nav>
        <nav className="w-1/4">
          <h6 className="footer-title ">Contact</h6>
          <a className="link link-hover flex items-center">
            <img className="w-1 h-1.5 mr-3" src={location} alt="" /> 33 Street
            Saadi Town, near Malir cantt
          </a>
          <a className="link link-hover flex items-center">
            <img className="w-1 h-1.5 mr-3" src={call} alt="" /> +92 322 2155556
          </a>
          <a className="link link-hover flex items-center">
            <img className="w-1 h-1.5 mr-3" src={call} alt="" /> +82 322 2155545
          </a>
          <a className="link link-hover flex items-center">
            <img className="w-1 h-1.5 mr-3" src={rightArray} alt="" />{" "}
            myousufk87@gmail.com
          </a>
        </nav>

        <div className="w-1/4 flex justify-end">
          <nav>
            <h6 className="footer-title">Follow us On</h6>
            <div className="flex gap-5">
              <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full">
                <img className="" src={google} alt="" />
              </div>
              <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                <img src={facebook} alt="" />
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
