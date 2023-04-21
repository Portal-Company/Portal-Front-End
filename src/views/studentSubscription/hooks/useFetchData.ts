import useSWR from 'swr';
import { getFetchGender } from "../services";

const UseFetchData = () =>{
    const {data:gender,error}=useSWR("gender", async () => {
        const data=await getFetchGender();

        return data;
    })

    return{
        gender
    }
}

export {UseFetchData};

