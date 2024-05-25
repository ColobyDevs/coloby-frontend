import React, { useContext, useEffect } from "react";
import { Context } from "../context/context";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ActionModal() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { modal, auth } = useContext(Context);
  const { showActionModal, setShowActionModal } = modal;
  const { logout } = auth;
  const handleModal = () => {
    setShowActionModal(false);
  };
  if (showActionModal) {
    return (
      <>
        <section
          data-aos="fade-down"
          data-aos-easing="ease-out"
          data-aos-duration="600"
          data-aos-once="true"
          className="backdrop fixed top-0 bottom-0 right-0 left-0 flex z-20 items-center justify-center "
        >
          <div className="flex flex-col justify-evenly px-6 rounded-md h-48 w-96 bg-white">
            <h1 className="font-bold">Sign Out?</h1>
            <span className="text-sm">Are you sure you want to sign out?</span>
            <div className="flex flex-row ml-auto justify-between gap-x-4 w-1/2">
              <button
                className="border-red-400 border-2 text-red-400 w-1/2 rounded-md"
                onClick={handleModal}
              >
                No
              </button>
              <button className="border w-1/2 rounded-md" onClick={logout}>
                Yes
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
