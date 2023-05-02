
import * as S from './styles'
import Input from "../input"
import { Values, ValuesR } from '../../views/resistrationTest/type'

interface MyComponentProps {
    handleNextStep: (newData:Values) =>void;
    data:Values;
}

const FormStep2:React.FC<MyComponentProps>=({handleNextStep , data:ValuesR})=>{
    
    return(
        <S.WrapperContainer>
            <S.FormCard>
                <S.Paragraph>
                    Para iniciar o processo de abertura de conta, precisamos de validar o seu nº de telemóvel.
                </S.Paragraph>
                <S.Forms>
                    <Input 
                        placeholder='O sua foto' 
                        type='file'
                        name="photoUrl"
                    />
                    <Input placeholder='O sua foto' name="pdfBi" type='file'/>
                    <Input placeholder='O sua foto' name="pdfCertificado" type='file'/>
                    <Input placeholder='O sua foto' name="pdfDeclaração" type='file'/>
                </S.Forms>
            </S.FormCard>
        </S.WrapperContainer>       
    )
}
export default FormStep2