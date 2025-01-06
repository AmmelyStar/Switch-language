// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";
// import { locales } from "./config";

// // Define the possible locales
// type Locale = "en" | "de"; // Add all the locales you support

// export default getRequestConfig(async ({ params }: { params: { locale: string } }) => {
//     // Narrow the type of locale to match the expected locales
//     const { locale } = params;

//     // Type assertion to Locale (assuming that locale will always match one of the predefined locales)
//     if (!locales.includes(locale as Locale)) {
//         notFound(); // Redirect to 404 for invalid locale
//     }

//     return {
//         messages: (await import(`./messages/${locale}.json`)).default,
//     };
// });



/* eslint-disable @typescript-eslint/no-explicit-any */
import {getRequestConfig} from "next-intl/server";
import { notFound } from "next/navigation";
import {locales} from "./config";

export default getRequestConfig(async ({locale})=>{
    if(!locales.includes(locale as any)) notFound();

    return{
        messeges: (await import(./messages/${locale}.json)).default,
    };
});