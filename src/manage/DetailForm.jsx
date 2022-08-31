import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import Form from '../Form';

function DetailForm() {
  const [ searchParams ] = useSearchParams();
  const [ form, setForm ] = useState({});

  useEffect(() => {
    // Gọi api lấy dữ liệu đối tượng
    let citizen = searchParams.get("form");
  }, [searchParams]);

  return (
    <>
      <Form disabled form={form} />
    </>
  )
}

export default DetailForm;