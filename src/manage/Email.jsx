import React, { useRef } from 'react'

import { Typography, Button, TextField, FormControl } from '@mui/material';
import ElementForm from '../utils/ElementForm';

function Email() {
  let fullnameRef = useRef();
  let emailRef = useRef();
  let subjectRef = useRef();
  let msgRef = useRef();
  let disabled = false;

  function sendMail() {
    let dt = {
      fullname : fullnameRef.current.value,
      email : emailRef.current.value,
      subject : subjectRef.current.value,
      msg : msgRef.current.value
    }
    console.log(dt);
  }

  return (
    <div>
      <Typography style={{ textAlign : "center" }} variant="h3" component="h3">Gửi email cho người dùng cụ thể</Typography>
      <ElementForm id="fullname" name="Họ và tên của người đến" reference={fullnameRef} disabled={disabled} />
      <ElementForm id="email" name="Email của người nhận" reference={emailRef} disabled={disabled} />
      <ElementForm id="subject" name="Tiêu đề của bức thư" reference={subjectRef} disabled={disabled} />
      <FormControl fullWidth sx={{ m : 1 }}>
        <TextField 
          id="message"
          multiline
          rows={4}
          label="Tin nhắn đơn giản"
          inputRef={msgRef}
        />
      </FormControl>
      <FormControl fullWidth sx={{ m : 1 }}>
        <Button variant="contained" onClick={sendMail}>Gửi email</Button>
      </FormControl>
    </div>
  )
}

export default Email;