import {createContext} from "react";


const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

export function UserProgressContextProvider({ children }) {
    return <UserProgressContext>{children}</UserProgressContext>;
}

export default UserProgressContext;