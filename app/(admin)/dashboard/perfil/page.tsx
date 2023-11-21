
import ProfilePageContext from "@/context/profile-page-context";

export default function Profile() {

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

    return (
        <div>
            <ProfilePageContext />
        </div>
    )
}

