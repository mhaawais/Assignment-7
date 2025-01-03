import Image from "next/image";

export default function Home() {
  return (
   <main className="h-screen flex justify-center items-center flex-col gap-20">

   <div className="text-yellow-700 font-bold text-5xl p-2 text-center">
    Blog Website
   </div>

  <div>
    <div className="p-2 shadow-lg rounded-md max-w-fit hover:scale-105 active:scale-100 transition-all cursor-pointer">
        <Image src='/next.svg' alt='pic' width={200} height={300} />
      <div className="p-2">
        <h2 className="text-xl font-bold">title</h2>
        <p className="text-sm line-clamp-1">description</p>
      </div>
    </div>
   </div> 
   
   </main>
  );
}
