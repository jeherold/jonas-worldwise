import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchparams, setSearchParams] = useSearchParams();
  const lat = searchparams.get('lat');
  const lng = searchparams.get('lng');
  return (
    <div className={styles.mapContainer}>
      Map
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change Pos
      </button>
    </div>
  );
}

export default Map;
