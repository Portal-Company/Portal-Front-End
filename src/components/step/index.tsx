import { FaCheck, FaFile, FaUser } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"
import * as S from './styles'
import { StepProps } from "./type"

const Step:React.FC<StepProps>=({step})=>{
    return(
        <S.IconsContainer step={step}>
            <div>
                <div>
                    <div>
                        <FaUser/>
                    </div>
                    -----------------
                </div>
                <p>Pessoal</p>
            </div>
            <div>
                <div>
                    <div>
                        <FaFile/>
                    </div>
                    -----------------
                </div>
                <p>Documentos</p>
            </div>
            <div>
                <div>
                    <div>
                        <HiLocationMarker/>
                    </div>
                        -----------------
                </div>
                <p>Localização</p>
            </div>
            <div>
                <div>
                    <div>
                        <FaCheck/>
                    </div>
                </div>
                <p>Finalizar</p> 
            </div>
        </S.IconsContainer>
    )
}

export default Step;