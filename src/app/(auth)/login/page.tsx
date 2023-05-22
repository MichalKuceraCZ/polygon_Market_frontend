"use client";

import {useForm} from "@mantine/form";
import {Button, PasswordInput, TextInput} from "@mantine/core";
import React from "react";
import {useRouter} from "next/navigation";

type FormValues = {
    username: string;
    password: string;
};

export default function LoginPage() {
    const router = useRouter();

    const form = useForm<FormValues>({
        initialValues: {
            username: "",
            password: "",
        },
    });


    async function submitForm(values: FormValues) {
        const response = await fetch("http://localhost:8000/api/v1/users/login", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        });

        if (response.status === 200) {
            const data = await response.json();
            sessionStorage.setItem("accessToken", data.access_token);
            await router.push("/stocks");
        }
    }

    return (
        <form onSubmit={form.onSubmit(submitForm)}>
            <TextInput
                label="Username"
                {...form.getInputProps('username')}
            />

            <PasswordInput
                label="Password"
                {...form.getInputProps('password')}
            />

            <Button color={"yellow"} type={"submit"}>Submit</Button>
        </form>
    );
}