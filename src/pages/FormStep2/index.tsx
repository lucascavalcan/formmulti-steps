import {useNavigate} from "react-router-dom";
import * as C from "./styles";
import {useForm, formReducer} from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import {SelectOption} from "../../components/SelectOption";

export const FormStep2 = () => {

    const navigate = useNavigate();

    const {state, dispatch} = useForm();

    useEffect( () => {
        if (state.name === "") {
            navigate("/")
        } else {
            dispatch({
                type: "setCurretStep",
                payload: 2    //passo atual
            });
        }
    }, [] );

    function handleNextStep() {
        if (state.name !== "") {
            navigate("/step3");
        } else {
            alert ("Preencha os dados!")
        }
    }

    function handlepreviousStep() {
        navigate(-1);
    }

    function setLevel(level: number) {
        dispatch ({
            type: "setLevel",
            payload: level
        })
    }

    
    return (
        <Theme>  {/* Tudo que for colocado dentro de Theme vai para a ára do Page (onde está o children) */}
            <C.Container>
                <p>Passo 2/3 </p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com o seu estado atual, profissionalmente.</p>

                <hr/>

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos."
                    icon="👶"
                    selected = {state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais."
                    icon="😎"
                    selected = {state.level === 1}
                    onClick={()=>setLevel(1)}
                />
                <button onClick={handlepreviousStep}>Voltar</button>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}