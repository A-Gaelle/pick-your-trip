import {
  StyledFormRadio,
  StyledFormRadioLabel,
  StyledFormRadioOptions,
  StyledFormRadioOptionsInput,
  StyledFormRadioOptionsLabel,
} from "./styles";

interface IFormCheckboxops {
  id: string;
  label: string;
  options?: string[];
}

const FormCheckbox = ({ id, label, options }: IFormCheckboxops) => {
  return (
    <StyledFormRadio>
      <StyledFormRadioLabel>{label}</StyledFormRadioLabel>
      <StyledFormRadioOptions>
        {options?.map((option, index) => (
          <StyledFormRadioOptionsLabel
            key={`navItem-${index}`}
            htmlFor={`${id}-${option}`}
          >
            <StyledFormRadioOptionsInput
              name={id}
              type="checkbox"
              id={`${id}-${option}`}
              value={`${id}-${option}`}
            />
            <span>{option}</span>
          </StyledFormRadioOptionsLabel>
        ))}
      </StyledFormRadioOptions>
    </StyledFormRadio>
  );
};

export default FormCheckbox;
