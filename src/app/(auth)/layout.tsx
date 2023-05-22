"use client";

import {ReactNode, useEffect} from "react";
import {useRouter} from "next/navigation";

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    const router = useRouter();

     useEffect(() => {
        const token = sessionStorage.getItem("accessToken");

        if (token) {
            router.push("/stocks");
        }
    }, []);

    return (
        <div>
            <h1>Auth layout</h1>

            {children}
        </div>
    );
}