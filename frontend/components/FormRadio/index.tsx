import {
  StyledFormRadio,
  StyledFormRadioLabel,
  StyledFormRadioOptions,
  StyledFormRadioOptionsInput,
  StyledFormRadioOptionsLabel,
} from "./styles";

interface IFormRadiorops {
  id: string;
  label: string;
  options?: string[];
}

const FormRadio = ({ id, label, options }: IFormRadiorops) => {
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
              required
              name={id}
              type="radio"
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

export default FormRadio;
