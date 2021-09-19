
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '12629c02e5mshcdd3eca2e8b2507p1925b2jsnbae3a74ea0a4'
    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) =>( { url, headers: cryptoApiHeaders } )

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos:builder.query({
            query:()=>createRequest('/coins')
        })
    })
})

export const {
    useGetCryptosQuery}=cryptoApi;








