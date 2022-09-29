import React from 'react';

import Number from './Number';
import Utility from './Utility';
import Operation from './Operation';
import Calculate from './Calculate';

function Buttons() {
  return(
    <div className='grid grid-cols-4 place-items-center gap-4 text-4xl font-semibold'>
      <Utility value='AC'/>
      <Utility value='+/-'/>
      <Utility value='%'/>
      <Operation value='÷'/>
      <Number value='7'/>
      <Number value='8'/>
      <Number value='9'/>
      <Operation value='x'/>
      <Number value='4'/>
      <Number value='5'/>
      <Number value='6'/>
      <Operation value='-'/>
      <Number value='1'/>
      <Number value='2'/>
      <Number value='3'/>
      <Operation value='+'/>
      <Number value='0'/>
      <Number value='.'/>
      <Calculate />
    </div>
  );
}

export default Buttons;