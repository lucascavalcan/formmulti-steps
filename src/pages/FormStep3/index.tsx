import {useNavigate} from "react-router-dom";
import * as C from "./styles";
import {useForm, formReducer} from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {

    const navigate = useNavigate();

    const {state, dispatch} = useForm();

    useEffect( () => {
        if (state.name === "") {
            navigate("/")
        } else {
            dispatch({
                type: "setCurretStep",
                payload: 3    //passo atual
            });
        }
    }, [] );

    function handlepreviousStep() {
        navigate(-1);
    }

    function handleNextStep() {
            if (state.email !== "" && state.github !== "") {
                console.log(state);
                alert ("Concluído!")
            } else {
                alert ("Preencha os dados!")
            }
    }

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: "setEmail",
            payload: e.target.value
        });
    }

    function handleGitChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: "setGithub",
            payload: e.target.value
        });
    }
    
    return (
        <Theme>  {/* Tudo que for colocado dentro de Theme vai para a ára do Page (onde está o children) */}
            <C.Container>
                <p>Passo 3/3 </p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com os seus dados para que entremos em contato.</p>

                <hr/>

                <label>
                    Qual o seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />

                    Qual o seu github?
                </label>

                <label>
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGitChange}
                    />
                </label>

                <button onClick={handlepreviousStep}>Voltar</button>
                <button onClick={handleNextStep}>Finalizar</button>
            </C.Container>
        </Theme>
    );
}