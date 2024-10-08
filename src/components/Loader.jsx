// import { Html, useProgress } from "@react-three/drei";

// const Loader = () => {

//   const { progress } = useProgress();

//   return (
//     <Html>
//       <span className="canvas-load"></span>
//       <p style={{fontSize: 20, color: '#f1f1f1', fontWeight: 800, marginTop: 40}}>{progress.toFixed(2)}%</p>
//     </Html>
//   )
// }

// export default Loader

import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="relative w-20 h-20 mt-40 transform-style-3d perspective-800">
        <div className="absolute w-full h-full rounded-full border-b-2 border-blue-400 animate-rotate1"></div>
        <div className="absolute w-full h-full rounded-full border-b-2 border-blue-400 animate-rotate2"></div>
        <div className="absolute w-full h-full rounded-full border-b-2 border-blue-400 animate-rotate3"></div>
      </div>
      <p className="text-2xl text-blue-400 font-bold mt-5">
        {/* {progress.toFixed(2)}% */}
      </p>
    </Html>
  );
};

export default Loader;
