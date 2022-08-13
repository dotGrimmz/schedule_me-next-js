import { PanelContainer, CustomInput, LabelText } from "./LoginPanel.styles";
import { FC } from "react";

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
      <LabelText>User Name</LabelText>
      <CustomInput
        type="text"
        value={userName}
        name="userName"
        onChange={handleCredentialValueChange}
      />
      <LabelText>Password</LabelText>
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
