import  { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type User = {
  id: number;
  fullName: string;
  email: string;
  role: "admin" | "client";
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  registerUsers: (data: { user: User}) => void;
  login: (data: { token: string; user: User }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // restore user + token from localstorage
  useEffect(() =>  {

    const stored = localStorage.getItem("auth");
    if(stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.user || null);
      setToken(parsed.token || null)
    }
  } , []);


  const registerUsers = (data: {user: User}) => {
    setUser(data.user)
    localStorage.setItem("auth" , JSON.stringify({ user: data.user }))
  }

  const login = (data: { token: string; user: User }) => {
    setUser(data.user)
    setToken(data.token);
    localStorage.setItem("auth", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout , registerUsers }}>
      {children}
    </AuthContext.Provider>
  );
};

export const  useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
