import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehicleRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRideRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vechicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity:1,
        padding:24
      });
      gsap.to(panelCloseRef.current, {
        opacity:1
      })
    } else {
      gsap.to(panelRef.current, {
        height: "0",
        opacity:0,
        padding:0
      });
      gsap.to(panelCloseRef.current, {
        opacity:0
      })
    }
  }, [panelOpen]);

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehicleRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehicleRef.current,{
        transform:'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRideRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(confirmRideRef.current,{
        transform:'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vechicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vechicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber logo"
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber map"
        />
      </div>

      <div className=" flex flex-col justify-end top-0 h-screen absolute w-full">
        <div className="h-[30%] relative p-6 bg-white">
        <h5 ref={panelCloseRef} onClick={() =>{
          setPanelOpen(false); 
        }} className="absolute opacity-0 top-5 right-6 text-2xl font-bold">
        <i className="ri-arrow-down-wide-line"></i>
        </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="relative h-full my-5">
              <div className="absolute left-[18px] top-[45px] h-12 w-[3px] bg-black rounded-full"></div>
              <div className="absolute left-[16px] top-[35px] w-2 h-2 bg-white border-2 border-black rounded-full"></div>
              <div className="absolute left-[16px] top-[95px] w-2 h-2 bg-white border-2 border-black rounded-full"></div>
            </div>
            <input
              className="bg-[#eee] w-full px-12 py-2 outline-none text-base mt-5 rounded-lg"
              type="text"
              value={pickup}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eee] mt-5 w-full px-12 outline-none py-2 text-base rounded-lg"
              type="text"
              value={destination}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className=" bg-white opacity-0">
          <LocationSearchPanel  setVehiclePanel={setVehiclePanel} setPanelOpen = {setPanelOpen}/>
        </div>
      </div>

      <div ref={vehicleRef} className="fixed w-full z-10 bg-white translate-y-full bottom-0 px-3 pt-12 py-10">
              <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel = {setConfirmRidePanel}/>
      </div>

      <div ref={confirmRideRef} className="fixed w-full z-10 bg-white translate-y-full bottom-0 px-3 pt-12 py-6">
              <ConfirmedRide setConfirmRidePanel = {setConfirmRidePanel} setVehicleFound = {setVehicleFound}/>
      </div>

      <div ref={vechicleFoundRef} className="fixed w-full z-10 bg-white translate-y-full bottom-0 px-3 pt-12 py-6">
              <LookingForDriver setVehicleFound = {setVehicleFound}/>
      </div>

      <div ref={waitingForDriverRef} className="fixed w-full z-10 bg-white  bottom-0 px-3 pt-12 py-6">
              <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
