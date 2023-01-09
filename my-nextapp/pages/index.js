import Head from 'next/head'
import style from '/styles/main.module.css'
import Header from "/components/header.js"
import Carts from "/components/carts"
import Footer from '/components/footer'
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
 
      <main className = {style.content}>
  {/* navbar */}
      <header>
      <Header>
     </Header>
      </header>
    {/* cards */}
    <article className={style.container}>
    <Carts animalName = "Tiger" imgSrc ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGg8aK_DdSPkLjpo660XQNQnEr-xmRw4VwTMpOZzHm7V0ZzQZn9At2eU4gKt6WaEzqfA&usqp=CAU">
     </Carts>
     <Carts animalName = "Fox" imgSrc ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_-wBt6a41rmvX7FOUqx4KRhpgvPtsZGfJw&usqp=CAU" ></Carts>
     <Carts animalName="Horse" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPzKqrW-QQ_x7Ws6OqidK8Cj5-nzqmn6RvgzaSZWjHo0C71f8TvzivqO484Jzr7PgoaI&usqp=CAU"></Carts>
     <Carts animalName = "Dog" imgSrc="data:image/jpeg;base64,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  ">
     </Carts> 
    </article>
{/* footer */}
 <footer className= {style.footer}>
    <Footer></Footer>
 </footer>
      </main>
    </>
  )
}
