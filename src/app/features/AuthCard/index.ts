import { AuthCardLabel } from "@features/AuthCard/views/AuthCardLabel";
import { AuthCardLogo } from "@features/AuthCard/views/AuthCardLogo";
import { AuthCardRoot } from "@features/AuthCard/views/AuthCardRoot";
import { AuthForm } from "@features/AuthCard/views/forms/AuthForm";

export const AuthCard = {
  root: AuthCardRoot,
  label: AuthCardLabel,
  logo: AuthCardLogo,
  form: {
    auth: AuthForm,
  },
};
