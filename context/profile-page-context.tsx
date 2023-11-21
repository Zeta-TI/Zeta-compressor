'use client'

import Image from "next/image"
import DialogDemo from "@/components/radix/Dialog"
import DeleteDialog from "@/components/radix/delete-dialog"
import router from "next/router"
import { useSession } from "next-auth/react"
import PersonalInformationContext from "./personal information-context"

export default function ProfilePageContext() {

  const { status, data: session } = useSession()

  if (status === 'unauthenticated') {
    router.push('/sign-in')
  }

  if (status === 'authenticated') {
    return (
      <div>
        <div className="h-full p-10">
          <div className="bg-white h-[400px] rounded-lg shadow-xl pb-8 mt-100">
            <div className="w-full h-[200px]">
                <Image alt='' width={1000} height={100} src="/images/Zeta-Logo.png" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div className="flex flex-col items-center -mt-20">
              <div className="personal-image">
                <label className="label">
                  <input type="file" />
                  <figure className="personal-figure">
                    <Image src="/images/noimages.png" className="personal-avatar" alt="avatar" width={100} height={100} />
                    <figcaption className="personal-figcaption">
                      <Image src="/images/clinica-odonto.jpg" className='image' alt="avatar" width={100} height={100} />
                    </figcaption>
                  </figure>
                </label>
              </div>

              <div className="flex items-center space-x-2 mt-2">
                <p className="text-2xl">{session?.user.name}</p>
                <span className="bg-blue-500 rounded-full p-1" title="Verified">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
                </span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
              <div className="flex items-center space-x-4 mt-2">
                <DialogDemo />
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <DeleteDialog />
              </div>
            </div>
          </div>

          <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col 2xl:w-1/3">
              <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">Informações pessoais</h4>
                  <ul className="mt-2 text-gray-700">
                    {/* PERSONAL INFORMATION */}
                    <PersonalInformationContext />
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}