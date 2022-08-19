import React, { useState, useRef } from 'react'
import { convinces, objs } from './utils/vietgeo';
import getQhx from './utils/getQhx';

import { 
  TextField,
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  MenuItem,
  Select,
  Button
} from '@mui/material';

function ElementForm(props) {
  let { id, name, reference } = props;
  return (
    <FormControl fullWidth sx={{ m : 1 }}>
      <InputLabel htmlFor={id}>{name}</InputLabel>
      <OutlinedInput 
        id={id}
        label={name}
        ref={reference}
      />
    </FormControl>
  );
}

function TfTime(data) {
  let { value, label } = data;
  return <Grid xs={4}>
    <FormControl fullWidth>
      <TextField value={value} disabled variant="outlined" label={label} />
    </FormControl>
  </Grid>
} 

function Form() {
  let [ convince, setConvinceId ] = useState('');
  let [ qhx_index, setQhxIndex ] = useState("");

  let anotherAddrRef = useRef();  
  let addrRef = useRef();

  let date = new Date();
  let [ dt_form, setDtForm ] = useState({
    hour : date.getHours(),
    minute : date.getMinutes(),
    second : date.getSeconds()
  });

  return (
    <div>
      <Typography style={{ textAlign : "center", background : "blue" }} variant="h2" component="h2">Đơn khai báo y tế</Typography>
      <Grid container>
        <Grid xs={6}>
          <Typography style={{ textAlign : "center" }} variant="h4" component="h4">Thông tin cá nhân</Typography>
          <FormControl fullWidth sx={{ m : 1 }}>
            <Grid container>
              <TfTime value={dt_form.hour} label="Giờ" />
              <TfTime value={dt_form.minute} label="Phút" />
              <TfTime value={dt_form.second} label="Giây" />
            </Grid>
           </FormControl>
          <ElementForm id="full-name" name="Họ và tên" />
          <ElementForm id="phone" name="Số điện thoại" />
          <ElementForm id="email" name="email"/>
          <FormControl fullWidth sx={{ m : 1 }}>
            <Grid container>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="convince">Tỉnh / Thành phố</InputLabel>
                  <Select
                    id="convince"
                    value={convince}
                    onChange={(vl) => {
                      setConvinceId(vl.target.value);
                      setQhxIndex("");
                    }}
                    label="Tỉnh / Thành phố"
                  >
                    {convinces.map((c, idx) => <MenuItem key={idx} value={c}>{c}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="another-addr">Quận/Huyện/Xã</InputLabel>
                  <Select
                    id="another-addr"
                    ref={anotherAddrRef}
                    value={qhx_index}
                    label="Quận/Huyện/Xã"
                    onChange={(e) => setQhxIndex(e.target.value)}
                  >
                    {objs[getQhx(convince)].map((o, idx) => <MenuItem key={idx} value={o}>{o}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </FormControl>
          <ElementForm id="address" name="Địa chỉ nhà" reference={addrRef} />
        </Grid>
        <Grid xs={6}>
          {/* Xây dựng các triệu chứng */}
        </Grid>
      </Grid>
      <Button variant="contained" fullWidth>Gửi đơn</Button>
    </div>
  )
}

export default Form;