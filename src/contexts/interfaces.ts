export interface AuthContextInterface {
  user: string;
  login: (data: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
