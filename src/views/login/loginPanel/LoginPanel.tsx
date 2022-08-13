import { PanelContainer, CustomInput } from "./LoginPanel.styles";
import { FC } from "react";
import { useLogin } from "../hooks/useLogin";

type LoginCredentials = {
  userName: string;
  password: string;
  handleCredentialValueChange: (e: React.SyntheticEvent) => void;
};

const LoginPanel: FC<LoginCredentials> = ({
  userName,
  password,
  handleCredentialValueChange,
}) => {
  return (
    <PanelContainer>
      <CustomInput
        type="text"
        value={userName}
        name="userName"
        onChange={handleCredentialValueChange}
      />
      <CustomInput
        type="password"
        name="password"
        value={password}
        onChange={handleCredentialValueChange}
      />
    </PanelContainer>
  );
};

export default LoginPanel;
