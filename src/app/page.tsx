import AnimatedCursor from "react-animated-cursor";
import Landing from "./Landing/page";

export default function Home() {
  return (
    <div className="bg-[#F4EEE4]">  
      {/* <AnimatedCursor
        innerSize={4}
        outerSize={70}
        outerAlpha={0.2}
        innerScale={3}
        outerScale={0.2}
        color='28, 25, 65'
        outerStyle={{
          border: "3px solid black",
        }}
        innerStyle={{
          backgroundColor: "black"
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />   */}
      <Landing/>
    </div>
  );
}
