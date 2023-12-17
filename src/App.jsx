import logo from "./assets/logo.jpg";
import img1 from "./assets/1.webp";
import img2 from "./assets/cap.jpg";
import img3 from "./assets/sh.avif";
import img4 from "./assets/2.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/7.jpg";

function App() {
  return (
    <header className="w-full">
      <div className="flex lg:w-full">
        <div className="">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>
        <div>
          <div className="bg-[#E4A24B] flex flex-col p-2 gap-3 md:gap-7 w-full h-full xl:w-[122%] justify-center items-center lg:gap-10 lg:h-full ">
            <h5
              className="text-[#cf41b7] font-semibold text-sm text-center md:text-2xl "
              style={{ textShadow: "1px 1px 1px white" }}
            >
              குடும்ப உறவுகளின் இருப்பிடம் மகிழ்ச்சியின் ஆரம்பம்...
            </h5>
            <h2
              className="font-bold text-red-500 text-xl md:text-5xl"
              style={{ textShadow: "2px 2px 1px white" }}
            >
              மகேந்திரா
            </h2>
            <h3
              className="text-[#6E8906] font-bold text-sm text-center md:text-2xl"
              style={{ textShadow: "1px 1px 1px yellow" }}
            >
              டெக்ஸ்டைல்ஸ் & ரெடிமேட்ஸ்
            </h3>
          </div>
        </div>
      </div>
      <section className="md:p-4 grid">
        <div className="w-full md:w-[70%] lg:w-[50%] h-[350px]  lg:h-[450px] relative -z-40 bottom-[120px] p-3 border-dashed border-[6px] border-red-600  rounded-[400%] lg:p-7 mx-auto ">
          <div className="w-full h-full bg-red-700 text-white rounded-[400%] p-9 pt-[105px] flex  flex-col gap-4 justify-center items-center ">
            <h1 className="text-center font text-3xl">Home</h1>
            <marquee behavior="" direction="" className="md:text-2xl">
              This is New Update
            </marquee>
            <div className="grid bg-[#FAAC64] rounded-[20%] ">
              <button className="text-center  md:text-3xl text-lg  mx-auto  btn font-bold font ">
                Havasa Sutrula Payanam new
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 xl:grid-cols-4 place-items-center relative bottom-14  gap-6 p-4">
        <div className=" w-[150px] h-[150px] border-t-4  border-white   rounded-full p-1">
          <div className="bg-white w-full h-full  rounded-full relative ">
            <img
              src={img1}
              alt=""
              className="bg-white w-full h-full  rounded-full"
            />
            <h1 className="text-[#FDE732] text-lg rounded bg-[#940215] text-center -rotate-[8deg] font-semibold ml-2 absolute bottom-[0px] w-full  ">
              Women
            </h1>
          </div>
        </div>
        <div className=" w-[150px] h-[150px] border-t-4  border-white   rounded-full p-1">
          <div className="bg-white w-full h-full  rounded-full relative ">
            <img
              src={img2}
              alt=""
              className="bg-white w-full h-full  rounded-full"
            />
            <h1 className="text-[#FDE732] text-lg rounded bg-[#940215] text-center -rotate-[8deg] font-semibold ml-2 absolute bottom-[0px] w-full  ">
              Caps
            </h1>
          </div>
        </div>
        <div className=" w-[150px] h-[150px] border-t-4  border-white   rounded-full p-1">
          <div className="bg-white w-full h-full  rounded-full relative ">
            <img
              src={img4}
              alt=""
              className="bg-white w-full h-full  rounded-full"
            />
            <h1 className="text-[#FDE732] text-lg rounded bg-[#940215] text-center -rotate-[8deg] font-semibold ml-2 absolute bottom-[0px] w-full  ">
              Shoes
            </h1>
          </div>
        </div>
        <div className=" w-[150px] h-[150px] border-t-4  border-white   rounded-full p-1">
          <div className="bg-white w-full h-full  rounded-full relative ">
            <img
              src={img5}
              alt=""
              className="bg-white w-full h-full  rounded-full"
            />
            <h1 className="text-[#FDE732] text-lg rounded bg-[#940215] text-center -rotate-[8deg] font-semibold ml-2 absolute bottom-[0px] w-full  ">
              Men-Shirts
            </h1>
          </div>
        </div>
        <div className=" w-[150px] h-[150px] border-t-4  border-white   rounded-full p-1">
          <div className="bg-white w-full h-full  rounded-full relative ">
            <img
              src={img6}
              alt=""
              className="bg-white w-full h-full  rounded-full"
            />
            <h1 className="text-[#FDE732] text-lg rounded bg-[#940215] text-center -rotate-[8deg] font-semibold ml-2 absolute bottom-[0px] w-full  ">
              Women
            </h1>
          </div>
        </div>
        <div className=" w-[150px] h-[150px] border-t-4  border-white   rounded-full p-1">
          <div className="bg-white w-full h-full  rounded-full relative ">
            <img
              src={img2}
              alt=""
              className="bg-white w-full h-full  rounded-full"
            />
            <h1 className="text-[#FDE732] text-lg rounded bg-[#940215] text-center -rotate-[8deg] font-semibold ml-2 absolute bottom-[0px] w-full  ">
              Women
            </h1>
          </div>
        </div>
      </div>
      <h1 className="text-center bg-[#F1696D] p-1 rounded-[35%] mx-16  relative bottom-4">
        New Offers{" "}
      </h1>
    </header>
  );
}

export default App;
