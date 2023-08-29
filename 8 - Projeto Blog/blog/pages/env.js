export default function EnvTest() {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div style={containerStyle}>
            <div>
                <p>Nome da conta: {process.env.nome_conta}</p>
                <p>Senha da conta: {process.env.senha_conta}</p>
            </div>
        </div>
    );
}
