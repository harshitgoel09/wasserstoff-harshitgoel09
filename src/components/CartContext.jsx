import { createContext } from "react";

// Cart Context to manage cart count globally
const cartInfo = createContext({
    cartCount: 0
});

export default cartInfo;