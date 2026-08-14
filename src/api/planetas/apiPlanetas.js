export default class ApiPlanetas {

    static async obterUnicoPorSlug(slug) {
        return await this.obter({ "condicoes": { "slug": slug } });
    }

    static async obterTodos() {
        return await this.obter({ "condicoes": {} });
    }

    static async obter(json) {
        const url = "https://sistemasolar.docapi.dev/planetas/obter";
        
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(json),
            redirect: 'follow'
        };

        try {
            const response = await fetch(url, requestOptions);
            
            // Tenta converter a resposta para JSON
            const responseJson = await response.json().catch(() => null);

            if (response.ok) {
                // Retorna a propriedade de resposta ou o payload completo
                return responseJson?.resposta || responseJson;
            } else {
                // Mensagem de erro descritiva com status HTTP e mensagem da API se houver
                const mensagemErro = responseJson?.mensagem || responseJson?.erro || `Erro HTTP: ${response.status} - ${response.statusText}`;
                throw new Error(mensagemErro);
            }
        } catch (error) {
            console.error("Erro na requisição ApiPlanetas:", error);
            throw error;
        }
    }
}