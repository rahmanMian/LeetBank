import './App.css';

/**
 * CreateBlock Component
 * 
 * This component renders a container with multiple block elements,
 * each representing a different algorithm or topic.
 *
 * @returns {JSX.Element} A div containing several blocks whcih users will be adding later.
 */
//change documentation later after fin function
function CreateBlock() {
    return (
//have to add ids later on insertion
       <div className="blockContainer">
            <div className='block'>Two Sum</div>
            <div className='block'>Three Sum</div>
            <div className='block'>Daily Temperatures</div>
            <div className='block'>Car Fleet</div>
            <div className='block'>Valid Palidrome</div>
       </div>
    );
  }
  
  export default CreateBlock;
  