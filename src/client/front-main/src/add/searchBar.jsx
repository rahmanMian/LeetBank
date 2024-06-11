import { FaSearch} from "react-icons/fa";
import "./searchBar.css";

/**
 * Renders a container with multiple block elements, each representing a question.
 *
 * @function SearchBar
 * @author Rahman Mian 
 * @param {Object[]} questionArray - Array of question objects.
 * @returns {JSX.Element} blockContainer - Container containing div blocks.
 */
export function SearchBar() {

    return (
        <div className="searchContainer">
           <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type to search..." />

           </div>
        </div>
    );
};
