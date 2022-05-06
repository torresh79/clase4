import {
  createContext,
  useState,
  useCallback,
  useContext,
  ReactNode,
} from "react";
import { usePresence } from "framer-motion";

type Context = {
  visible: boolean;
  message: string;
  timeout: number;
  open: (msg: string) => void;
  setTime: (time: number) => void;
};

const AlertContext = createContext<Context>({
  visible: false,
  message: "",
  timeout: 3000,
  open: () => {},
  setTime: () => {},
});

type Props = {
  children: ReactNode;
};

let timeoutId: number;

export const AlertContextProvider = ({ children }: Props) => {
  const [visible, setVisibility] = useState(false);
  const [message, setMessage] = useState("");
  const [ms, setMs] = useState(3000);
  const [isPresent] = usePresence();

  const open = useCallback(
    (msg: string) => {
      window.clearTimeout(timeoutId);
      setVisibility(isPresent);
      setMessage(msg);
      timeoutId = window.setTimeout(() => {
        setVisibility(!isPresent);
      }, ms);
    },
    [isPresent, ms]
  );

  const setTime = useCallback((time: number) => {
    setMs(time);
  }, []);

  return (
    <AlertContext.Provider
      value={{ visible, message, open, timeout: ms, setTime }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
