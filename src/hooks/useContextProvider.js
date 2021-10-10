import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const useContextProvider = () => {
    return useContext(AuthContext)
}

export default useContextProvider;