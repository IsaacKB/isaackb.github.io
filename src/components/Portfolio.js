import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Isaac Kanashiro Barbagelata
          </h1>
          <p className="text-xl text-gray-700">
            Desenvolvedor Full-Stack | Node.js | .NET | React.js | Flutter
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/IsaacKB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/isaac-kb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:isaackb1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={32} />
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Experiência Profissional</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <li>
              <h3 className="text-2xl font-semibold">4Solution Group</h3>
              <p className="text-gray-600">
                Desenvolvedor Full-Stack Sênior | Ago 2024 - Atual
              </p>
              <ul className="mt-4 list-disc ml-5">
                <li>
                  Implementação de funções serverless com AWS Lambda,
                  TypeScript, Step Functions e Terraform.
                </li>
                <li>
                  Criação e manutenção de APIs e serviços serverless para o
                  sistema de PreMatching da Selic.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">ModalGR</h3>
              <p className="text-gray-600">
                Desenvolvedor Full-Stack Pleno | Ago 2022 - Abr 2024
              </p>
              <ul className="mt-4 list-disc ml-5">
                <li>
                  Desenvolvimento de microserviços com TypeScript, Node.js,
                  GraphQL e AWS Lambda.
                </li>
                <li>
                  Integração de métodos de pagamento e aprimoramento de
                  comunicação com stakeholders.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">iPORT Solutions</h3>
              <p className="text-gray-600">
                Desenvolvedor Full-Stack Pleno | Ago 2020 - Ago 2022
              </p>
              <ul className="mt-4 list-disc ml-5">
                <li>
                  Desenvolvimento de aplicativos móveis para soluções portuárias
                  com Xamarin.Forms e .NET.
                </li>
                <li>
                  Automatização de processos de conferência de cargas e
                  operações logísticas.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">Pagstar</h3>
              <p className="text-gray-600">
                Desenvolvedor Full-Stack Pleno | Set 2019 - Ago 2020
              </p>
              <ul className="mt-4 list-disc ml-5">
                <li>
                  Desenvolvimento de aplicações de pagamento com Node.js,
                  Express.js, MongoDB e Flutter.
                </li>
                <li>
                  Integração com máquinas de pagamento, QRCode e publicação em
                  lojas de aplicativos.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Habilidades Técnicas</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc ml-5">
            <li>JavaScript, TypeScript, C#, Python, Java</li>
            <li>Node.js, .NET, Spring Boot</li>
            <li>React.js, Vue.js, ASP.NET, Expo</li>
            <li>Flutter, Xamarin.Forms</li>
            <li>MySQL, PostgreSQL, MongoDB, Redis</li>
            <li>AWS, Docker, Terraform, GraphQL</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Contato</h2>
          <p>📧 E-mail: isaackb1@gmail.com</p>
        </section>
      </div>
    </div>
  );
}
