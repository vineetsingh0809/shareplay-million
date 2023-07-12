// import React, { useState } from "react";

// const SubType = () => {
//   const [normalSub, setNormalSub] = useState(true);
//   const [goldSub, setGoldSub] = useState(false);
//   const [platSub, setPlatSub] = useState(false);

//   const normalSubHandler = (event) => {
//     setNormalSub(true);
//     setGoldSub(false);
//     setPlatSub(false);
//   };
//   const goldSubHandler = () => {
//     setNormalSub(false);
//     setGoldSub(true);
//     setPlatSub(false);
//   };
//   const platinumSubHandler = () => {
//     setNormalSub(false);
//     setGoldSub(false);
//     setPlatSub(true);
//   };

//   return (
//     <div className="text-white py-5">
//       <div
//         className={`py-4 text-xl font-medium pl-7 ${
//           normalSub ? "bg-[#222222]" : ""
//         }`}
//         onClick={normalSubHandler}
//       >
//         <p className="cursor-pointer">Subscriber</p>
//         <p className="cursor-pointer">$4.95</p>
//       </div>
//       <div
//         className={`py-4 text-xl font-medium pl-7 ${
//           goldSub ? "bg-[#222222]" : ""
//         }`}
//         onClick={goldSubHandler}
//       >
//         <p className="cursor-pointer">Gold Subscriber</p>
//         <p className="cursor-pointer">$9.95</p>
//       </div>
//       <div
//         className={`py-4 text-xl font-medium pl-7 ${
//           platSub ? "bg-[#222222]" : ""
//         }`}
//         onClick={platinumSubHandler}
//       >
//         <p className="cursor-pointer">Platinum Subscriber</p>
//         <p className="cursor-pointer">$24.95</p>
//       </div>
//     </div>
//   );
// };

// export default SubType;

import React, { useState } from "react";

let SubscriberValue = null;
console.log(SubscriberValue)

const SubType = () => {
  const [normalSub, setNormalSub] = useState({
    flag: true,
    value: null,
  });
  const [goldSub, setGoldSub] = useState({
    flag: false,
    value: null,
  });
  const [platSub, setPlatSub] = useState({
    flag: false,
    value: null,
  });

  const normalSubHandler = (event) => {
    const normal = document.querySelector("#normal");
    console.log(normal.innerHTML);
    SubscriberValue = normal.innerHTML;
    setNormalSub({
      flag: true,
      value: normal.innerHTML,
    });
    setGoldSub({
      flag: false,
      value: null,
    });
    setPlatSub({
      flag: false,
      value: null,
    });
  };

  const goldSubHandler = (event) => {
    const normal = document.querySelector("#gold");
    console.log(normal.innerHTML);
    SubscriberValue = normal.innerHTML;
    setNormalSub({
      flag: false,
      value: null,
    });
    setGoldSub({
      flag: true,
      value: normal.innerHTML,
    });
    setPlatSub({
      flag: false,
      value: null,
    });
  };

  const platinumSubHandler = (event) => {
    const normal = document.querySelector("#platinum");
    console.log(normal.innerHTML);
    SubscriberValue = normal.innerHTML;
    setNormalSub({
      flag: false,
      value: null,
    });
    setGoldSub({
      flag: false,
      value: null,
    });
    setPlatSub({
      flag: true,
      value: normal.innerHTML,
    });
  };

  return (
    <div className="text-white py-5">
      <div
        className={`py-4 text-xl font-medium pl-7 ${
          normalSub.flag ? "bg-[#222222]" : ""
        }`}
        onClick={normalSubHandler}
      >
        <p className="cursor-pointer">Subscriber</p>
        <p id="normal" className="cursor-pointer">
          $4.95
        </p>
      </div>
      <div
        className={`py-4 text-xl font-medium pl-7 ${
          goldSub.flag ? "bg-[#222222]" : ""
        }`}
        onClick={goldSubHandler}
      >
        <p className="cursor-pointer">Gold Subscriber</p>
        <p id="gold" className="cursor-pointer">
          $9.95
        </p>
      </div>
      <div
        className={`py-4 text-xl font-medium pl-7 ${
          platSub.flag ? "bg-[#222222]" : ""
        }`}
        onClick={platinumSubHandler}
      >
        <p className="cursor-pointer">Platinum Subscriber</p>
        <p id="platinum" className="cursor-pointer">
          $24.95
        </p>
      </div>
    </div>
  );
};

export default SubType;
