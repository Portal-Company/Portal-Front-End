import { useState } from "react";
import { Footer } from "../../components/footer";
import { SchoolCardSearch } from "../../components/SchoolCardSeach";
import { api } from "../../services";
import { schools } from "./mock";
import * as S from "./styles"

type ISchool = [
    {
        nome: string,
        fotoUrl: string,
        id: string,
    }
]

export function SearchSchoolView ({ data }: any){

    const [ search, setSearch ] = useState("")
    const [ schoolFilterData, setSchoolFilterData] = useState<ISchool[]>([])

    async function handleSearc(){
        const data = await api.get(`/school/search`, {
            params:{
                search,
                limit: 6,
            }
        })        
        setSchoolFilterData(data.data)
    }
    
    search ? handleSearc() : []

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
                    <input type="search" name="" value={search} id="" placeholder="pesquisar..." onChange={(e)=> setSearch(e?.target.value)} />
                </S.FirstSection>
                <S.SecondSection>
                    {
                    search ? (
                        schoolFilterData?.map((school: any) => (
                            <SchoolCardSearch key={school.id} content = {school}/>
                        )) 
                        
                        )
                    :
                        data?.map((school: any) => (
                            <SchoolCardSearch key={school.id} content = {school}/>
                        ))
                    }
                </S.SecondSection>
            </S.Content>
            <Footer/>
        </S.Container>
        </>
    );
}
