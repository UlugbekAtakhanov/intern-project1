import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import ApexChart from "../charts/ApexChart"

const Modal = ({ data, isModalOpen, setIsModalOpen }) => {
    return (
        <>
            <Transition
                as={Fragment}
                show={isModalOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Dialog onClose={() => setIsModalOpen(false)} className=" fixed inset-0 flex items-center justify-center bg-black/50">

                    <Dialog.Panel className=" bg-white max-w-[90%] w-full mx-4 rounded-lg text-black p-4 relative flex flex-col  overflow-x-hidden overscroll-y-scroll">
                        <section className="print:p-4 mb-12">
                            <Dialog.Title>

                            </Dialog.Title>

                            <div className='flex-1my-2 mt-4'>
                                {data.utilization.length ? (
                                    <>
                                        <h1 className='text-lg font-semibold'>{data.full_name}</h1>
                                        <ApexChart data={data} />
                                    </>
                                ) : null}
                            </div>
                        </section>
                        <div className='text-right'>
                            <button onClick={() => setIsModalOpen(false)} className='button-red w-max text-sm'>Close</button>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </Transition >
        </>
    )
}

export default Modal