import {useNavigate} from "react-router-dom";
import * as C from "./styles";
import { Theme } from "../../components/Theme";

export const FormStep1 = () => {
    
    const navigate = useNavigate();

    function handleNextClick() {
        navigate("/step2")
    }
    
    return (
        <Theme>  {/* Tudo que for colocado dentro de Theme vai para a ára do Page (onde está o children) */}
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                    />
                </label>
                <button onClick={handleNextClick}>Próximo</button>
            </C.Container>
        </Theme>
    );
}