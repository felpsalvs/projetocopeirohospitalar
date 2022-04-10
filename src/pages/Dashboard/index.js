import Header from '../../components/Header';
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

export default function Dashboard(){
    const { signOut } = useContext(AuthContext);

    return(
        <div>
            <Header/>
            <h1>página de dashboard</h1>
            <button onClick={()=> signOut()}>Fazer logout</button>
        </div>
    )
}