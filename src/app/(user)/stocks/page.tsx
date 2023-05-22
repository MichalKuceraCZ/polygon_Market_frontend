"use client";

import {StocksTable} from "@/app/(user)/stocks/stocksTable";
import {Header} from "@/app/components/header";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {Stock} from "@/app/types";

export default function StocksPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [stocks, setStocks] = useState<Stock[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:8000/api/v1/stocks", {
                headers: {
                    "Authorization": `Bearer ${sessionStorage.getItem("accessToken")}`,
                },
            });

            if (response.status === 401) {
                await router.push("/login");
                return;
            }

            const stocks: Stock[] = await response.json();
            setStocks(stocks);

            setLoading(false);
        })();
    }, []);

    if (loading) {
        return (
            <div>Loading</div>
        );
    }

    return (
        <div>
            <Header label={"Stocks page"}/>

            <div className={"relative overflow-x-auto shadow-md sm:rounded-lg mt-4"}>
                <StocksTable stocks={stocks}/>
            </div>
        </div>
    );
}
