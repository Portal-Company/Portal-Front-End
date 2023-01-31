import * as S from './styles';
import { cardMock } from './cardMock';
import SchoolCard from '../schoolCard';

const ShoolCardsContainer=()=>{
    return(
        <S.Container>
            {
                cardMock.map(({image,name,description},index)=>
                    <SchoolCard 
                        key={index}
                        image={image} 
                        name={name}
                        description={description}
                    />
                )
            }
        </S.Container>
    )
}

export default ShoolCardsContainer;