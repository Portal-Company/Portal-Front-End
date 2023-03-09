import * as S from './styles'
import Input from "../input"
import Select from '../select'
import { useValidateData } from '../../views/studentSubscription/hooks/useValidateData'
import { UseFetchData } from '../../views/studentSubscription/hooks/useFetchData'
import { useState } from 'react'
import { api } from '../../services/api'

const FormStep1=()=>{
    const { formik } = useValidateData();
    
    const {
        gender
    }=UseFetchData();
    return(
        <S.WrapperContainer onSubmit={formik.handleSubmit}>
            <S.FormCard>
                <S.Paragraph>
                    Para iniciar o processo de abertura de conta, precisamos de validar o seu nº de telemóvel.
                </S.Paragraph>
                <S.Forms>
                    <Input 
                        placeholder='O seu Nome Completo'
                        name="nomeCompleto"
                        onChange={formik.handleChange} 
                        type='text'
                    />
                    <S.Select name="generoId" id="">
                        <option value={""} key={""}>genero</option>
                        {
                            gender?.map(({id,nome})=>
                                (<option value={id} key={id}>{nome}</option>))    
                        }
                    </S.Select>

                    <Input 
                        placeholder='Data de nascimento' 
                        type='date'
                        name="dataNasc"
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder='O seu Nº do BI' 
                        type='text'
                        name="numeroBi"
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder='O seu numero de telefone' 
                        type='text'
                        name="numeroTelefone"
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder='O seu email' 
                        type='email'
                        name="email"
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder='O sua foto' 
                        name="foto" 
                        type='file'
                        name="photoUrl"
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder='O sua foto' 
                        name="pdfBi" 
                        type='file'
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder='O sua foto' 
                        name="pdfCertificado" 
                        type='file'
                        onChange={formik.handleChange}
                    />
                    <Input 
                        placeholder='O sua foto' 
                        name="pdfDeclaracao" 
                        type='file'
                        onChange={formik.handleChange}
                    />
                    <textarea
                        placeholder='A sua descrição' 
                        name="descricao" 
                        onChange={formik.handleChange}
                    >
                    </textarea>
                </S.Forms>
                <button type="submit">Continuar</button> 
            </S.FormCard>
        </S.WrapperContainer>       
    )
}
export default FormStep1
