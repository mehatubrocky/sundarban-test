import React from "react";
import { LuMonitorDot } from "react-icons/lu";
import {BiEdit ,BiCube} from "react-icons/bi";
import {BsArrowRepeat} from "react-icons/bs";
import {RiCheckboxMultipleBlankLine} from "react-icons/ri"

const cardData = [
  {
    id: 1,
    icon: LuMonitorDot,
    title: "31 app screen",
    decp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore, eaque dolore!",
  },
  {
    id: 2,
    icon: BiEdit,
    title: "100% vector",
    decp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore, eaque dolore!",
  },
  {
    id: 3,
    icon: RiCheckboxMultipleBlankLine,
    title: "fully layered",
    decp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore, eaque dolore!",
  },
  {
    id: 4,
    icon: BiCube,
    title: "icon pack",
    decp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore, eaque dolore!",
  },
  {
    id: 5,
    icon: BsArrowRepeat,
    title: "design",
    decp: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore, eaque dolore!",
  },
];

function HomeComponent() {
  return (
    <section className="background-container min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center mt-5">
          <p className="text uppercase text-5xl text-white font-bold title-text ml-1">
            maeman
          </p>
          <p className="text uppercase text-3xl text-white font-semibold">{`what's included`}</p>
        </div>
        <div className="w-1/2 h-full py-10 px-10">
          <div className="grid grid-flow-row md:grid-cols-3 gap-10 items-center justify-items-center cursor-pointer">
            {cardData &&
              cardData.map((data) => {
                const Icon = data.icon;
                return (
                  <div
                    key={data.id}
                    className="feature-item-five"
                  >
                    <div className="grid h-60 items-center justify-items-center">
                      <i className="text-green-500 font-extrabold">
                        {Icon && <Icon size={48} />}
                      </i>
                      <div>
                        <p className="text text-4xl text-shadow font-bold text-white uppercase flex items-center justify-center mt-4">
                          {data.title}
                        </p>
                        <p className="text p-2 text-white mt-4">
                          {data.decp}
                        </p>
                        </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeComponent;
