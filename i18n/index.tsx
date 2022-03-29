export interface Locale {
    locale: string;
    title: string;
    options: {
        buttons: {
            discord: {
                btn_title: string;
            };
            twitter: {
                btn_title: string;
            };
            support: {
                btn_title: string
            };
            home: {
                btn_title: string;
            }
        }
    };
    navbar_menu: {
        title: "Link Cord",
            links: {
                about: string;
                home: string;
                discord: string;
                status: string;
            };
            user_dropdown: {
                settings: string;
                dashboard: string;
            };
            news_banner: {
                primary_title: string;
                secondary_title: string;
                button: string;
            }
        };
        home_page: { 
            title: string;
            description: string;
            features: {
                customProfiles: {
                    feat_title: string;
                    feat_description: string;
                },
                noHiddenFees: {
                    feat_title: string;
                    feat_description: string;
                },
                activeSupport: {
                    feat_title: string;
                    feat_description: string;
                },
                vanityURL: {
                    feat_title: string;
                    feat_description: string;
                }
            },
            get_started: {
                primary: string;
                secondary: string;
            }
        },
        about_page: {
            main: {
                primary_text: string;
                secondary_text: string;
                description: string;
            },
            team: {
                title: {
                    primary_text: string;
                    secondary_text: string;
                },
                staff: {
                    toxic: {
                        name: string;
                        role: string;
                        desc: string;
                    },
                    dillon: {
                        name: string;
                        role: string;
                        desc: string;
                    },
                    rizon: {
                        name: string;
                        role: string;
                        desc: string;
                    }
                }
            }
        },
        footer: {
            credits: {
                copyright: string;
                vercel_txt: {
                    primary: string;
                    secondary: string;
                },
                sections: {
                    info: {
                        section_title: string;
                        primary_link: string;
                        secondary_link: string;
                    },
                    user: {
                        section_title: string;
                        primary_link: string;
                        secondary_link: string;
                    },
                    support: {
                        section_title: string;
                        primary_link: string;
                        secondary_link: string;
                    },
                    legal: {
                        section_title: string;
                        primary_link: string;
                        secondary_link: string;
                    },
                    misc: {
                        section_title: string;
                        primary_link: string;
                        secondary_link: string;
                    }
                }
            }
        }
}