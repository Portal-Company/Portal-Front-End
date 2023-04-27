import * as S from './styles'
import { FaTimes } from 'react-icons/fa'

const FormError=()=>{
    return(
        <S.WrapperContainer>
            <S.FormCard>
                <S.Paragraph>
                    Não foi possiver fazer o cadastramento na aplicação retifique os seus dados!
                </S.Paragraph>
                <S.Forms>
                    <div>
                        <FaTimes/>
                    </div>
                </S.Forms>
            </S.FormCard>
        </S.WrapperContainer>       
    )
}
export default FormError