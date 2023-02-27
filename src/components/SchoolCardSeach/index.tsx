import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as S from "./styles"
import {useRouter} from "next/router"


type schoolProps = 
    {
        id: string;
        index: number;
        nome: string
        fotoUrl: string
    }

type ISchoolCardSearchProps = {
    data: schoolProps
}


export const SchoolCardSearch = ( { data }: ISchoolCardSearchProps ) => {
    const router = useRouter()

    console.log(data);
    
    
    const [ishovering, setIsHovering] = useState(-1)
    
    function mouseOver(index:number){
        setIsHovering(index)
    }

    function mouseOut(){
        setIsHovering(-1)
    }

    
    return (
        <>  
            <S.SectionCard onClick={()=> router.push(`/SearchSchool/${data.id}`)} key={data.index} onMouseOver={ () => mouseOver(data.index) } onMouseOut={mouseOut}>
            <S.ContainerImage>
                <Image loader={()=> data.fotoUrl} src={data?.fotoUrl} alt={data.nome} width={"100%"} height={"100%"}/>
            </S.ContainerImage>
            <S.Title>
                {data.nome}
            </S.Title>
            {data.index === ishovering ? ( <S.Button onClick={()=> router.push(`/SearchSchool/${data.id}`)}>Ver Perfil</S.Button> ) : null }
            </S.SectionCard>        
        </>
    );
}