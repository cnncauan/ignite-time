import { ButtonContainer, ButtonVariante } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariante;
}

export function Button({ variant = "primary" }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
