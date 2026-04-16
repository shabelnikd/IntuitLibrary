import Layout from "./components/Layout/Layout";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import axios from "axios";
import {Backdrop, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import './dots.css'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 60 * 1000, // Кэшировать данные на 1 час
            cacheTime: 2 * 60 * 60 * 1000, // Максимальное время кэша - 2 часа
            refetchOnMount: false, // Не обновлять кэш при монтировании компонента
            refetchOnWindowFocus: false, // Не обновлять кэш при фокусировке окна
        }
    }
});
function App() {
    const { data: productsSql, isLoading, error } = useQuery("products", () => {
        return axios.get("https://libapi.intuit-journal.online/api/v1/books/").then((response) => response.data);
    });

    if (isLoading) return (
        <Backdrop sx={{color: '#fff', zIndex: 1000000}} open>
            <Typography>Идет загрузка</Typography>
            <Typography style={{marginRight: '10px'}}>
                <span className="loading-dots">.</span>
                <span className="loading-dots2">.</span>
                <span className="loading-dots3">.</span>
            </Typography>
            <CircularProgress color="inherit"/>
        </Backdrop>)
    if (error) return <p>Error: {error.message}</p>;

    return <Layout product={productsSql} />;
}

export default function Root() {
    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
}