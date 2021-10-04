import React from "react";

import { useForm, ValidationError } from '@formspree/react';
export default function () {
    const [state, handleSubmit] = useForm("xpzknpgg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                />

                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </>
    )
}