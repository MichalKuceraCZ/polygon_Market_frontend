"use client";

import NextLink from "next/link";
import { useParams } from "next/navigation";
import {Header} from "@/app/components/header";
import {Stock} from "@/app/types";

export default async function StocksDetail() {
    const { id } = useParams();

    const data = await fetch(`http://localhost:8000/api/v1/stocks/${id}`);

    if (data.status !== 200) {
        return (
            <div>Stock not found</div>
        );
    }

    const stock: Stock = await data.json();

    return (
        <div>
            <Header label={`Stocks detail - ${stock.name}`}/>

            <div className={"mt-4"}>
                <div>Ticker {stock.ticker}</div>
                <div>Currency {stock.currency_name}</div>
            </div>

            <NextLink href="/stocks" className={"text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"}>Back</NextLink>
        </div>
    );
}