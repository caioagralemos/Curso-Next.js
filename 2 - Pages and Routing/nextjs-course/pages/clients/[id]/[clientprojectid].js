import { useRouter } from "next/router"

export default function SelectedClientProjectPage() {
    const router = useRouter()
    return (
        <div>
            <h1>Um projeto específico de um dado cliente</h1>
            <div>ID do cliente: {router.query.id}</div>
            <div>ID do projeto: {router.query.clientprojectid}</div>
            <div>Rota da pág.: {router.pathname}</div>
        </div>
    )
};
