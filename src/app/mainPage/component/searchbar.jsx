
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

const searchbar = ({toggleSearchText})=>{
  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        spellCheck="false"
        placeholder="Black Shirt"
        onChange={(e) => toggleSearchText(e.target.value)}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default searchbar;