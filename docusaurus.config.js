const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
    title: "TravelMate Developer Docs",
    url: "https://traveldocs-dev.onthelink.nl/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "https://cdn.onthelink.nl/travelmate-cdn/favicon.ico",
    organizationName: "OnTheLink",
    projectName: "TravelMate Developer Docs",

    presets: [
        [
            "classic",
            /** @type {import("@docusaurus/preset-classic").Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/OnTheLink/TravelMate-Docs/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                blog: false,
            }),
        ],
        [
            "redocusaurus",
            {
                // Plugin Options for loading OpenAPI files
                specs: [
                    {
                        id: "api",
                        spec: "api/travelmate.yml",
                        route: "/reference/api/",
                    },
                    {
                        id: "cdn",
                        spec: "cdn/travelmate.yml",
                        route: "/reference/cdn/",
                    },
                ],
                theme: {
                    primaryColor: "#772fbe",
                    primaryColorDark: "#e42aaa",
                },
            },
        ],
    ],

    themeConfig:
        /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
        ({
            navbar: {
                title: "TravelMate",
                logo: {
                    src: "https://media.discordapp.net/attachments/1176828532505190430/1193041066312609792/new-logo_travelmate.png",
                },
                items: [
                    {
                        href: "/",
                        label: "API Docs",
                        position: "left",
                    },
                    {
                        href: "/reference/api",
                        label: "API Reference",
                        position: "left",
                    },
                    {
                        href: "/reference/cdn",
                        label: "CDN Reference",
                        position: "left",
                    },
                    {
                        href: "https://pma.onthelink.nl:2100/",
                        label: "phpMyAdmin (DB)",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                logo: {
                    href: "https://mborijnland.nl/",
                    src: "https://media.discordapp.net/attachments/1176828532505190430/1193041722184302722/2560px-Mborijnland.svg.png",
                    width: 200,
                },
                links: [
                    {
                        title: "Project Docs",
                        items: [
                            {
                                label: "Introduction",
                                to: "/",
                            },
                            {
                                label: "API Docs",
                                to: "/",
                            },
                            {
                                label: "API Reference",
                                to: "/reference/api/",
                            },
                            {
                                label: "CDN Reference",
                                to: "/reference/cdn/",
                            },
                        ],
                    },
                    {
                        title: "Company",
                        items: [
                            {
                                label: "Content Policy",
                                href: "https://mboback.onthelink.nl:2100/content-policy",
                            },
                            {
                                label: "Terms of Service",
                                href: "https://mboback.onthelink.nl:2100/terms",
                            },
                            {
                                label: "Privacy Policy",
                                href: "https://mboback.onthelink.nl:2100/privacy",
                            },
                        ],
                    },
                    {
                        title: "Resources",
                        items: [
                            {
                                label: "GitHub (Docs)",
                                href: "https://github.com/OnTheLink/TravelMate-Docs/",
                            },
                            {
                                label: "GitLab (API)",
                                href: "https://gitlab.onthelink.nl/onthelink/servers/api",
                            },
                            {
                                label: "GitLab (CDN)",
                                href: "https://gitlab.onthelink.nl/onthelink/servers/cdn",
                            },
                        ],
                    },
                    {
                        title: "Help",
                        items: [
                            {
                                label: "Bug Tracker",
                                href: "#",
                            },
                            {
                                label: "Status",
                                href: "#",
                            },
                            {
                                label: "Support",
                                href: "#",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} <a href="https://mborijnland.nl/">MBO Rijnland</a> - All Rights Reserved`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
