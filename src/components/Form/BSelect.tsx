import { TSelectInput } from "@/data/selectOptions";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label: string;
  required?: boolean;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  sx?: SxProps;
  options: TSelectInput[];
};

const BSelect = ({ name, label, variant, size, sx, options }: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange, ...field },
        fieldState: { error },
      }) => (
        <FormControl
          fullWidth
          variant={variant}
          size={size || "small"}
          sx={sx}
          error={!!error}
        >
          <InputLabel id={`${name}-label`}>{label}</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={`${name}-select`}
            value={value}
            label={label}
            onChange={onChange}
          >
            {options?.map((item: TSelectInput) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
export default BSelect;
