import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '800px', marginTop:'30px', boxShadow:' inset -2px 0px 10px black'}}>
            { props.children };
        </div>
    );
};

export default Scroll;