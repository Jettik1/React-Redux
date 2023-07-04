import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utils/constants";


export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    tagTypes: ["Product"],
    endpoints: (build) => ({
        getProductById: build.query({
            query: ({id}) => `/products/${id}`,
            providesTags: ["Product"],
        })
    })
})

export const { useGetProductByIdQuery } = productAPI