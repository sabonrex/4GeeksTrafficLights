import React, {useState, useEffect} from "react";

const initialState = { 
    stateRed: "",
    stateYellow: "",
    stateGreen: "",
}

const TrafficLight = () => {
  const [color, setColor] = useState({initialState}); 

  useEffect(() => { 
    setColor({stateRed: "on"});
  }, []); 

  return (
        <div>
            <div id="box"></div>
                <div id="trafics">
                    <div className= {"red " + color.stateRed}
                        onClick={() => setColor({stateRed: "on"})}>
                    </div>
					<div className= {"yellow " + color.stateYellow}
                        onClick={() => setColor({stateYellow: "on"})}>
                    </div>
					<div className= {"green " + color.stateGreen}
                        onClick={() => setColor({stateGreen: "on"})}>
                    </div>

        </div>
</div>
      
  );
};

export default TrafficLight;