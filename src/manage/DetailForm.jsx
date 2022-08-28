import React from 'react'
import { useSearchParams } from 'react-router-dom';

function DetailForm() {
  const [ searchParams ] = useSearchParams();
  
  return (
    <div>DetailForm</div>
  )
}

export default DetailForm;