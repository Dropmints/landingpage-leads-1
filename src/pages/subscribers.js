import * as React from "react";
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import axios from "axios";

import Layout from "../components/layout"
import Seo from "../components/seo"

// import twitterLogo from '../images/twitter-logo-white.svg';
// import dropmintsLogo from '../images/dropmints-white-logo-full.svg';

const SubscribersPage = () => {

    const [mailchimpData, setMailchimpData] = React.useState(null);


    React.useEffect( async () => {

        try {
            const response =  await axios.get('https://serverless-mailchimp-stats.vercel.app/api/get-mailchimp-total-subs')
            console.log("RESP", response.data)
            setMailchimpData(response.data)
        } catch (error) {
            return console.error(error)
        }
        
    }, [])


    const displayTotalSubs = () => {
        if (!mailchimpData) {
            return (
                <span className="pl-4">
                    <svg version="1.1" id="Layer_1"  x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" space="preserve">
                    <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
                        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
                        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
                        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                    </rect>
                    </svg>
                </span>
            )
        }

        return (
            <span className="text-5xl font-black text-gray-900">{mailchimpData.stats.total_contacts}</span>
        )
    }

    return (
        <Layout>
            <Seo title="Coming Soon" />

            <div className="flex flex-col h-screen justify-center items-center">
                <div className="h-screen flex flex-col justify-center items-center" id="topsection">
                    <h1 className="md:text-6xl lg:text-8xl text-white mb-4 text-3xl text-center">Subscribers live tracker:</h1>
                    <div className="flex items-center justify-center bg-white p-2 rounded-md ">
                        <span className="text-5xl md:text- pr-2">🚀</span>
                        {displayTotalSubs()}
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default SubscribersPage
