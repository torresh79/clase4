import {
  createContext,
  useState,
  useCallback,
  useContext,
  ReactNode,
} from "react";

type Context = {
  visible: boolean;
  trigger: () => void;
  close: () => void;
};

const MenuContext = createContext<Context>({
  visible: false,
  trigger: () => {},
  close: () => {},
});

type Props = {
  children: ReactNode;
};

export const MenuContextProvider = ({ children }: Props) => {
  const [visible, setOpen] = useState(false);

  const trigger = useCallback(() => setOpen((visible) => !visible), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <MenuContext.Provider value={{ visible, trigger, close }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};
