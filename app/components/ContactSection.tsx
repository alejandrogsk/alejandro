import { Form, useActionData } from "@remix-run/react";


import alejandrosuarez from "../../public/logos/Alejandro-Suarez.png"
const ContactSections = () => {
    const data = useActionData();

    return (
        <div id="contact-me" className="grid grid-cols-1 items-center justify-center py-20 md:py-32 lg:py-40 ">
            <div className="grid grid-cols-[max-content_1fr] gap-8 items-start lg:items-center">
                <img src={alejandrosuarez} alt="Alejandro Suarez Developer" width={80} height={80} />
                <p className="uppercase text-sm lg:text-base max-w-full lg:max-w-[70%]">I would like to know about your project, so do not hesitate to fill out the form, I will contact you as soon as possible.</p>
            </div>
            <Form method="post" className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-20">
                <div className="flex flex-col">
                    <input
                    className="outline-none text-black placeholder-[#1A1A1A] bg-transparent border-b-[1px] border-black pr-1 pt-2 pb-1 border-b-[1px] text-xl"
                        type="text"
                        name="clientName"
                        placeholder="Name (required)"
                    />
                    {data?.fieldErrors?.clientName && (
                        <span className="text-red-500">
                            {data.fieldErrors.clientName}
                        </span>
                    )}
                </div>

                <div className="flex flex-col">
                    <input
                    className="outline-none text-black placeholder-[#1A1A1A] bg-transparent border-b-[1px] border-black pr-1 pt-2 pb-1 border-b-[1px] text-xl"
                        type="text"
                        name="clientLastName"
                        placeholder="Surename (required)"
                    />
                    {data?.fieldErrors?.clientLastName && (
                        <span className="text-red-500">
                            {data.fieldErrors.clientLastName}
                        </span>
                    )}
                </div>

                <div className="flex flex-col">
                    <input
                    className="outline-none text-black placeholder-[#1A1A1A] bg-transparent border-b-[1px] border-black pr-1 pt-2 pb-1 border-b-[1px] text-xl"
                        type="email"
                        name="clientEmail"
                        placeholder="Email (required)"
                    />
                    {data?.fieldErrors?.clientEmail && (
                        <span className="text-red-500">
                            {data.fieldErrors.clientEmail}
                        </span>
                    )}
                </div>
                <div className="flex flex-col">
                    <input
                    className="outline-none text-black placeholder-[#1A1A1A] bg-transparent border-b-[1px] border-black pr-1 pt-2 pb-1 border-b-[1px] text-xl"
                        type="text"
                        name="clientCompany"
                        placeholder="Company Website (required)"
                    />
                    {data?.fieldErrors?.clientCompany && (
                        <span className="text-red-500">
                            {data.fieldErrors.clientCompany}
                        </span>
                    )}
                </div>

                {data?.message && (
                    <span className="text-blue-400 col-start-1 col-end-2 md:col-end-3">{data.message}</span>
                )}
                <button type="submit"
                 className="uppercase block bg-black hover:bg-white text-white hover:text-black text-xs md:text-sm w-[150px] md:w-[170px] py-2 md:py-3 rounded-full shadow-lg	"
                >Submit</button>
            </Form>
        </div>
    );
};

export default ContactSections;