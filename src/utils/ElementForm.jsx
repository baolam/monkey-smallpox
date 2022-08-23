import React from 'react'
import {
  FormControl,
  InputLabel,
  OutlinedInput
} from '@mui/material';

function ElementForm(props) {
  let { id, name, reference, disabled } = props;

  return (
    <FormControl fullWidth sx={{ m : 1 }} disabled={disabled} >
      <InputLabel htmlFor={id}>{name}</InputLabel>
      <OutlinedInput 
        id={id}
        label={name}
        inputRef={reference}
      />
    </FormControl>
  );
}

export default ElementForm;