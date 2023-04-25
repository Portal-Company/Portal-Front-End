import * as S from "./styles";
import Input from "../input";
import { api } from "../../services/api";
import { useFormik } from "formik";
import { ICandidate, IContact } from "../../views/studentSubscription/type";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getCoursesSchool } from "../../services";
import { toast } from "react-toastify";
import { ICourses, IErrorInterface } from "./type";

interface Values {
  nomeCompleto: string;
  sexo: string;
  dataNasc: string;
  numeroTelefone: string;
  email: string;
  tipoIdentificacao: string;
  tipoCertificacaoEscolar: string;
  codigoDocumento: string;
  photo: any;
  pdfIdentificacao: any;
  pdfCertificacaoEscolar: any;
  cursoId: string;
}

const FormStep1 = () => {
  const {
    query: { escolaId },
  } = useRouter();

  const { data: courses, error: coursesError } = useSWR("courses", () =>
    getCoursesSchool(escolaId)
  );
  console.log(courses);

  const formik = useFormik<Values>({
    initialValues: {
      nomeCompleto: "",
      sexo: "",
      dataNasc: "",
      numeroTelefone: "",
      email: "",
      tipoIdentificacao: "",
      tipoCertificacaoEscolar: "",
      codigoDocumento: "",
      photo: null,
      pdfIdentificacao: null,
      pdfCertificacaoEscolar: null,
      cursoId: "",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      const formData2 = new FormData();
      const formData3 = new FormData();

      formData.append("file", values.photo[0]);
      formData2.append("file", values.pdfIdentificacao[0]);
      formData3.append("file", values.pdfCertificacaoEscolar[0]);

      const contactData: IContact = {
        numeroTelefone: values.numeroTelefone,
        email: values.email,
      };

      const [
        photoResponse,
        identificationResponse,
        certificationResponse,
        constactResponse,
      ] = await Promise.all([
        api.post("/file", formData),
        api.post("/file", formData2),
        api.post("/file", formData3),
        api.post("/contact/post", contactData),
      ]);

      const candidate: ICandidate = {
        nome: values.nomeCompleto,
        sexo: values.sexo,
        dataNasc: values.dataNasc,
        contatoId: constactResponse.data.id,
        photoUrl: photoResponse.data.id,
        tipoIdentificacao: values.tipoIdentificacao,
        codigoDocumento: values.codigoDocumento,
        pdfIdentificacao: identificationResponse.data.id,
        tipoCertificacaoEscolar: values.tipoCertificacaoEscolar,
        pdfCertificacaoEscolar: certificationResponse.data.id,
      };

      const resposeCandidate = await api.post("/candidate/post", candidate);
      console.log("Teste", resposeCandidate);

      const subscription = {
        escolaId: escolaId,
        candidatoId: resposeCandidate?.data?.id,
      };

      try {
        const responseSubscription = await api.post(
          "/enrollment/post",
          subscription
        );
        const intendedCourseData = {
          inscricaoId: responseSubscription.data.id,
          cursoId: values.cursoId,
        };
        if (responseSubscription) {
          const intendendCourseResponse = await api.post(
            "/intendedCourse/post",
            intendedCourseData
          );
          console.log(intendendCourseResponse);
          toast("Cadastro feito com sucesso", {
            autoClose: 2000,
            type: "success",
          });
        }
      } catch (err) {
        const error = err as IErrorInterface;
        toast(error.response?.data?.error, { autoClose: 4000, type: "error" });
        alert("Erro");
      }
    },
  });

  return (
    <S.WrapperContainer
      onSubmit={formik.handleSubmit}
      encType="multipart/form-data"
    >
      <S.FormCard>
        <S.Paragraph>
          Para iniciar o processo de abertura de conta, precisamos de validar o
          seu nº de telemóvel.
        </S.Paragraph>
        <S.Forms>
          <Input
            placeholder="O seu Nome Completo"
            name="nomeCompleto"
            onChange={formik.handleChange}
            type="text"
          />

          <S.Select name="sexo" id="sexo" onChange={formik.handleChange}>
            <option>genero</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </S.Select>

          <Input
            placeholder="Data de nascimento"
            type="date"
            name="dataNasc"
            onChange={formik.handleChange}
          />

          <Input
            placeholder="O seu numero de telefone"
            type="text"
            name="numeroTelefone"
            onChange={formik.handleChange}
          />

          <Input
            placeholder="O seu email"
            type="email"
            name="email"
            onChange={formik.handleChange}
          />

          <S.Select
            name="tipoIdentificacao"
            id="tipoIdentificacao"
            onChange={formik.handleChange}
          >
            <option>Tipo de indetificação</option>
            <option value="Bilhete_de_Identidade">Bilhete_de_Identidade</option>
            <option value="Cedula_Pessoal">Cedula_Pessoal</option>
            <option value="Passaporte_Ordinario">Passaporte_Ordinario</option>
          </S.Select>

          <S.Select
            name="tipoCertificacaoEscolar"
            id="tipoCertificacaoEscolar"
            onChange={formik.handleChange}
          >
            <option>tipo de certificação escolar</option>
            <option value="Declaracao_com_Notas">Declaracao_com_Notas</option>
            <option value="Certificado_de_Habilitaoes">
              Certificado_de_Habilitaoes
            </option>
          </S.Select>

          <Input
            placeholder="Código do documento"
            type="text"
            name="codigoDocumento"
            onChange={formik.handleChange}
          />

          <S.Select
            name="cursoId"
            id="tipoCertificacaoEscolar"
            onChange={formik.handleChange}
          >
            <option>curso pretendido</option>
            {courses?.map((item: ICourses, index: number) => (
              <option value={item?.id} key={index}>
                {item?.nome}
              </option>
            ))}
          </S.Select>

          <input
            type="file"
            name="photo"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik.setFieldValue("photo", event.currentTarget.files);
            }}
          />
          <input
            type="file"
            name="pdfIdentificacao"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik.setFieldValue(
                "pdfIdentificacao",
                event.currentTarget.files
              );
            }}
          />
          <input
            type="file"
            name="pdfCertificacaoEscolar"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              formik.setFieldValue(
                "pdfCertificacaoEscolar",
                event.currentTarget.files
              );
            }}
          />
        </S.Forms>
        <button type="submit">Continuar</button>
      </S.FormCard>
    </S.WrapperContainer>
  );
};
export default FormStep1;
