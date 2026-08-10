export default class ApiPlanetas {

    static async obterUnicoPorSlug(slug) {
        return(this.obter({"condicoes": { "slug": slug }}));
    }

    static async obterTodos() {
        return(this.obter({ condicoes: {}}));
    }

    static async obter(json) {
        var requestOptions = {
        method: 'POST',
        body: JSON.stringify(json),
        redirect: 'follow'
        };

        try {
        var response = await fetch("https://sistemasolar.docapi.dev/planetas/obter", requestOptions);
        var responseJson = await response.json();
        if (response.ok) {
            // Requisão foi um sucesso!
            // A partir desse trecho você pode implementar o seu codigo que irá pegar os dados da api e colocar no front-end por exemplo.
            return (responseJson?.resposta ||responseJson);

        } else {
            throw new Error(response);
        }
        } catch (error) {
        console.error(error);
        console.log("Error: ", error);
        throw error;
        }
            }

}
