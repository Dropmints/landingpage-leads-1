import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import twitterLogo from '../images/twitter-logo-white.svg';
import dropmintsLogo from '../images/dropmints-white-logo-full.svg';

const IndexPage = () => (
  <Layout>
    <Seo title="Coming Soon" />
    
    <div className="flex flex-col h-screen min-h-5/6">
      <div className="h-5/6 flex flex-col justify-center items-center" id="topsection">

        <a href="https://twitter.com/dropmints" className="block md:hidden mb-auto mt-8 md:mt-0">
          <img className="w-8" src={twitterLogo} alt="the twitter logo" />
        </a>

        <img draggable="false" className="biglogo w-96 mb-auto md:mb-0 select-none" src={dropmintsLogo} alt="the logo of Dropmints" />
      </div>

      <div className="h-1/6 flex flex-col-reverse md:flex-row justify-between items-center" id="bottomsection">

        <a href="https://twitter.com/dropmints" className="hidden md:block md:mb-0 md:ml-16 hover:fill-blue-800 transform hover:bg-blue-500 rounded-full hover:bg-opacity-50 transition duration-500 hover:scale-110">
          <img className="w-10 md:w-10 m-4" src={twitterLogo} alt="the twitter logo" />
        </a>

        <form action="https://formspree.io/f/meqvrlan" method="POST" className="mb-12 md:mb-8 md:mr-16">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col">
              <label className="mb-4 text-white text-xl font-bold" htmlFor="join-input">Sign up and stay in the loop.</label>
            </div>
            <div>
              <input name="dropmintsform" id="join-input" type='text'  placeholder="email@example.com" className="bg-transparent border-solid border-2 border-white px-2 py-2 placeholder-gray-100 rounded-lg text-white focus:outline-none" required />
              <button type="submit" className="ml-4 bg-transparent border-solid border-2 border-white px-2 py-2 rounded-lg shadow text-white focus:outline-white">Join</button>
            </div>
          </div>
        </form>
        
      </div>


    </div>

  </Layout>
)

export default IndexPage
