import React, { createContext, useState, FC, useMemo, useEffect } from "react";
import { SetState, Maybe } from "../../types/utility.types";
import { User } from "../../types/user.types";
import { userService } from "../../service/user.service";
import { useSnackbar } from "notistack";

export const AuthContext = createContext<AuthContext | undefined>(undefined);

export type AuthContext = {
  auth: Maybe<User>;
  setAuth: SetState<Maybe<User>>;
  loading: boolean;
  setLoading: SetState<boolean>;
  login: (userName: string, password: string) => void;
  loggedIn: boolean;
  setLoggedIn: SetState<boolean>;
};

type AuthUser = Maybe<User>;
export const AuthContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [auth, setAuth] = useState<AuthUser>(undefined);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoggedIn(!!auth?.id);
  }, [auth]);

  const login = async (userName: string, password: string) => {
    setLoading(true);
    await userService
      .authenticate({ userName, password })
      .then((res) => {
        setAuth(res);
        enqueueSnackbar(`Welcome ${res.userName}`, { variant: "success" });
      })
      .catch((e) => {
        enqueueSnackbar(e, { variant: "error" });
      })
      .finally(() => setLoading(false));
  };

  const context = useMemo(
    () => ({
      loading,
      login,
      setLoading,
      auth,
      setAuth,
      loggedIn,
      setLoggedIn,
    }),
    [loading, auth, loggedIn]
  );
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
