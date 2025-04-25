import { useState } from "react";
import { Switch } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export const Contact = () => {
    const [agreed, setAgreed] = useState(false)

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="isolate bg-gray-800 px-6 py-24 sm:py-32 lg:px-8 w-full max-w-7xl mx-auto rounded-3xl border border-gray-700">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-teal-500 sm:text-5xl">Connect with Us</h2>
                    <p className="mt-2 text-lg/8 text-white-100">Let's get in touch</p>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-teal-100">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-teal-100 outline-1 -outline-offset-1 outline-teal-700 placeholder:text-teal-700 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-teal-100">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-teal-100 outline-1 -outline-offset-1 outline-teal-700 placeholder:text-teal-700 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-teal-100">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-teal-100 outline-1 -outline-offset-1 outline-teal-700 placeholder:text-teal-700 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-teal-100">
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-md bg-gray-800 px-3.5 py-2 text-base text-teal-100 outline-1 -outline-offset-1 outline-teal-700 placeholder:text-teal-700 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                        <div className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <Switch
                                    checked={agreed}
                                    onChange={setAgreed}
                                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-teal-900 p-px ring-1 ring-teal-500/5 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-50 data-[checked]:bg-teal-400"
                                >
                                    <span className="sr-only">Agree to policies</span>
                                    <span
                                        aria-hidden="true"
                                        className="size-4 transform rounded-full bg-teal-100 shadow-xs ring-1 ring-teal-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                    />
                                </Switch>
                            </div>
                           <label className="text-sm/6 text-teal-100">
                                By selecting this, you are allowing us to reply to your email{' '}
                                
                                
                            </label>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-teal-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
