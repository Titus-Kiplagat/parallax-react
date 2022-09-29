
import { Parallax } from "react-parallax";
import Sattelite from "../images/sattelite.jpg"

const ImageTwo = () => (
	<Parallax
		className="image"
		bgImage={Sattelite}
    strength={800}
  >
		<div className="content">
			<span className="image-text">A trip to space</span>
		</div>
  </Parallax>
);

export default ImageTwo;