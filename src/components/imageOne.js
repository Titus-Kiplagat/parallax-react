import { Parallax } from "react-parallax";
import Nasa from "../images/nasa.jpg"

const ImageOne= () => (
	<Parallax
		className="image"
    bgImage= {Nasa}
    strength={800}
  >
		<div className="content">
			<span className="image-text">A trip to space</span>
		</div>
  </Parallax>
);

export default ImageOne;