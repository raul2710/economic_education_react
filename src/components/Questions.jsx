import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function Questions(props) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Escolha uma resposta');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    if (value === props.correctValue) {
      setHelperText('Acertou!');
      setError(false);
    } else if (value.length === 0) {
      setHelperText('Selecione uma opção.');
      setError(true);
    } else if (value !== props.correctValue) {
      setHelperText('Errado!');
      setError(true);
    } 
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">{props.question}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value={props.value1} control={<Radio />} label={props.label1} />
          <FormControlLabel value={props.value2} control={<Radio />} label={props.label2}  />
          <FormControlLabel value={props.value3} control={<Radio />} label={props.label3}  />
          <FormControlLabel value={props.value4} control={<Radio />} label={props.label4}  />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Corrigir
        </Button>
      </FormControl>
    </form>
  );
}
