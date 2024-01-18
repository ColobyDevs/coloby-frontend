import React from "react";

const Design = () => {
  return (
    <>
      <section className="mt-[100px] h-[100vh] flex flex-row bg-gradient-to-r from-[#B6BEEAB2] to-[#D9D9D900]">
        <section>
          <h1 className="min-w-[200px] text-5xl text-[#030E46] font-medium">
            Build a team, manage task & Code
          </h1>
          <p className="text-[#3F4773]">
            With this open source system, you can build a strong team from
            various fields, manage tasks & codes, and increase productivity in
            your projects.
          </p>

          <button className="bg-[blue] w-[150px] mt-6 py-3 rounded-sm">
            Register
          </button>
        </section>
        <section></section>
      </section>
    </>
  );
};

export default Design;
