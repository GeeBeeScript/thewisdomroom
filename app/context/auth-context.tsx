import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { redirect, useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  googleSignIn: () => Promise<void>;
  logOut: () => Promise<void>;
  isLoading: Boolean | null;
  adminLogoutHandler: () => void;
  logTeacherIn: () => void;
  verifyTeacherStatus: () => void;
  emailPasswordSignup: (email: string, password: string) => Promise<User>;
  emailPasswordSignIn: (email: string, password: string) => Promise<User>;
  verifyUserStatus: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean | null>(true);
  const router = useRouter();
  console.log("user ", user, isLoading)

  const googleSignIn = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const emailPasswordSignup = async(email: string, password: string): Promise<User> => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    return user 
  }

  const logOut = async (): Promise<void> => {
    await signOut(auth);
    localStorage.removeItem("adminStatus")
  };

  const adminLogoutHandler = () => {
    if (!user && !isLoading) {
      redirect("/login");
    }
  };

  const verifyUserStatus = () => {
    if (!user && !isLoading) {
      redirect("/login");
    }
  };

  const emailPasswordSignIn = async (email: string, password: string): Promise<User> => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      return user
    } catch(err) {
      console.log("Sign in failed ", err)
      throw err
    }
  }

  const logTeacherIn = () => {
    const adminStatus = {
      isAdmin: true,
    };

    localStorage.setItem("adminStatus", JSON.stringify(adminStatus));
  };

  const verifyTeacherStatus = () => {
    const userIsAdmin = JSON.parse(
      localStorage.getItem("adminStatus") ?? "false",
    );

    if (!userIsAdmin) {
      redirect("/teacher/secure");
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    console.log("user ", user);
    console.log(isLoading);

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        logOut,
        isLoading,
        adminLogoutHandler,
        logTeacherIn,
        verifyTeacherStatus,
        emailPasswordSignup,
        emailPasswordSignIn,
        verifyUserStatus
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = (): AuthContextType  => {
  const context =  useContext(AuthContext);
  if (!context) {
    throw new Error("UserAuth must be used within an AuthContextProvider");
  }
  return context
};
