import './App.css';

/**
 * renders a container with multiple block elements each representing a question.
 *
 * @function createBlock
 * @author Rahman Mian
 * @returns {JSX.Element} blockContainer - container containing div blocks.
 */
//change documentation later after fin function
function createBlock() {
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
  
  export default createBlock;
  