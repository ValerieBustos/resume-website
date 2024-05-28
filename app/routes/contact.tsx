import gradPic from "~/media/valerie-grad.jpg";

export default function Contact() {
  return (
    <div className="p-6 bg-gradient h-[30rem]">
      <div className="flex flex-col items-center space-y-12 pt-6">
        <div className="flex space-x-6">
          <img src={gradPic} className="h-[24rem] rounded-xl" />
          <div className="flex flex-col border-4 border-violet-100 bg-violet-50 px-10 py-16 rounded-[6rem] rounded-bl-none w-[22rem] space-y-6 ">
            <h1 className="text-3xl font-bold">Let's get in touch!</h1>
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-500">Email</p>
              <p className="text-sm">valeried.bustos@hotmail.com</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-500">Phone</p>
              <p className="text-sm">{"(226)-507-2357"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
