import React from 'react';

const Stateless =  props => {
    return(
      <div>
        <h4>What a boring old stateless component, I am!</h4>
        <p>But at least I can say your name, {props.name}</p>
        <p>Hint, your name is a prop! :)</p>
      </div>
    )

}

export default Stateless;
