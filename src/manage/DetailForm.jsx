import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import { Typography } from '@mui/material';
import Form from '../Form';
import InvolvedGraph from '../involvedGraph/InvolvedGraph';

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
      <Typography variant="h2" component="h2" style={{ textAlign : "center" }}>Mối quan hệ của đối tượng</Typography>
      <InvolvedGraph />
    </>
  )
}

export default DetailForm;