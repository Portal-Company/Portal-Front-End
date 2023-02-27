import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:4444'
})


export const getSchools = async () => {
    const schools = await api.get('/school/list')
    return schools.data
}

export const getSchool = async (id: string) => {
    const school = await api.get(`school/list/${id}`)

    return school.data
}