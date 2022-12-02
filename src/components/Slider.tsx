import { useState } from "react";

import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";

const Slider = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="mt-10">
      <hr></hr>
      <div className="flex justify-between">
        {value === 1 ? <SliderOne setValue={setValue} /> : ""}
        {value === 2 ? <SliderTwo setValue={setValue} /> : ""}
      </div>
      <hr></hr>
    </div>
  );
};

export default Slider;
