// import React from 'react';

// export default () => {
//   return <div>hello-world</div>
// }

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default () => {
  useEffect(() => {
    console.log(123)
  }, []);
  return <div>components</div>
}