const LocationSearchPanel = (props) => {
  // sample array for location

  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22B, Near Malhotra's cafe, Sheryians Coding School, Bhopal",
    "21D, Near Singhania's cafe, Sheryians Coding School, Bhopal",
    "20C, Near Oberoi's cafe, Sheryians Coding School, Bhopal",
    "27A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
  ];

  return (
    <div className="">
      {locations.map((location, index) => {
        return (
          <div onClick={() =>{
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
            key={index}
            className="flex items-center border-2 border-transparent active:border-black p-3 rounded-xl my-2 justify-start gap-4"
          >
            <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-semibold">
              {location}
            </h4>
          </div>
        );
      })}

      {/* <div className="flex items-center border-2 border-transparent active:border-black p-3 rounded-xl my-2 justify-start gap-4">
        <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill text-xl"></i>
        </h2>
        <h4 className="font-semibold">
          24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal
        </h4>
      </div>
      <div className="flex items-center border-2 border-transparent active:border-black p-3 rounded-xl my-2 justify-start gap-4">
        <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill text-xl"></i>
        </h2>
        <h4 className="font-semibold">
          24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal
        </h4>
      </div>
      <div className="flex items-center border-2 border-transparent active:border-black p-3 rounded-xl my-2 justify-start gap-4">
        <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
          <i className="ri-map-pin-fill text-xl"></i>
        </h2>
        <h4 className="font-semibold">
          24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal
        </h4>
      </div> */}
    </div>
  );
};

export default LocationSearchPanel;
