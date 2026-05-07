import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          DeltaV Edge Dashboard
        </h1>

        <p className="text-gray-400">
          Sistema listo para consultar APIs del nodo Edge
        </p>
      </div>
    </main>
         </div>
  );
}
