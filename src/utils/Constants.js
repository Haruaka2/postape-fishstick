import Feature1 from "../imgs/undraw_visionary_technology_re_jfp7.svg";
import Feature2 from "../imgs/undraw_predictive_analytics_re_wxt8 (1).svg";
import Feature3 from "../imgs/undraw_collaboration_re_vyau.svg";

export const FEATURE_ENTRIES = [
    {
        title: "Convert with automation",
        summary: "Send the right message at the right time to convert more customers.",
        imgPath: Feature1,
        color: 'primary.main'
    },
    {
        title: "Scale with AI & Analytics",
        summary: "20+ AI and data tools to create content, customize designs, and analyze performance.",
        imgPath: Feature2,
        color: 'primary.dark',
    },
    {
        title: "Sync with Integration",
        summary: "Connect more tools, get more data, save time, and make better decisions.",
        imgPath: Feature3,
        color: 'primary.light'
    }
]

export const PYMT_ENTRIES = [
    {
        title: "Premium",
        subtitle: "Scale fast with dedicated onboarding, unlimited contacts, and priority support; built for teams.",
        beforePriceTxt: "Starts at",
        price: "350",
        afterPriceText: "/month based on 10,000 contacts*",
        notes: [
            {
                text: "Phone & Priority Support",
                isChecked: true,
            },
            {
                text: "Custom-Coded and Pre-built Email Templates",
                isChecked: true,
            },
            {
                text: "Multivariate and A/B Testing",
                isChecked: true,
            },
            {
                text: "Enhanced Automated Customer Journeys",
                isChecked: true,
            },
            {
                text: "Dedicated Personalized Onboarding",
                isChecked: true,
            },
            {
                text: "Predictive Segmentation",
                isChecked: false,
            },
            {
                text: "Campaign Manager",
                isChecked: false,
            },
        ]
    },
    {
        title: "Standard",
        subtitle: "Sell even more with personalization, optimization tools, and enhanced automations.",
        beforePriceTxt: "Free for 1 month. Then, starts at",
        price: "20",
        afterPriceText: "/month based on 500 contracts",
        notes: [
            {
                text: "24/7 Email & Chat Support",
                isChecked: true,
            },
            {
                text: "Pre-built Email Templates",
                isChecked: true,
            },
            {
                text: "A/B Testing",
                isChecked: true,
            },
            {
                text: "Basic Automated Customer Journeys",
                isChecked: true,
            },
            {
                text: "Personalized Onboarding",
                isChecked: true,
            },
            {
                text: "Predictive Segmentation",
                isChecked: true,
            },
            {
                text: "Campaign Manager",
                isChecked: true,
            },
        ]
    },
    {
        title: "Essentials",
        subtitle: "Send the right content at the right time with testing and scheduling features.",
        beforePriceTxt: "Free for 1 month, Then starts at",
        price: "13",
        afterPriceText: "/month based on 500 contacts",
        notes: [
            {
                text: "24/7 Email & Chat Support",
                isChecked: true,
            },
            {
                text: "Pre-built Email Templates",
                isChecked: true,
            },
            {
                text: "A/B Testing",
                isChecked: true,
            },
            {
                text: "Basic Automated Customer Journeys",
                isChecked: true,
            },
            {
                text: "Personalized Onboarding",
                isChecked: true,
            },
            {
                text: "Predictive Segmentation",
                isChecked: false,
            },
            {
                text: "Campaign Manager",
                isChecked: false,
            },
        ]
    },
    {
        title: "Free",
        subtitle: "Easily create email campaigns and learn more about your customers.",
        beforePriceTxt: "",
        price: "0",
        afterPriceText: "/month based on 500 contacts",
        notes: [
            {
                text: "Email support for first 30 days",
                isChecked: true,
            },
            {
                text: "Pre-built Email Templates",
                isChecked: true,
            },
            {
                text: "A/B Testing",
                isChecked: false,
            },
            {
                text: "Basic Automated Customer Journeys",
                isChecked: false,
            },
            {
                text: "Onboarding",
                isChecked: false,
            },
            {
                text: "Predictive Segmentation",
                isChecked: false,
            },
            {
                text: "Campaign Manager",
                isChecked: false,
            }
        ]
    }
];

export const INTEGRATIONS = [
    {
        name: "Canva",
        desc: "Create compelling visuals for your marketing.",
        imgUrl: ""
    },
    {
        name: "Mailchimp for Salesforce",
        desc: "Sync your Mailchimp subscribers and Salesforce® leads across platforms.",
        imgUrl: "https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=70"
    },
    {
        name: "Instagram",
        desc: "Promote and share your Instagram posts in email campaigns.",
        imgUrl: "https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=70"
    },
    {
        name: "Shopify",
        desc: "Sync Shopify customers, products, and purchase data to Mailchimp.",
        imgUrl: "https://eep.io/images/yzco4xsimv0y/44dW9Z4hibyDYi0qggfets/b01884985e996ffb5dc133556b92bb7a/Shopify__1_.jpg?w=196&fm=webp&q=70"
    },
    {
        name: "Google Analytics",
        desc: "Unlock powerful insights with campaign, website, or landing page data.",
        imgUrl: "https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/5e610ecd21eeb25d0b82b098ce424e34/Google_Analytics2.jpg?w=196&fm=webp&q=70"
    },
    {
        name: "WooCommerce",
        desc: "Power your ecommerce store with smart marketing features.",
        imgUrl: "https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/5e610ecd21eeb25d0b82b098ce424e34/Google_Analytics2.jpg?w=196&fm=webp&q=70"
    },
    {
        name: "QuickBooks Online",
        desc: "Bring together your marketing tools and invoice data.",
        imgUrl: "https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&fm=webp&q=70"
    },
    {
        name: "Squarespace Commerce",
        desc: "Market your ecommerce business and drive sales.",
        imgUrl: "https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&fm=webp&q=70"
    },
    {
        name: "Zapier",
        desc: "Automatically pass data between web services without a single line of code.",
        imgUrl: "https://eep.io/images/yzco4xsimv0y/26deBkGp3A5Pj7suZ9oV7V/858e8a4603707166988a3282bca7e29b/Zapier.jpg?w=196&fm=webp&q=70"
    }
];