import Element from './Components/element'
import Card from './Components/card'
import './App.css'
import Image from './Components/image'
import Card2 from './Components/card2'
import { useRef } from 'react'
// import {link} from 'react-scroll'
import Footer from './Components/Footer'

function App() {

  const contentRef = useRef(null);
  const contentRef2 = useRef(null);

    const scrollLeft  = ()=>{
      contentRef.current.scrollLeft -= 400; 
      contentRef2.scrollIntoView({behavior: 'smooth' });
    }
    const scrollLeft2  = ()=>{
      contentRef2.current.scrollLeft -= 400; 
    }
    const scrollRight = ()=>{
      contentRef.current.scrollLeft +=400;
    }
    const scrollRight2 = ()=>{
      contentRef2.current.scrollLeft +=400;
    }


    function backtotop(){
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  return (
    <>
      <div className="bg-black w-full h-[60px] text-white flex fixed z-10 ">
        <img
          src="./src/assets/amazonwhite.png"
          className="w-[130px] p-4"
          alt="logo"
        />
        <span className="-ml-[14px] mt-3">.in</span>
        <div className="hover:cursor-pointer ml-3 hover:border-2 hover:border-white-500 leading-[15px] pt-3">
          <span className="text-[12px] p-3  ">Delivering to Kolkata</span>
          <span className="flex">
            <img src="./src/assets/location.svg" className="w-[15px]" alt="" />
            <span className="font-normal text-[14px]">Update Location</span>
          </span>
        </div>

        <div className="w-[650px] h-[40px] bg-white ml-4  mt-2 flex rounded-md">
          <select
            className=" w-fit max-w-[100px] h-[40px]  text-[12px] mr-0 bg-slate-300 text-black rounded-tl-md rounded-bl-md"
            name="ALL"
            id=""
            placeholder="ALL"
          >
            <option className="w-auto text-center" value="">
              All{" "}
            </option>
            <option className="w-auto" value="">
              Clothings
            </option>
            <option className="w-auto" value="">
              Technology
            </option>
          </select>
          <input
            className="w-[650px] h-[40px] bg-white  placeholder:text-slate-500 text-black text-left rounded-md p-4"
            placeholder="Search Amazon.in"
          ></input>

          <div>
            <img
              className="w-[50px] hover:bg-orange-500 transition-all bg-orange-400 rounded-tr-md rounded-br-md hover:cursor-pointer"
              src="./src/assets/search.svg"
              alt=""
            />
          </div>
        </div>
        <div className="hover:cursor-pointer hover:border-2 hover:border-white-500 flex m-1">
          <img
            src="./src/assets/india.svg"
            alt=""
            className="w-[20px] h-[40px] ml-4 mt-2"
          />
          <select
            className=" w-fit max-w-[40px] h-[40px]  text-[12px]  mt-2 text-white bg-black "
            name="ALL"
            id=""
            placeholder="ALL"
          >
            <option className="w-auto" value="">
              EN (English)
            </option>
            <option className="w-auto" value="">
              HI (Hindi)
            </option>
            <option className="w-auto" value="">
              MA (Marathi)
            </option>
            <option className="w-auto" value="">
              BE (Bengali)
            </option>
          </select>
        </div>
        <div className="leading-[15px] p-3 hover:cursor-pointer hover:border-2 hover:border-white-500">
          <span className="text-[12px] p-0 ">Hello, sign in</span>
          <br />
          <span className="font-normal">Account & Lists</span>
        </div>

        <div className="leading-[15px] p-3 pl-1 pr-1 hover:cursor-pointer hover:border-2 hover:border-white-500">
          <span className="text-[12px] p-0 ">Return</span>
          <br />
          <span className="font-normal"> & Orders</span>
        </div>

        <div className="flex ml-4 hover:cursor-pointer hover:border-2 hover:border-white-500 text-[12px] pl-1 pr-1 ">
          <img
            src="./src/assets/cart.svg"
            alt=""
            className="w-[30px] h-[30px] mt-3"
          />
          <span className="pt-5">Cart</span>
          <span className="text-orange-400 pt-5 ml-1 font-bold">{0}</span>
        </div>
      </div>
      <div className="w-full h-[60px]"></div>
      <div className="bg-slate-800 w-full h-[40px] flex ">
        <div className="flex hover:border-[1px] hover:border-white-500">
          <img
            className="w-[20px] -mr-3 justify-center items-center text-center"
            src="./src/assets/menu.svg"
            alt=""
          />
          <Element name="All"></Element>
        </div>
        <Element name="Fresh" />
        <Element name="Amazon Mini TV" />
        <Element name="Sell" />
        <Element name="Best Sellers" />
        <Element name="Today's Deals" />
        <Element name="Mobiles" />
        <Element name="Prime" />
        <Element name="Customer Service" />
        <Element name="Electronics" />
        <Element name="Home and Kitchen" />
        <Element name="Fashion" />
        <Element name="New Releases" />
        <Element name="Amazon Pay" />
        <Element name="Computers" />
      </div>

      <div
        style={{
          backgroundImage: "url(./src/assets/amazonbg.jpg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-screen "
      >
        <div className="flex gap-4 ">
          <div className="w-[420px] h-full relative ">
            <div className="absolute mt-[250px] ">
              <Card
                Tile="Appliances for Your Home | Up to 40% off"
                img1="./src/assets/ac.jpg"
                img2="./src/assets/fridge.jpg"
                img3="./src/assets/microwave.jpg"
                img4="./src/assets/washingmachine.jpg"
                objname1="Airconditioners"
                objname2="Refrigerators"
                objname3="Microwaves"
                objname4="WashingMachines"
                footer="see more"
              ></Card>
            </div>
          </div>

          <div className="w-[420px] h-full relative">
            <div className="absolute mt-[250px] ">
              <Card
                Tile="Appliances for Your Home | Up to 40% off"
                img1="./src/assets/ac.jpg"
                img2="./src/assets/fridge.jpg"
                img3="./src/assets/microwave.jpg"
                img4="./src/assets/washingmachine.jpg"
                objname1="Airconditioners"
                objname2="Refrigerators"
                objname3="Microwaves"
                objname4="WashingMachines"
                footer="see more"
              ></Card>
            </div>
          </div>
          <div className="w-[420px] h-full relative">
            <div className="absolute mt-[250px] ">
              <Card
                Tile="Appliances for Your Home | Up to 40% off"
                img1="./src/assets/ac.jpg"
                img2="./src/assets/fridge.jpg"
                img3="./src/assets/microwave.jpg"
                img4="./src/assets/washingmachine.jpg"
                objname1="Airconditioners"
                objname2="Refrigerators"
                objname3="Microwaves"
                objname4="WashingMachines"
                footer="see more"
              ></Card>
            </div>
          </div>
          <div className="w-[420px] h-full relative">
            <div className="absolute mt-[250px] ">
              <Card
                Tile="Appliances for Your Home | Up to 40% off"
                img1="./src/assets/ac.jpg"
                img2="./src/assets/fridge.jpg"
                img3="./src/assets/microwave.jpg"
                img4="./src/assets/washingmachine.jpg"
                objname1="Airconditioners"
                objname2="Refrigerators"
                objname3="Microwaves"
                objname4="WashingMachines"
                footer="see more"
              ></Card>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] bg-slate-400 ">
        <div className="flex gap-4 ">
          <div className="w-[430px] h-full relative ">
            <div className="absolute mt-[50px] ">
              <Card
                Tile="Appliances for Your Home | Up to 40% off"
                img1="./src/assets/ac.jpg"
                img2="./src/assets/fridge.jpg"
                img3="./src/assets/microwave.jpg"
                img4="./src/assets/washingmachine.jpg"
                objname1="Airconditioners"
                objname2="Refrigerators"
                objname3="Microwaves"
                objname4="WashingMachines"
                footer="see more"
              ></Card>
            </div>
          </div>

          <div className="w-[420px] h-full relative">
            <div className="absolute mt-[50px] ">
              <Card
                Tile="Appliances for Your Home | Up to 40% off"
                img1="./src/assets/ac.jpg"
                img2="./src/assets/fridge.jpg"
                img3="./src/assets/microwave.jpg"
                img4="./src/assets/washingmachine.jpg"
                objname1="Airconditioners"
                objname2="Refrigerators"
                objname3="Microwaves"
                objname4="WashingMachines"
                footer="see more"
              ></Card>
            </div>
          </div>
          <div className="w-[420px] h-full relative">
            <div className="absolute mt-[50px] ">
              <Card
                Tile="Appliances for Your Home | Up to 40% off"
                img1="./src/assets/ac.jpg"
                img2="./src/assets/fridge.jpg"
                img3="./src/assets/microwave.jpg"
                img4="./src/assets/washingmachine.jpg"
                objname1="Airconditioners"
                objname2="Refrigerators"
                objname3="Microwaves"
                objname4="WashingMachines"
                footer="see more"
              ></Card>
            </div>
          </div>
          <div className="w-[420px] h-full relative">
            <div className="absolute mt-[50px] ">
              <Card
                Tile="Appliances for Your Home | Up to 40% off"
                img1="./src/assets/ac.jpg"
                img2="./src/assets/fridge.jpg"
                img3="./src/assets/microwave.jpg"
                img4="./src/assets/washingmachine.jpg"
                objname1="Airconditioners"
                objname2="Refrigerators"
                objname3="Microwaves"
                objname4="WashingMachines"
                footer="see more"
              ></Card>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[250px] bg-slate-200">
        <div
          ref={contentRef2}
          className="flex w-full rounded-sm overflow-x-scroll absolute h-[250px] bg-white p-4 gap-4 "
        >
          <Image img="./src/assets/filter.jpg"></Image>
          <Image img="./src/assets/scotty.jpg"></Image>
          <Image img="./src/assets/aquaguard.jpg"></Image>
          <Image img="./src/assets/batmintonShuttel.jpg"></Image>
          <Image img="./src/assets/philips.jpg"></Image>
          <Image img="./src/assets/speaker.jpg"></Image>
          <Image img="./src/assets/pocha.jpg"></Image>
          <Image img="./src/assets/induction.jpg"></Image>
          <Image img="./src/assets/scotty.jpg"></Image>
        </div>
        <button
          onClick={scrollLeft2}
          className="absolute p-2 m-2  w-[50px] h-[100px] mt-[50px] opacity-80 bg-slate-200 rounded-sm hover:cursor-pointer"
        >
          &lt;
        </button>
        <button
          onClick={scrollRight2}
          className="absolute p-2 m-2  w-[50px] h-[100px] ml-[1280px] mt-[50px] opacity-80 bg-slate-200 rounded-sm hover:cursor-pointer"
        >
          &gt;
        </button>
      </div>

      <div className="w-[1350px] m-auto h-[500px]  bg-yellow-400 mt-1">
        <div className="font-bold text-[25px] font-sans p-4">
          {" "}
          BlockBuster Deals
        </div>
        <div
          className="flex w-[1250px] rounded-md  m-auto  p-3 content-center bg-black overflow-x-scroll h-[380px] gap-4 "
          ref={contentRef}
        >
          <button
            onClick={scrollLeft}
            className="absolute p-2 m-2 mt-[50px] -ml-[50px] h-[200px] bg-white rounded-sm hover:cursor-pointer"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="absolute p-2 ml-[1250px] mt-[50px] h-[200px] bg-white rounded-sm hover:cursor-pointer"
          >
            &gt;
          </button>
          <Card2
            img="./src/assets/iphone.jpg"
            off="10% off"
            price="9,999"
            text="Ends in"
            Mrp="11,999"
            name="Apple iPhone 13 (128GB)- Starlight"
          ></Card2>
          <Card2
            img="./src/assets/laptops/laptop1.jpg"
            off="10% off"
            price="9,999"
            text="Ends in"
            Mrp="11,999"
            name="Laptop1 (128GB)- Starlight"
          ></Card2>
          <Card2
            img="./src/assets/laptops/tab_samsung.jpg"
            off="10% off"
            price="9,999"
            text="Ends in"
            Mrp="11,999"
            name="Samsung tab (128GB)- Starlight"
          ></Card2>
          <Card2
            img="./src/assets/laptops/laptop2.jpg"
            off="10% off"
            price="9,999"
            text="Ends in"
            Mrp="11,999"
            name="Laptop2 (128GB)- Starlight"
          ></Card2>
          <Card2
            img="./src/assets/laptops/laptop3.jpg"
            off="10% off"
            price="9,999"
            text="Ends in"
            Mrp="11,999"
            name="Laptop3 (128GB)- Starlight"
          ></Card2>
          <Card2
            img="./src/assets/laptops/tab2.jpg"
            off="10% off"
            price="9,999"
            text="Ends in"
            Mrp="11,999"
            name="xiaomi tab (128GB)- Starlight"
          ></Card2>
        </div>
      </div>

      <div className="h-[180px] bg-slate-50">
        <div className="h-[1px] border-slate-100 w-full bg-slate-400 mt-14"></div>
        <div className=" h-[50px] mt-5">
          <div className=" text-center text-sm text-[14px] mb-2 ">
            See Personalised recommendations
          </div>
          <div className="text-center">
            <button className="font-bold bg-yellow-400 w-[250px] p-1 rounded-md text-sm">
              Sign in
            </button>
          </div>
        </div>
        <div className="text-center text-sm mt-3 text-[12px]">
          New customer{" "}
          <span className="text-blue-400 hover:cursor-pointer">
            Start here?
          </span>
        </div>
        <div className="h-[1px] border-slate-100 w-full bg-slate-400 mt-5"></div>

        <div
          onClick={backtotop}
          className="text-center text-[14px] h-[50px] mt-3 text-white bg-slate-600 hover:cursor-pointer hover:bg-slate-500  flex items-center justify-center "
        >
          {" "}
          Back to top{" "}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
  
    

}

export default App
