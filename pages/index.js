import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import CurrentlyBuilding from '../components/CurrentlyBuilding';
import FeaturedWork from '../components/FeaturedWork';
import Projects from '../components/Projects';
import Services from '../components/Services';
import HowIWork from '../components/HowIWork';
import Skills from '../components/Skills';
import CurrentlyLearning from '../components/CurrentlyLearning';
import BehindTheBuild from '../components/BehindTheBuild';
import JourneyTimeline from '../components/JourneyTimeline';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import GitHubSection from '../components/GitHubSection';
import FreelanceCTA from '../components/FreelanceCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { siteConfig } from '../lib/data';

export default function Home({ darkMode, toggleDarkMode }) {
  return (
    <>
      <Head>
        <title>{`${siteConfig.name} — ${siteConfig.title}`}</title>
        <meta
          name="description"
          content={`${siteConfig.name} is a ${siteConfig.title} based in ${siteConfig.location}. ${siteConfig.description}`}
        />
        <meta name="theme-color" content="#050805" />
        <meta name="author" content={siteConfig.name} />
        <meta name="reply-to" content={siteConfig.email} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${siteConfig.name} — ${siteConfig.title}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteConfig.name} — ${siteConfig.title}`} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteConfig.siteUrl} />
      </Head>

      <div className="min-h-screen bg-[#050805] text-[#F5F5F5] transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <CurrentlyBuilding />
          <FeaturedWork />
          <Projects />
          <Services />
          <HowIWork />
          <Skills />
          <CurrentlyLearning />
          <BehindTheBuild />
          <JourneyTimeline />
          <Experience />
          <Testimonials />
          <GitHubSection />
          <FreelanceCTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
