import {useNavigate} from "react-router-dom";
import * as C from "./styles";
import {useForm, formReducer} from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {

    const navigate = useNavigate();

    const {state, dispatch} = useForm();

    useEffect( () => {
        dispatch({
            type: "setCurretStep",
            payload: 1    //passo atual
        });
    }, [] );

    function handleNextStep() {
        if (state.name !== "") {
            navigate("/step2");
        } else {
            alert ("Preencha os dados!")
        }
    }

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: "setName",
            payload: e.target.value
        });
    }
    
    return (
        <Theme>  {/* Tudo que for colocado dentro de Theme vai para a ára do Page (onde está o children) */}
            <C.Container>
                <p>Passo 1/3 </p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}