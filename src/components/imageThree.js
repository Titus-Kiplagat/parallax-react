
import { Parallax } from "react-parallax";
import SpaceStation from "../images/spaceStation.jpg"

const ImageThree= () => (
	<Parallax
		className="image"
    bgImage= {SpaceStation}
    strength={800}
  >
		<div className="content">
			<span className="image-text">A trip to space</span>
		</div>
  </Parallax>
);

export default ImageThree;