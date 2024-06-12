import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import gradPic from "~/media/valerie-grad.png";

export default function Contact() {
  return (
    <div className="flex flex-1 p-6 justify-center  bg-gradient dark:bg-gradientdark">
      <div className="flex items-center space-y-12 pt-6">
        <div className="flex justify-center space-x-6">
          <img
            aria-label="A picture of Valerie Bustos on her graduation"
            src={gradPic}
            className="h-[30rem] rounded-full hidden md:inline-flex"
          />
          <div className="flex flex-col justify-center text-slate-800 border-4 border-violet-100 bg-violet-50 dark:bg-slate-800 dark:text-white dark:border-slate-700 px-10 py-16 rounded-[6rem] rounded-bl-none w-[25rem] space-y-6 ">
            <h1 className="text-4xl font-bold mb-4">Let's get in touch!</h1>
            <div className="flex items-center space-x-3">
              <div className="p-1.5 rounded-full bg-violet-300 dark:bg-violet-800 text-white">
                <EnvelopeIcon aria-hidden height={20} />
              </div>
              <div className="space-y-0.5">
                <p className="text-base font-semibold text-slate-500 dark:text-slate-400">
                  Email
                </p>
                <p className="text-lg">valerie@valeriebustos.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-1.5 rounded-full bg-violet-300 dark:bg-violet-800 text-white">
                <PhoneIcon aria-hidden height={20} />
              </div>
              <div className="space-y-0.5">
                <p className="text-base font-semibold  dark:text-slate-700 text-slate-500 dark:text-slate-400">
                  Phone
                </p>
                <p className="text-lg">(226) 507 2357</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-1.5 rounded-full bg-violet-300 dark:bg-violet-800 text-white">
                <MapPinIcon aria-hidden height={20} />
              </div>
              <div className="space-y-0.5">
                <p className="text-base font-semibold text-slate-500 dark:text-slate-400">
                  Based in
                </p>
                <p className="text-lg">Waterloo, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
