import { useRef, useEffect, FormEvent } from "react";

import StyledForm from "./styles";

interface IFormProps {
  id: string;
  isReset: boolean;
  children: React.ReactNode;
  setValid: (isValid: boolean) => void;
  onSubmit:
    | ((event: FormEvent<HTMLFormElement>) => Promise<void>)
    | ((event: FormEvent<HTMLFormElement>) => void);
}

const Form = ({ id, isReset, children, setValid, onSubmit }: IFormProps) => {
  const form = useRef<HTMLFormElement>(null);

  const handleOnChange = () => setValid(form.current!.checkValidity());

  useEffect(() => {
    if (isReset) form.current!.reset();
  }, [isReset]);

  return (
    <StyledForm
      id={id}
      ref={form}
      onChange={handleOnChange}
      onSubmit={onSubmit}
    >
      {children}
    </StyledForm>
  );
};

export default Form;
