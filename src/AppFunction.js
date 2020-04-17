import React,{useState, useEffect} from 'react';


const geoPosition = {
  longitude: null,
  latitude: null,
  speed : null
}

const AppFunction = () => {

  const [count,setCount] = useState(0);
  const [isOnOff, setOnOff] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null})
  const [{longitude, latitude, speed}, setLocalPosition] = useState(geoPosition)
 let mounted = true;

  useEffect(() => {
    document.title = `The counter is at ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);
    navigator.geolocation.getCurrentPosition(handlePosition);
   const geoID = navigator.geolocation.watchPosition(handlePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      navigator.geolocation.clearWatch(geoID);
      mounted = false;
    }

  }, [count])

  const handlePosition = event => {
    if(mounted){
      setLocalPosition({
      longitude : event.coords.longitude,
      latitude : event.coords.latitude,
      speed : event.coords.speed
    })
    }
 
  }

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const toggleLight = () => {
    setOnOff(prevState => !prevState);
  }

  return(
    <>
    <h2 className="header">Increment Button</h2>
  <button onClick={incrementCount}>I have been clicked {count} times</button>

  <h2 className="toggleLight">Toggle Light</h2>
  <div className="light" onClick={toggleLight}   
  style={{
    height: '40px',
    width: '40px',
    backgroundColor: isOnOff ? 'yellow' : 'grey'
  }}  
  ></div>

  <h2>Mouse Position</h2>
<p>{mousePosition.x}</p> 
<p>{mousePosition.y}</p>
<br/>

<h2>Geo location</h2>
<p className="longitude">Longitude : {longitude}</p>
<p className="latitude">Latitude : {latitude}</p>
<p className="speed">Speed : {speed ? speed : '0'}</p>
  </>
  )
}

export default AppFunction;
