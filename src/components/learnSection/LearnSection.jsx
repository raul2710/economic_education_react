import LearnModule from "./Learn-Components/Modules";




export default function LearnSection() {

  return (
    <section className="LearnSection">
      <div className="introducao">
        <h1>Conceitos Básicos de Finanças Pessoais</h1>
        <p>
        Imagina que suas finanças são uma jornada épica, cheia de aventuras e desafios. <br />
        Com a Money Master, você terá um guia confiável para navegar por essa jornada, <br />
        entendendo cada conceito essencial de maneira envolvente e prática.
        </p>
      </div>
      <LearnModule/>
    </section>
  );
}
