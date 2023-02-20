import Image from "next/image";
import { useState } from "react";
import * as S from "./styles"


type schoolProps = 
    {
        name: string
        imgUrl: string
    }

type ISchoolCardSearchProps = {
    data: schoolProps[]
}


export const SchoolCardSearch = ( {data}: ISchoolCardSearchProps ) => {
    const [ishovering, setIsHovering] = useState(-1)
    
    function mouseOver(index:number){
        setIsHovering(index)
    }

    function mouseOut(){
        setIsHovering(-1)
    }

    
    return (
        <>  
        {data.map((school, index) => (
            <S.SectionCard key={index} onMouseOver={ () => mouseOver(index) } onMouseOut={mouseOut}>
            <S.ContainerImage>
                <Image loader={()=> school.imgUrl} src={school.imgUrl} alt="Makarenko" width={"100%"} height={"100%"}/>
            </S.ContainerImage>
            <S.Title>
                {school.name}
            </S.Title>
            {index === ishovering ? ( <S.Button>Ver Perfil</S.Button> ) : null }
            </S.SectionCard>        
        ))}
        </>
    );
}