import React from "react";

import MessageCard from "../../components/mobileView";

const HomePage: React.FC = () => {
  return (
    <section className="xxs:flex-col xxs:gap-1 sm:flex-row sm:gap-2 lg:gap-4 flex justify-around items-center gap-8 m-auto w-[90vw] min-h-[88vh] h-fit ">
      <div className="xxs:order-2 xxs:w-full sm:order-1 md:w-[62%] lg:w-[70%] h-full  border-2 border-[#FD3C3D] text-center	font-bold text-2  ">
        Form Section
      </div>
      <div className="xxs:order-1 xxs:w-full sm:order-2 md:w-[38%] lg:w-[30%] h-full  flex items-center justify-center  ">
        <MessageCard name="Ahmed" time="10:30" />
      </div>
    </section>
  );
};

export default HomePage;
