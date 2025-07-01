import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgess] = useState("");

  function showCart() {
    setUserProgess("cart");
  }

  function hideCart() {
    setUserProgess("");
  }

  function showCheckout() {
    setUserProgess("checkout");
  }

  function hideCheckout() {
    setUserProgess("");
  }

  const userProgressContext = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext value={userProgressContext}>
      {children}
    </UserProgressContext>
  );
}

export default UserProgressContext;
