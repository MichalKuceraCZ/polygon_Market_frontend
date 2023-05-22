"use client";

import {ReactNode} from "react";
import {useRouter} from "next/navigation";

type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    const router = useRouter();

    // useEffect(() => {
    //     const token = sessionStorage.getItem("accessToken");
    //
    //     if (!token) {
    //         router.push("/login");
    //     }
    // }, []);

    return (
        <div>
            <h1>User layout</h1>

            {children}
        </div>
    );
}