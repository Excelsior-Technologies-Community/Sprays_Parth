import { ArrowRight } from "lucide-react";

export default function Emailsub(){
    return(
        <div className="max-w-6xl mx-auto py-12 px-4">

            <div className="flex flex-col text-center space-y-4 items-center justify-center gap-2">

                <h3 className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-extrabold">Subscribe newsletter and</h3>

                <span className="text-2xl sm:text-3xl md:text-4xl tracking-widest">get -20% off</span>
                <p className="text-sm md:text-md tracking-widest max-w-3xl">Sprays play a crucial role in manufacturing, from cooling systems in industrial machinery to lubrication processes and the creation of various products.</p>
                <div className="flex w-full items-center justify-center border border-black p-1.5 pl-6 rounded-full max-w-lg bg-white">
                    <input type="email" placeholder="Enter Email Address..." className="w-full bg-transparent outline-none text-black md:text-base  " />
                    <button className="bg-black flex items-center shrink-0 cursor-pointer justify-center rounded-full p-2 text-white"><ArrowRight size={20}/></button>
                </div>

            </div>

        </div>
    );
}