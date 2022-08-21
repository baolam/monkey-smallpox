import React, { Component } from 'react';

import { 
  FormControl,
  TextField,
  MenuItem
} from '@mui/material';

const Unit = (prop) => {
  let { rst, index, onChange } = prop;
  
  return (
    <FormControl fullWidth sx={{ m : 1 }}>
      <TextField
        variant='outlined'
        label={prop.sympthon}
        select
        value={rst === 1 ? "Có" : "Không"}
        onChange={(e) => {
          if (e.target.value === "Có") {
            onChange(index, 1);
          } else {
            onChange(index, 0);
          }
        }}
      >
        <MenuItem value="Có">Có</MenuItem>
        <MenuItem value="Không">Không</MenuItem>
      </TextField>
    </FormControl>
  )
}

class SympthonForm extends Component {
  constructor(props) {
    super(props);
    
    let l = props.sympthons.length;
    let a = new Array(l);
    for (let i = 0; i < l; i++)
      a[i] = 0;

    this.state = {
      sympthons : a
    };

    this.sympthons = props.sympthons;
    this.modifyFine = this.modifyFine.bind(this);
  }
  
  render() {
    let { sympthons } = this;
    
    return (
      <div>
        {sympthons.map((sympthon, idx) => <Unit key={idx} sympthon={sympthon} 
          rst={this.state.sympthons[idx]} onChange={this.modifyFine} index={idx} />)
        }
      </div>
    )
  }

  modifyFine(index, vl) {
    let fines = this.state.sympthons;
    fines[index] = vl;
    this.setState(fines);
  }
}

export default SympthonForm;