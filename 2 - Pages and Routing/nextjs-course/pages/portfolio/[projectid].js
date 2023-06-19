// dynamic routes
// qualquer valor passado depois de /portfolio/ vai ser reconhecido como um id

import { useRouter } from "next/router"

export default function PortfolioProjectPage(){
    const router = useRouter()
    console.log(router.query)
    return (
        <div>
            <h1>The Portfolio Project Page</h1>
            <div>This project's ID: {router.query.projectid}</div>
            <div>This page's pathname: {router.pathname}</div>
        </div>
    )
}