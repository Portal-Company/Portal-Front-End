import Image from "next/image";
import { Footer } from "../../components/footer";
import { SchoolCardSearch } from "../../components/SchoolCardSeach";
import { schools } from "./mock";
import * as S from "./styles"

export function SearchSchoolView (){
    return(
        <>
        <S.Container>
            <S.Content>
                <S.FirstSection>
                    <select name="" id="">
                        <option label="Filtrar por" value={undefined}/>
                        <option value="">provincia</option>
                        <option value="">Municipio</option>
                    </select>
                    <input type="search" name="" id="" placeholder="pesquisar..." />
                </S.FirstSection>
                <S.SecondSection>
                    <SchoolCardSearch data={schools}/>
                </S.SecondSection>
            </S.Content>
            <Footer/>
        </S.Container>
        </>
    );
}