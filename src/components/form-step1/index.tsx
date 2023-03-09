import * as S from './styles'
import Input from "../input"

const FormStep1=()=>{
    return(
        <S.WrapperContainer>
                <S.FormCard>
                    <S.Paragraph>
                        Para iniciar o processo de abertura de conta, precisamos de validar o seu nº de telemóvel.
                    </S.Paragraph>
                    <S.Forms>
                        <Input placeholder='O seu Nome' type='text'/>
                        <Input placeholder='O seu Nº do BI' type='text'/>
                        <Input placeholder='O seu Contacto' type='text'/>
                        <Input placeholder='A sua Localização' type='text'/>
                        <Input placeholder='Data de nascimento' type='date'/>
                        <label htmlFor="">Genero</label>
                    <div>
                        <S.Field>
                            <input placeholder='' type='radio'/>
                            <label htmlFor="">Masculino</label>
                        </S.Field>
                        <S.Field>
                            <input placeholder='' type='radio'/>
                            <label htmlFor="">Femenino</label>
                        </S.Field>
                    </div>
                    <Input placeholder='Parentesco' type='text'/>
                </S.Forms>
            </S.FormCard>
        </S.WrapperContainer>       
    )
}
export default FormStep1