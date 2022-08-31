import React, { useState, useRef } from 'react'
import { convinces, objs } from '../utils/vietgeo';
import getQhx from '../utils/getQhx';

import {  
  MenuItem,
  Select,
  FormControl,
  Grid,
  InputLabel
} from '@mui/material';

function PersonalInformation(props) {
  function value(obj) {
    return obj !== undefined ? obj : "";
  }
  
  let [ convince, setConvinceId ] = useState(
    value(props.convince)
  );
  let [ qhx_index, setQhxIndex ] = useState(
    value(props.qhx)
  );
  
  let anotherAddrRef = useRef();

  return (
    <FormControl fullWidth sx={{ m : 1 }}>
      <Grid container>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="convince">Tỉnh / Thành phố</InputLabel>
            <Select
              disabled={props.disabled}
              id="convince"
              value={convince}
              onChange={(vl) => {
                setConvinceId(vl.target.value);
                props.callback(convince, "");
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
              disabled={props.disabled}
              id="another-addr"
              ref={anotherAddrRef}
              value={qhx_index}
              label="Quận/Huyện/Xã"
              onChange={(e) => {
                props.callback(convince, e.target.value);
                setQhxIndex(e.target.value);
              }}
            >
              {objs[getQhx(convince)].map((o, idx) => <MenuItem key={idx} value={o}>{o}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </FormControl>
  )
}

export default PersonalInformation;