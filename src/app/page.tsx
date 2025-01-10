import React from "react"
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
  
  <section>

        <Header />

    <main className="min-h-screen flex flex-col justify-center items-center bg-slate-200">

        <div className="p-5 shadow-lg rounded-md max-w-fit hover:scale-125 active:scale-100 transition-all cursor-pointer flex flex-col items-center gap-2 bg-indigo-700">
            <h1 className="font-bold text-3xl ">Click to see...!</h1>
            <p className="text-base font-medium">Data Fetching on Client and Server Components</p>
          <div className="p-2 space-x-7">

           <Link href={"/client"} target="_blank"><Button className="bg-lime-500 text-lg py-8">Client-side-data <br /> Fetching</Button></Link>
           <Link href={"/server"} target="_blank"><Button className="bg-lime-500 text-lg py-8">Server-side-data <br /> Fetching</Button></Link>

          </div>

        </div>

        <div className="mt-7 p-6 flex flex-col gap-4 justify-center">
          <h2 className="font-medium text-2xl">Here is a Cart !.</h2>
          <Link href={"/cart"} target="_blank">
          <Button className="text-white hover:scale-110 active:scale-100 transition-all text-2xl px-5">
              Go to Cart
          </Button></Link>
        </div>
  
    </main>
 
  </section>

  );
}
