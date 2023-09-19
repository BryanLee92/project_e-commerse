
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

export default function searchbar ({toggleSearchText}){
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
