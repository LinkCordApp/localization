export interface Locale {
    locale: string;
    name: string;
    icon: string;
    title: string;
    cookies: string;
    locales: {
        English: string;
        Spanish: string;
        German: string;
        Italian: string;
    };
    options: {
        buttons: {
            discord: {
                btn_title: string;
            };
            twitter: {
                btn_title: string;
            };
            support: {
                btn_title: string;
            };
            home: {
                btn_title: string;
            };
        };
    };
    navbar_menu: {
        title: string;
        links: {
            about: string;
            home: string;
            discord: string;
            partners: string;
            status: string;
            login: string;
        };
        user_dropdown: {
            edit: string;
            settings: string;
            dashboard: string;
            profile: string;
            logout: string;
        };
        news_banner: {
            primary_title: string;
            secondary_title: string;
            button: string;
        };
    };
    home_page: {
        title: string;
        description: string;
        features: {
            customProfiles: {
                feat_title: string;
                feat_description: string;
            };
            noHiddenFees: {
                feat_title: string;
                feat_description: string;
            };
            activeSupport: {
                feat_title: string;
                feat_description: string;
            };
            vanityURL: {
                feat_title: string;
                feat_description: string;
            };
        };
        get_started: {
            primary: string;
            secondary: string;
        };
    };
    about_page: {
        main: {
            primary_text: string;
            secondary_text: string;
            description: string;
        };
        team: {
            title: {
                primary_text: string;
                secondary_text: string;
            };
            staff: {
                toxic: {
                    name: string;
                    role: string;
                    desc: string;
                };
                rizon: {
                    name: string;
                    role: string;
                    desc: string;
                };
            };
        };
    };
    status_page: {
        operational: string;
        minor_outage: string;
        service_list: {
            authorization: string;
            cloudflare: string;
            database: string;
            website: string;
        };
    };
    dashboard_page: {
        note: {
            flag: string;
            title: string;
        };
        buttons: {
            view: string;
            auth: string;
        };
        website: {
            title: string;
            options: {
                username: string;
                website: string;
                discord: string;
                blog: string;
            };
        };
        socials: {
            title: string;
            options: {
                instagram: string;
                facebook: string;
                youtube: string;
                twitter: string;
                linkedin: string;
                twitch: string;
            };
        };
        music_promo: {
            title: string;
            options: {
                spotify: string;
                soundcloud: string;
            };
        };
        developer: {
            title: string;
            options: {
                github: string;
                gitlab: string;
                devto: string;
                codepen: string;
            };
        };
        partner: {
            title: string;
            options: {
                IBL: string;
                JobCord: string;
            };
        };
    };
    settings_page: {
        title1: string;
        title2: string;
        description: string;
        themes: {
            title1: string;
            title2: string;
            current: string;
            description: string;
            gray: {
                title: string;
                list: {
                    theme_1: string;
                    theme_2: string;
                    theme_3: string;
                    theme_4: string;
                };
            };
            slate: {
                title: string;
                list: {
                    theme_1: string;
                    theme_2: string;
                    theme_3: string;
                    theme_4: string;
                };
            };
        };
    };
    terms_page: {
        title_txt1: string;
        title_txt2: string;
        description: string;
        sections: {
            terms: {
                title: string;
                description: string;
            };
            use_license: {
                title: string;
                description: string;
                list_items: {
                    item_1: string;
                    item_2: string;
                    item_3: string;
                    item_4: string;
                    item_5: string;
                };
                conclusion: string;
            };
            disclaimer: {
                title: string;
                description: string;
            };
            limitations: {
                title: string;
                description: string;
            };
            revisions: {
                title: string;
                description: string;
            };
            links: {
                title: string;
                description: string;
            };
            modifications: {
                title: string;
                description: string;
            };
            your_privacy: {
                title: string;
                base_text: {
                    text_1: string;
                    text_2: string;
                    text_3: string;
                };
            };
            governing_law: {
                title: string;
                description: string;
            };
        };
    };
    privacy_page: {
        title_txt1: string;
        title_txt2: string;
        description1: string;
        description2: string;
        description3: string;
        sections: {
            your_consent: {
                title: string;
                desc1: string;
                desc2: string;
            };
            collected_data: {
                title: string;
                description: string;
            };
            data_usage: {
                title: string;
                description: string;
                list_items: {
                    item_1: string;
                    item_2: string;
                    item_3: string;
                    item_4: string;
                    item_5: string;
                    item_6: string;
                    item_7: string;
                };
            };
            log_files: {
                title: string;
                description: string;
            };
            cookies: {
                title: string;
                description: string;
            };
            advertising: {
                title: string;
                description: string;
            };
            third_partys: {
                title: string;
                description: string;
            };
            ccpa_policy: {
                title: string;
                description: string;
                list_items: {
                    item_1: string;
                    item_2: string;
                    item_3: string;
                };
                conclusion: string;
                conclusion_link: string;
            };
            gdpr_policy: {
                title: string;
                description: string;
                list_items: {
                    item_1: string;
                    item_2: string;
                    item_3: string;
                    item_4: string;
                };
                conclusion: string;
                conclusion_link: string;
            };
            childrens_info: {
                title: string;
                description: string;
                conclusion: string;
            };
        };
    };
    footer: {
        vercel: {
            powered_by: string;
            and_text: string;
        };
        credits: {
            copyright: string;
        };
        sections: {
            info: {
                section_title: string;
                primary_link: string;
                secondary_link: string;
            };
            user: {
                section_title: string;
                primary_link: string;
                secondary_link: string;
            };
            support: {
                section_title: string;
                primary_link: string;
                secondary_link: string;
            };
            legal: {
                section_title: string;
                primary_link: string;
                secondary_link: string;
            };
            misc: {
                section_title: string;
                primary_link: string;
                secondary_link: string;
            };
        };
    };
}
