import { ActionArgs, MetaFunction, json } from "@remix-run/node";
import Wraper from "~/components/Layout/wraper";
import validator from "~/utils/formValidator";
import {
  validationError,
} from "remix-validated-form";
import ContactSections from "~/components/Home/ContactSection";
import Projects from "~/components/Home/projects";
import { gqlClient } from "~/graphql/client";
import { HOME_PAGE } from "~/graphql/queries/homePage";
import { useLoaderData } from "@remix-run/react";
import { HomePage } from "types/HomePage";
import ToolsAndPlatforms from "~/components/Home/ToolsAndPlatforms";
import HeroSection from "~/components/Home/HeroSection";
import { nodemailer } from "~/entry.server";


export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { seo } = data.data;

  return [
    { title: seo.seoTitle ?? "Alejandro Suarez" },
    { name: "description", content: seo.description ?? "Frontend Web Developer" },
    
  ];
};


export async function action({request}:ActionArgs) {
  const data = await validator.validate( await request.formData() );
  if (data.error) return validationError(data.error);
  const { clientName, clientLastName, clientEmail, clientCompany } = data.data;

  try {
    const transporter = await nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  
    let theHtmlText = `<html>Name: ${clientName} ${clientLastName}.<br /> From: ${clientCompany}. <br /> Contact: ${clientEmail}.</html>`

    await transporter.sendMail({
      from: clientEmail,
      to: process.env.EMAIL_RECIVER,
      subject: "Mensaje from PORTFOLIO",
      html: theHtmlText
    });

    return json({ ok: true, message: `Thanks ${clientName}. I will contact you as soon as possible.`}, { status: 200 })
  } catch (error) {
    console.error(error.message)
    return json({ ok: false, message: `Sorry ${clientName}. You form wastn processed.`}, { status: 400 })
  }
}


export const loader = async (): Promise<{ ok: boolean; data:  HomePage }> => {
  const client = gqlClient();
  const reqHome = await client.request<{ homePage: any }>(HOME_PAGE, {
    id: "1qwQQiqgCH7aLvH4KdgrHa" //Home page ID
  });
  return { ok: true, data: reqHome.homePage };
};

export default function Index() {
  const { data } = useLoaderData();
  const { title, subtitle,  logosWhiteVersionCollection, recentProjectsCollection, contactText, profilePicture  } = data;
  
  return (
    <div style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.125 }}>
      <Wraper customStyle="relative">
        <HeroSection title={title} subtitle={subtitle} />
        <Projects projectsList={recentProjectsCollection.items} />
        <ToolsAndPlatforms logosWhiteVersionCollection={logosWhiteVersionCollection} />
        <ContactSections contactText={contactText} profilePicture={profilePicture}/>

      </Wraper>
    </div>
  );
}
