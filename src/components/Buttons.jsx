import React from 'react';

import Number from './Number';
import Utility from './Utility';
import Operation from './Operation';
import Calculate from './Calculate';

function Buttons() {
  return(
    <div className='grid grid-cols-4 place-items-center gap-4 text-4xl font-semibold'>
      <Utility   value='AC'   ancho="w-18"/>
      <Utility   value='+/-'  ancho="w-18"/>
      <Utility   value='%'    ancho="w-18"/>
      <Operation value='÷'    ancho="w-18"/>
      <Number    value='7'    ancho="w-18"/>
      <Number    value='8'    ancho="w-18"/>
      <Number    value='9'    ancho="w-18"/>
      <Operation value='x'    ancho="w-18"/>
      <Number    value='4'    ancho="w-18"/>
      <Number    value='5'    ancho="w-18"/>
      <Number    value='6'    ancho="w-18"/>
      <Operation value='-'    ancho="w-18"/>
      <Number    value='1'    ancho="w-18"/>
      <Number    value='2'    ancho="w-18"/>
      <Number    value='3'    ancho="w-18"/>
      <Operation value='+'    ancho="w-18"/>
      <Number    value='0'    ancho="w-full" space="col-span-2"/>
      <Number    value='.'    ancho="w-18"/>
      <Calculate />
    </div>
  );
}

export default Buttons;