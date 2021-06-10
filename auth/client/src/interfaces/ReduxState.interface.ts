interface AuthInterface {
  authenticated?: string;
  errorMessage?: string;
}

interface FormInterface {}

interface ThemeInterface {
  darkMode?: boolean;
  errorMessage?: string;
}

export interface ReduxState {
  auth: AuthInterface;
  form: FormInterface;
  theme: ThemeInterface;
}

export interface StateToProps {
  auth?: string;
  darkMode?: boolean;
}
