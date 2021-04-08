import React, { useEffect, useState } from 'react';

export default () => {

  useEffect(() => {
    console.log('hello-world');
  }, []);

  return <div>hello-world</div>
}