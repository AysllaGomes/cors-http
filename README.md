# cors-http

1. [Descrição](#1-descrio)
2. [O que é CORS ?](#2-o-que--cors-)
3. [Como funciona o CORS](#3-como-funciona-o-cors)
4. [Aos finalmente](#4-aos-finalmente)

## 1. Descrição

O cors-http é um microsserviço com a finalidade de guiá-lo a configurar o CORS com o Express.

Este projeto é codificado em [JavaScript](<https://devdocs.io/javascript/>) e utiliza as tecnologias [NodeJS](<https://pt.wikipedia.org/wiki/Node.js>) e [Express](https://expressjs.com/pt-br/).

## 2. O que é CORS ?

CORS significa ``Cross-Origin Resourse Sharing``. Isso nos permite relaxar a segurança aplicada a uma API. Isso é feito ignorando os ``Access-Control-Allow-Origin`` cabeçalhos, que especificam quem ``origins`` pode acessar a API.

Em outras palavras, CORS é um recurso de segurança do navegador que restringe solicitações HTTP de origem cruzada com outros servidores e especifica quais domínios acessam seus recursos.

Para maiores referencias acesse a [política CORS](<https://www.ibm.com/docs/en/sva/10.0.1?topic=control-cross-origin-resource-sharing-cors-policies>).

## 3. Como funciona o CORS

Uma API é um procedimento definido para que dois programas se comuniquem. Isso significa que os recursos da API são consumidos por outros clientes e servidores.

Possíveis cenários:

![client-server-success.png](img/client-server-success.png)

No exemplo, acima, o cliente e o servidor têm a mesma origem, e o acesso aos recursos será bem-sucedido. Assim quando for realizar o acesso de recursos em seu servidor o mesmo servidor irá tratar a solicitação.

![client-server-not-success.png](img/client-server-not-success.png)

Neste caso, o cliente e o servidor têm origens diferentes um do outro, ou seja, acessam recursos de um servidor diferente. Nesse caso, ao tentar fazer uma solicitação a um recurso no outro servidor, ele irá falhar.

Esta é uma preocupação de segurança para o navegador. O CORS entra em ação para desabilitar esse mecanismo e permitir o acesso a esses recursos. O CORS adicionará um cabeçalho de resposta ``access-control-allow-origins`` e especificará quais origens são permitidas. CORS garante que estamos enviando os cabeçalhos corretos.

Portanto, um servidor público manipulando uma API pública adicionará um cabeçalho relacionado ao CORS à resposta. O navegador na máquina cliente examinará esse cabeçalho e decidirá se é seguro entregar essa resposta ao cliente ou não.

## 4. Aos finalmente

Eventualmente, concluímos que, ao realizar a implantação de um aplicativo no servidor, você não deve aceitar solicitações de todos os domínios. Em vez disso, você deve especificar qual origem pode fazer solicitações ao seu servidor.

Dessa forma, você pode bloquear usuários que tentam clonar seu site ou fazer solicitações de servidores não autorizados. Isto é uma importante medida de segurança.

Agora aplique isso em suas API's e tenha uma boa codificação!
