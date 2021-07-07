import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import "../assets/sass/components/gifGrid.sass";

function GifGrid({ hero }) {
  // const [images, setImages] = useState([]);

  /*
    const [counter, setCounter] = useState(0)

    //useEffect([func], [dependencies])
    */
  // useEffect(() => {
  //     getGifs(hero).then((imgs) => setImages(imgs));
  // }, [hero]);

  //getGifs();

  const { data } = useFetchGifs(hero);

  const items = data.map((img) => (
    <GifGridItem key={img.id} {...img} className="grid" />
  ));

  return (
    <>
      <h2 className="animate__animated animate__fadeIn search-term">{hero}</h2>

      <div className="gif-container">{items}</div>
    </>
  );
}

GifGrid.propTypes = {
  hero: PropTypes.string.isRequired,
};

export default GifGrid;
