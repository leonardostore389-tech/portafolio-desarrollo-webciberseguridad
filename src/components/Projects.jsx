import { ExternalLink } from "lucide-react";

export default function Projects() {

  const projects = [
     {
      title: "Escáner de vulnerabilidades de red (Python)",
      link: "https://github.com/leonardostore389-tech/idspython",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgR1BFJ71010QT4DaTgCRXzWFxk5gaid4jtzjNlC1pcSguT3N0SuQFRsGRuxI4nZVLNaupDo9rZFEZTVrhyDvXfo38YPv1eNavGj3_2rs1YmmfOuH2wb-5qPSoBJZ8KMZQUyGlPCONp_qPYyy8cuYHaw1MLRvDeMwpPQhBlZOul4UC5lG-LrNqC_ElfQvL_/s1666/idsphyton.PNG",
      description:
        "Herramienta de escaneo de puertos y detección de servicios expuestos usando Python y Scapy. Identifica vulnerabilidades en redes locales y almacena resultados",
      tech: ["Python", "Scapy", "Linux (Kali)", "SQL server", "Networking"],
    },


    {
      title: "Sistema de Detección de Intrusos en Red (IDS) con Python",
      link: "https://github.com/leonardostore389-tech/idspython",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDSN_W_62VEKU58vZH6ojN-xphpBlurIrlQQ0hG1_K6ayeBNh7tUSmrHkF9mqqHeykPS5VA5Gs6qIT01cunl6bAJWRs6WcC7Djoi2vTIm7mJ3iATpu2PvHWQTQv2pi1u_Ph3_Fm6OADpGeufdhOcgy2e8rYfaqsiCTNXHkcvBwSsZxIbWvE359ZZi3cYvE/s1920/alerteaipsbloqueads.PNG",
      description:
        "Un sistema básico de detección de intrusos que monitorea el tráfico de red y genera alertas ante actividades sospechosas.",
      tech: ["Python", "Scapy", "Linux (Kali)", "Nmap", "Networking","Sqlite", "Javascript"],
    },
    
  ];

  return (
    <section id="projects" className=" px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header — estilo portafolio (SIN línea blanca) */}
        <div className="mb-24 text-center">
          
          <h2 className="text-center text-6xl text-green-400 font-bold">
            Mis Proyectos
          </h2>
        </div>

        {/* Proyectos */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <div
  key={index}
  className={`p-8 bg-gray-900 w-full rounded-xl
              transition-all duration-300 ease-out
              hover:scale-[1.02] hover:shadow-2xl
              grid lg:grid-cols-12 gap-10 items-center
              ${index % 2 !== 0 ? "lg:text-right" : ""}`}
>
              {/* Imagen */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <a href={project.link} target="_blank" rel="noreferrer">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>
              </div>

              {/* Contenido */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                <span className="font-mono text-primary text-sm">
                  Proyecto
                </span>

                <h3 className="text-2xl font-bold mt-3 mb-5">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div
                  className={`flex flex-wrap gap-3 mb-6 font-mono text-sm ${
                    index % 2 !== 0 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">{t}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-primary transition"
                >
                  <ExternalLink className="h-5 w-5" />
                  Ver proyecto
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}