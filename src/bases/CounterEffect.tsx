import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
const maximunCount  = 10;

export const CounterEffect = ({ initialValue=5}) => {
  const [counter, setCounter] = useState<number>(initialValue);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    if(counter <maximunCount){
      setCounter(counter + 1);
    }
  };

useEffect(() =>{
if(counter < 10) return;

console.log('%cSe llego al valor maximo','color:red;background-color:black;')

const timmeline = gsap.timeline();
timmeline.to(counterElement.current,{y:-10,duration:0.2,ease:'ease.out'})
.to(counterElement.current,{y:0,duration:1,ease:'bounce.out'})
},[counter])
  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
