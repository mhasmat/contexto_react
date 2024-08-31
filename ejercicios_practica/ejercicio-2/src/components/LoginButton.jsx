import { useContext } from "react"
import { CurrentUserContext } from "../context/CurrentUserContext"
import Button from "./Button";


const LoginButton = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    if(currentUser.name !== "") {
        return <p>Hola {currentUser.name}, te esperábamos!</p>;
    }

  return (
    <Button onClick={() => {
        setCurrentUser({name: "Martín"});
    }}>
        Login
    </Button>
  );
}

export default LoginButton;