import {useState} from "react"
import {Formik,Form,Field} from "formik"

const StudentSubscriptionTest = () => {
    const [data,setData]=useState({
        nomeCompleto:"",
        sexo:"",
        dataNasc:"",
        numeroTelefone:"",
        email:"",
        tipoIdentificacao:"",
        tipoCertificacaoEscolar:"",
        codigoDocumento:"", 
        photo: null, 
        pdfIdentificacao:null,
        pdfCertificacaoEscolar:null,
        cursoId:""
    });

    const [currentStep,setCurrentStep] = useState(0)

    const handleNextStep = (newData:any) =>{
        setData(prev =>({...prev,...newData}))
        setCurrentStep(prev => prev + 1)
    }

    const handlePrevStep = (newData:any) =>{
        setData(prev =>({...prev,...newData}))
        setCurrentStep(prev => prev - 1)
    }

    const steps=[
        <StepOne next={handleNextStep} data={data} key={1}/>,
        <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} key={2}/>
    ]
    console.log("data",data)

    return(
        <>
            {steps[currentStep]}
        </>
    )
}

interface MyComponentProps {
    next: (newData:any) =>void;
    prev?: (newData:any) =>void;
    data:any;
}
const StepOne:React.FC<MyComponentProps>= ({
    next,
    data
}) =>{
    const handleSubmit = (values:any) =>{
        next(values);
    }

    return(
        <Formik
        initialValues={data}
        onSubmit={handleSubmit} 
     >
        {()=>(
            <Form>
                
                <Field type="text" name="nomeCompleto" placeholder="nomeCompleto"/>
                <Field name="sexo" id="sexo" component="select">
                    <option>genero</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>    
                </Field>
                <Field
                    placeholder='Data de nascimento' 
                    type='date'
                    name="dataNasc"
                />
                <Field 
                    placeholder='O seu numero de telefone' 
                    type='number'
                    name="numeroTelefone"
                />
                <Field 
                    placeholder='O seu email' 
                    type='email'
                    name="email"
                />
                <Field name="tipoIdentificacao" id="tipoIdentificacao" component="select">
                    <option>Tipo de indetificação</option>
                    <option value="Bilhete_de_Identidade">Bilhete_de_Identidade</option>
                    <option value="Cedula_Pessoal">Cedula_Pessoal</option>
                    <option value="Passaporte_Ordinario">Passaporte_Ordinario</option>    
                </Field>
                <Field 
                    placeholder='Código do documento' 
                    type='text'
                    name="codigoDocumento"
                />
                <button type="submit">Next</button>
            </Form>
        )}
    </Formik>)
}


const StepTwo:React.FC<MyComponentProps>= ({
    next,
    data
}) =>{
    return(<Formik
        initialValues={data}
        onSubmit={next}
    >
        {()=>(
            <Form>
                <Field name="tipoCertificacaoEscolar" id="tipoCertificacaoEscolar" component="select">
                    <option>tipo de certificação escolar</option>
                    <option value="Declaracao_com_Notas">Declaracao_com_Notas</option>
                    <option value="Certificado_de_Habilitaoes">Certificado_de_Habilitaoes</option>    
                </Field>
                <Field name="cursoId" id="curso" component="select">
                    <option>curso pretendido</option>
                    <option value="Declaracao_com_Notas">Declaracao_com_Notas</option>
                    <option value="Certificado_de_Habilitaoes">Certificado_de_Habilitaoes</option>
                </Field>
                <Field
                    component="input"
                    as="input"
                    type="file"
                    name="photo"
                />
                
                <button type="submit">Next</button>
            </Form>
        )}
    </Formik>)
}

export default StudentSubscriptionTest;
