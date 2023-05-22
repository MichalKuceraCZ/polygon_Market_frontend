"use client";

import NextLink from "next/link";
import {Stock} from "@/app/types";

type Props = {
    stocks: Stock[];
};

export function StocksTable({ stocks }: Props) {
    return (
        <table className={"w-full text-sm text-left text-gray-500"}>
            <thead className={"text-xs text-gray-700 uppercase bg-gray-50"}>
            <tr>
                <th scope="col" className="px-6 py-3">Ticker</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Currency</th>
                <th/>
            </tr>
            </thead>

            <tbody>
            {stocks.map((item, index) => (
                <tr key={item.stock_id} className={`${index % 2 == 0 ? "bg-white" : "bg-gray-50"} border-b`}>
                    <td className={"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"}>{item.ticker}</td>
                    <td className={"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"}>{item.name}</td>
                    <td className={"px-6 py-4 font-medium text-gray-900 whitespace-nowrap"}>{item.currency_name}</td>
                    <td>
                        <NextLink href={`/stocks/${item.stock_id}`}>Detail</NextLink>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
