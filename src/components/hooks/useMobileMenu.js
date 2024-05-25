// src/hooks/useMobileMenu.js
import { useEffect } from "react";
import $ from "jquery";

const useMobileMenu = () => {
  useEffect(() => {
    const toggleMobileMenu = () => {
      $(".nav-list").slideToggle();
    };

    const closeDropdowns = () => {
      $(".nav-dropdown").slideUp();
    };

    $("#nav-toggle").click(toggleMobileMenu);
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").slideToggle();
      $(".nav-dropdown").not($(this).siblings()).slideUp();
      e.stopPropagation();
    });

    $("html").click(closeDropdowns);

    return () => {
      // Clean up event listeners when the component unmounts
      $("#nav-toggle").off("click", toggleMobileMenu);
      $("nav ul li a:not(:only-child)").off("click");
      $("html").off("click", closeDropdowns);
    };
  }, []); // Empty dependency array ensures this effect runs once

  return null; // This hook doesn't return any JSX
};

export default useMobileMenu;
