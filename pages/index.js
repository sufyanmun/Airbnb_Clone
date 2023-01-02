import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import LargeCard from "../components/LargeCard"
import MediumCard from "../components/MediumCard"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            {/* Header Section */}
      <Header/>
            {/* Banner Section */}
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 text-center"> Explore </h2>
        </section>
        <MediumCard/>
        <LargeCard/>
      </main>

    </>
  );
}
