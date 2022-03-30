import type { Locale } from "../..";

export const table: Locale = {
    locale: 'Spanish',
    name: 'Español',
    icon: '/es-ES.png',
    title: "Cable de enlace",
    cookies: "Usamos cookies!", 
    locales: {
        English: "Inglés",
        Spanish: "Español",
    }, 
    options: {
        buttons: {
            discord: {
                btn_title: "Nuestra Discordia"
            },
            twitter: {
                btn_title: "Nuestro Twitter"
            },
            support: {
                btn_title: "Apoyo"
            },
            home: {
                btn_title: "Volver A Casa"
            }
        }
    },
    navbar_menu: {
        title: "Cable de enlace",
            links: {
                about: "Sobre",
                home: "Casa",
                discord: "Discordia",
                status: "Estado"
            },
    
            user_dropdown: {
                settings: "Ajustes",
                dashboard: "Tablero"
            },
    
            news_banner: {
                primary_title: "Nosotras Estamos Con Ucrania",
                secondary_title: "Gloria a Ucrania.",
                button: "Dona aquí!"
            }
        },
        home_page: { 
            title: "Cable de enlace",
            description: "Cree su página de perfil personalizada, agregue sus enlaces de redes sociales y compártala para que el mundo la vea.",
            features: {
                customProfiles: {
                    feat_title: "Perfiles personalizables",
                    feat_description: "Personaliza tu perfil para satisfacer todas tus necesidades"
                },
                noHiddenFees: {
                    feat_title: "Sin cuotas escondidas",
                    feat_description: "Nunca le cobraremos por nuestros servicios"
                },
                activeSupport: {
                    feat_title: "Soporte activo",
                    feat_description: "Nuestro personal de Discord generalmente está en línea y listo para ayudar!"
                },
                vanityURL: {
                    feat_title: "URL Mnemónicas",
                    feat_description: "Comparta su perfil con un linkcord.bio/endpoint personalizado!"
                }
            },
            get_started: {
                primary: "Que estas esperando!",
                secondary: "Comience a usar Link Cord ahora."
            }
        },
        about_page: {
            main: {
                primary_text: "Sobre",
                secondary_text: "Cable de enlace",
                description: "Link Cord es su solución centralizada para todas sus necesidades de Link in Bio. Cree un perfil personalizado, agregue sus enlaces de redes sociales y compártalo para que todo el mundo lo vea."
            },
            team: {
                title: {
                    primary_text: "Nuestro",
                    secondary_text: "Equipo"
                },
                staff: {
                    toxic: {
                        name: "Tyler",
                        role: "Fundador",
                        desc: "Desarrollador de software independiente."
                    },
                    dillon: {
                        name: "Dillon",
                        role: "Desarrollador",
                        desc: "Desarrollador de software Fullstack."
                    },
                    rizon: {
                        name: "Rizón",
                        role: "Desarrollador",
                        desc: "Desarrollador de software Fullstack."
                    }
                }
            }
        },
        footer: {
            vercel: {
                powered_by: "Energizado Por:",
                and_text: "y"
            },
            credits: { 
                copyright: "Cable de enlace - Todos los derechos reservados.",
                },
                sections: {
                    info: {
                        section_title: "Información",
                        primary_link: "Sobre nosotros",
                        secondary_link: "Nuestro equipo"
                    },
                    user: {
                        section_title: "Usuario",
                        primary_link: "Tablero",
                        secondary_link: "Ajustes"
                    },
                    support: {
                        section_title: "Apoyo",
                        primary_link: "Discordia",
                        secondary_link: "Gorjeo"
                    },
                    legal: {
                        section_title: "Legal",
                        primary_link: "Condiciones",
                        secondary_link: "Intimidad"
                    },
                    misc: {
                        section_title: "Varios",
                        primary_link: "Estado",
                        secondary_link: "Blog"
                }
            }
        }
    }