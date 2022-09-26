import React from "react";

const Searchbox = ({searchfield, changes}) => {
    return (
        <div>
          <input 
            className="pa3 ba b--green bg-lightest-blue" 
            type="search"
            placeholder="Search robots"
            onChange={changes} />
        </div>
    );
}
export default Searchbox;