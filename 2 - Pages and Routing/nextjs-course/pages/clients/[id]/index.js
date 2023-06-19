// nested dynamic routes and paths

import { useRouter } from "next/router"

export default function ClientProjectsPage() {
    const router = useRouter()

    function loadProjectHandler() {
        // load data
        router.replace(`/clients/${router.query.id}/project1`)
    }

    return (
        <div>
            <h1>Os projetos de @{router.query.id}</h1>
            <button onClick={loadProjectHandler}>Carregar projeto A</button>
        </div>
    )
};
