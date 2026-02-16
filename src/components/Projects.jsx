import { ExternalLink } from "lucide-react";

export default function Projects() {

  const projects = [
     {
      title: "Escáner de vulnerabilidades de red (Python)",
      link: "https://github.com/leonardostore389-tech/detectarvulner_python",
      img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaa680qHCJf3vhkXGqN6sxfEbAJqgl3cCVhonhQ0sgle0o_cIShZlxbsJNN11mCGESRtD2Blo5SJ-MSPwUmpbo4xSAUT4RWnXnPMywnsxJe0xXqIGORiMfd_g3Q2WGxfQfdlXcXxP_msEk9XeN3ia008GqtVSdHQqbIk9GLhmhYVMC4TC1E8P3yjPDTKYr/s890/REDLINUXparaescaneo.PNG",
      description:
        "Herramienta de escaneo de puertos y detección de servicios expuestos usando Python y Scapy. Identifica vulnerabilidades en redes locales y almacena resultados",
      tech: ["Python", "Scapy", "Linux (Kali)", "SQL server", "Networking"],
    },
     {
  title: "Red Empresarial Multi-LAN Segura con Cisco Packet Tracer",
  link: "https://github.com/leonardostore389-tech/REDLAN-WAnciberseguridad",
  img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLkqyes0ENdTMQPvXg6xC_1gK15G8OvbOVFiKX6eIpQ5x1Y53_eY8KYPd2kOAHZrDDK3ls7owCJvG9nU-32KUWhniXvyPnK_slVURMVo4FoWVb9vXHMECBSTeQ0DDuboAyWv5nS4PsRt8nILkGNYMymC9xee8ZZ1TJWO7KZbYEvkM-9Ki2h4jOEa7idx0S/s1833/REDCISCO.PNG",
  description: "Diseño e implementación de red empresarial multi-LAN con 4 segmentos (DMZ, Usuarios, Servicios). Incluye ACLs, seguridad de puerto, SSH, DHCP Snooping, VLANs y arquitectura de defensa en profundidad",
  tech: ["Cisco Packet Tracer", "Routing & Switching", "ACLs", "VLAN", "SSH", "DHCP/DNS", "Network Security", "DMZ Design"]
     },
     {   
    title: "OWASP Top 10 laboratorio de Pentesting- Vulnerabilidades",
    link: "https://github.com/leonardostore389-tech/loginresgitertasks/tree/master",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXIs14uXvXtE6nPoOYdHzJSEZf3YSSrTjxCa2fZ1SyL0DqWAzIzhX4Y4daaKtpJTgZm6T_sAJgqLqo4CPw9HIjlNJmfehtBZq61qKL4M8XuHAPhbln-NnXtA142P68JHV__Qtxv2-oYPaGx3eLmwGNKEJ3cCQSI-FIdFkAF5QSUzmRIcvnSGxACKOWPBHl/s1616/gestortareas.PNG",
    description: "Laboratorio de seguridad que implementa y documenta controles de seguridad en una aplicación web MERN Stack, demostrando conocimientos  prácticos en desarrollo seguro, análisis de vulnerabilidades y hardening.",
    tech: ["OWASP TOP 10", "Rate Limiting", "JWT Security", "Security Auditing","bcrypt", "Node.js", "MongoDB", "React"]
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