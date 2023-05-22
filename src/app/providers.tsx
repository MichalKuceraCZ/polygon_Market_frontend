"use client";

import {MantineProvider} from "@mantine/core";

type Props = {
    children: React.ReactNode;
};

export function Providers({children}: Props) {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: "light",
            }}
        >
            {children}
        </MantineProvider>
    );
}