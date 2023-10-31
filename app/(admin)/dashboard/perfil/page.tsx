'use client'

import Image from "next/image"
import Header from "../../../../components/header"
import DialogDemo from "../../../../components/radix/dialog";
import DeleteDialog from '../../../../components/radix/delete-dialog'

import { useRouter } from 'next/navigation'

import RootProgress from "@/config-layout/nprogress";
import SessionIdUser from "@/services/SessionID";

export default function Profile() {

    const Session = SessionIdUser()
    const router = useRouter();

    RootProgress();

    // const [imagem, setImagem] = useState<undefined>();

    // // Função para lidar com a mudança de arquivo
    // const handleImagemChange = ({ event }: any) => {
    //     const files = event.target.files;
    //     uploadFile(files[0]);
    // }
    // const uploadFile = async (file: any) => {
    //     const formData = new FormData();
    //     formData.append("file", file);

    //     const res = await fetch('endpoint', {
    //         method: 'POST',
    //         body: JSON.stringify(formData),
    //     });

    //     if(res !== null) {
    //         toast.success("Enviado com sucesso!= ")
    //     }

    // };


    if (status === 'unauthenticated') {
        router.push('/sign-in')
    }

    if (status === 'authenticated') {
        return (
            <>
                <Header />
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
                                            <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcamera%2Bicon&psig=AOvVaw1PU45PhkcBGEjdG3AdtPy4&ust=1698106465627000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiC-9bxioIDFQAAAAAdAAAAABAI" className='image' alt="avatar" width={100} height={100} />
                                        </figcaption>
                                    </figure>
                                </label>
                            </div>

                            <div className="flex items-center space-x-2 mt-2">
                                <p className="text-2xl">{Session?.user.id}</p>
                                <span className="bg-blue-500 rounded-full p-1" title="Verified">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                    </svg>
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
                                    <li className="flex border-y py-2">
                                        <span className="font-bold w-24">Nome:</span>
                                        <span className="text-gray-700">{Session?.user.name}</span>
                                    </li>
                                    <li className="flex border-b py-2">
                                        <span className="font-bold w-24">Telefone:</span>
                                        <span className="text-gray-700">{Session?.user.contact}</span>
                                    </li>
                                    <li className="flex border-b py-2">
                                        <span className="font-bold w-24">Email:</span>
                                        <span className="text-gray-700">{Session?.user.email}</span>
                                    </li>
                                    <li className="flex border-b py-2">
                                        <span className="font-bold w-24">CPF:</span>
                                        <span className="text-gray-700">{Session?.user.cpf}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

