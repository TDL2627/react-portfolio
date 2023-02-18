// import { ExtrudeGeometry } from "three";

// const TextGeometry = ({ text, parameters = {} }) => {
//   const font = parameters.font;

//   if (font === undefined) {
//     return <ExtrudeGeometry args={[null]} />; // generate default extrude geometry
//   } else {
//     const shapes = font.generateShapes(text, parameters.size);

//     // translate parameters to ExtrudeGeometry API
//     parameters.depth = parameters.height !== undefined ? parameters.height : 50;

//     // defaults
//     if (parameters.bevelThickness === undefined) parameters.bevelThickness = 10;
//     if (parameters.bevelSize === undefined) parameters.bevelSize = 8;
//     if (parameters.bevelEnabled === undefined) parameters.bevelEnabled = false;

//     return <ExtrudeGeometry args={[shapes, parameters]} />;
//   }
// };

// export default TextGeometry;
