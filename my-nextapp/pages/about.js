import Head from "next/head";
import Header from "/components/header"
import Footer from "/components/footer"
import AboutUs from "/components/aboutUs"
import style from '/styles/aboutUs.module.css'
export default function About(){
    return(
        <>
        <Head>
            <title>about</title>
        </Head>
        <main className= {style.main} >
         <header>
            {/* navBar */}
            <Header>
            </Header>
         </header>
         <article className={style.container}  >
            <AboutUs></AboutUs>
         </article>
         <footer className= {style.footer}>
    <Footer></Footer>
 </footer>
        </main>
        
        </>
    )


}