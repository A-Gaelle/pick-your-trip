import StyledFormRow from "./styles";

interface IFormRowProps {
  isRadio?: boolean;
  children: React.ReactNode;
}

const FormRow = ({ isRadio = false, children }: IFormRowProps) => (
  <StyledFormRow isRadio={isRadio}>{children}</StyledFormRow>
);

export default FormRow;
