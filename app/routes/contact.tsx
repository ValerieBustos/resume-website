import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import gradPic from "~/media/valerie-grad.png";

export default function Contact() {
  return (
    <div className="p-6 bg-gradient h-[30rem]">
      <div className="flex flex-col items-center space-y-12 pt-6">
        <div className="flex space-x-6">
          <img
            src={gradPic}
            className="h-[24rem] rounded-full hidden md:inline-flex"
          />
          <div className="flex flex-col text-slate-800 border-4 border-violet-100 bg-violet-50 px-10 py-16 rounded-[6rem] rounded-bl-none w-[22rem] space-y-6 ">
            <h1 className="text-3xl font-bold mb-4">Let's get in touch!</h1>
            <div className="flex items-center space-x-3">
              <div className="p-1.5 rounded-full bg-violet-300 text-white">
                <EnvelopeIcon aria-hidden height={16} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-semibold text-slate-500">Email</p>
                <p className="text-sm">valeried.bustos@hotmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-1.5 rounded-full bg-violet-300 text-white">
                <PhoneIcon aria-hidden height={16} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-semibold text-slate-500">Phone</p>
                <p className="text-sm">(226) 507 2357</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-1.5 rounded-full bg-violet-300 text-white">
                <MapPinIcon aria-hidden height={16} />
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-semibold text-slate-500">Based in</p>
                <p className="text-sm">Waterloo, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
