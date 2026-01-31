// About.js
import securicon from "../assets/amenazas-a-la-ciberseguridad.png";

export default function About() {
  const highlights = [
    {
      title: "Cloud Computing",
      description:
        "Implementación y gestión de infraestructuras en la nube.",
    },
    {
      title: "Ciberseguridad",
      description:
        "OWASP Top 10, ethical hacking y principios de seguridad web.",
    },
    {
      title: "Sistemas Operativos",
      description:
        "Administración de Windows y Linux para entornos seguros.",
    },
    {
      title: "Redes & Soporte",
      description:
        "Conectividad, diagnóstico y soporte remoto profesional",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-green-400 text-sm"></span>
          <h2 className="text-4xl font-bold text-green-400">Sobre Mí</h2>
          <div className="h-px flex-1 bg-gray-700 max-w-64" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Texto */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Soy estudiante de décimo ciclo de{" "}
              <span className="text-green-400 font-medium">
                Ingeniería Electrónica en la UNI
              </span>
              , con marcado interés en Cloud Computing, Ciberseguridad,
              y orientado al diseño, análisis
              y mejora de infraestructuras tecnológicas. Mi enfoque combina conocimientos en ciberseguridad con habilidades prácticas en administración de sistemas. 
              Entiendo que la seguridad no es un producto, sino un proceso continuo.
            </p>

            <p>
              
            Constantemente me mantengo actualizado con las últimas amenazas y vulnerabilidades, practicando ethical hacking y estudiando las mejores prácticas de la industria.
            </p>

            <p>
              Actualmente busco prácticas preprofesionales donde pueda aplicar y
              fortalecer mis conocimientos en infraestructura, cloud y
              ciberseguridad  participando activamente en la
              operación y mejora de sistemas TI.
            </p>

            {/* Decoración tipo código */}
            <div className="font-mono text-sm bg-gray-800 border border-gray-700 rounded-lg p-4 mt-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <code className="text-gray-300">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-white">engineer</span>{" "}
                <span className="text-pink-400">=</span>{" "}
                {"{"}
                <br />
                <span className="ml-4 text-green-400">learning</span>: true,
                <br />
                <span className="ml-4 text-green-400">focus</span>: "Cloud & Security",
                <br />
                <span className="ml-4 text-green-400">status</span>: "Student"
                <br />
                {"}"};
              </code>
            </div>
          </div>

          {/* Imagen + highlights */}
          <div className="space-y-6">
            <img
              src={securicon}
              alt="Ciberseguridad"
              className="w-full rounded-lg shadow-lg border-2 border-green-400"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-gray-800 border border-gray-700 rounded-xl hover:border-green-400 transition"
                >
                  <h3 className="font-mono font-semibold text-green-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
