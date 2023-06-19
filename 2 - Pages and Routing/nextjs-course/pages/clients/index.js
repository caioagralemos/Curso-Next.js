import Link from "next/link"

export default function ClientsPage() {
    const clients = [
        { id: 'caioagralemos', name: "Caio"},
        { id: 'chaparoule', name: "Renato"},
        { id: 'paugordinho', name: "Zeca"},
    ]
    return (
        <div>
            <h1>
                The Clients Page
            </h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <ul>
                            <Link href={`/clients/${client.id}`}>{client.name}</Link>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
};
