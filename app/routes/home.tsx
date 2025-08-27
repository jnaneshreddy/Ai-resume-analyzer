import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import Resumecard from "~/components/Resumecard";
import { resumes } from "../../constants";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Samrt Resume analyzer" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
    <div className="page-heading py-10">
      <h1>Track Your Applications and  Resume ratings</h1>
      <h2>Review your submissions and check AI-powred feedback.</h2>
    </div>
   

    {resumes.length>0 && (
<div className="resumes-section">
      {resumes.map((resume)=>(
        <Resumecard key={resume.id} resume={resume}/>
      ))}
    </div>
    )}
     </section>
  </main>;
}
