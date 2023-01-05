import React from 'react';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
// import NumberFormat, { InputAttributes } from 'react-number-format';

// MUI
// const NumberFormatCustom = React.forwardRef<
//   NumberFormat<InputAttributes>,
//   CustomProps
// >(function NumberFormatCustom(props, ref) {
//   const { onChange, ...other } = props;

//   return (
//     <NumberFormat
//       {...other}
//       getInputRef={ref}
//       onValueChange={(values) => {
//         onChange({
//           target: {
//             name: props.name,
//             value: values.value,
//           },
//         });
//       }}
//       thousandSeparator
//       isNumericString
//       prefix="$"
//     />
//   );
// });

// interface State {
//   textmask: string;
//   numberformat: string;
// }

// export default function FormattedInputs() {
//   const [values, setValues] = React.useState<State>({
//     textmask: '(100) 000-0000',
//     numberformat: '1320',
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };
// }

const PriceField = () => {
    return (
<>
            {/* <TextField
              label="react-number-format"
              //   value={values.numberformat}
              //   onChange={handleChange}
              name="numberformat"
            //   id="formatted-numberformat-input"
              InputProps={{
                  // inputComponent: NumberFormatCustom as any,
                }}
                variant="standard"
                /> */}
            <FormControl>
              <InputLabel htmlFor="component-outlined">Price</InputLabel>
              <OutlinedInput
                // label="react-number-format"
                  value={values.numberformat}
                //   onChange={handleChange}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                    // inputComponent: NumberFormatCustom as any,
                  }}
                  variant="standard"
                // id="component-outlined"
                //   defaultValue="Composed TextField"
                label="Price"
                />
            </FormControl>
</>
    
    );
}

export default PriceField;
