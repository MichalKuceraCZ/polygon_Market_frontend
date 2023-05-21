import {StocksTable} from "@/app/stocks/stocksTable";
import {Header} from "@/app/components/header";

export default function StocksPage() {
    return (
        <div>
            <Header label={"Stocks page"}/>

            <div className={"relative overflow-x-auto shadow-md sm:rounded-lg mt-4"}>
                {/* @ts-ignore */}
                <StocksTable/>
            </div>
        </div>
    );
}
