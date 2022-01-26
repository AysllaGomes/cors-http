# cors-http

1. [Meta](#1-meta)
2. [O que é CORS ?](#2-o-que--cors-)
3. [Como funciona o CORS](#3-como-funciona-o-cors)

## 1. Meta

O cors-http é um microsserviço com a finalidade de guiá-lo a configurar o CORS com o Express.

Este projeto é codificado em [TypeScript](<https://www.typescriptlang.org/docs/home.html>) e utiliza as tecnologias [NodeJS](<https://pt.wikipedia.org/wiki/Node.js>) e [Express](https://expressjs.com/pt-br/).

## 2. O que é CORS ?

CORS significa ``Cross-Origin Resourse Sharing``. Isso nos permite relaxar a segurança aplicada a uma API. Isso é feito ignorando os ``Access-Control-Allow-Origin`` cabeçalhos, que especificam quem ``origins`` pode acessar a API.

Em outras palavras, CORS é um recurso de segurança do navegador que restringe solicitações HTTP de origem cruzada com outros servidores e especifica quais domínios acessam seus recursos.

Para maiores referencias acesse a [política CORS](<https://www.ibm.com/docs/en/sva/10.0.1?topic=control-cross-origin-resource-sharing-cors-policies>)

## 3. Como funciona o CORS

Uma API é um procedimento definido para dois programas se comunicarem. Isso significa que os recursos da API são consumidos por outros clientes e servidores.

Os cenários:

![client-server-success.png](img/client-server-success.png)

No exemplo, O cliente e o servidor têm a mesma origem, e o acesso aos recursos será bem-sucedido. Assim você está tentando acessar recursos em seu servidor e o mesmo servidor trata da solicitação.

![client-server-not-success.png](img/client-server-not-success.png)

O cliente e o servidor têm origem diferente um do outro, ou seja, acessam recursos de um servidor diferente. Nesse caso, tentar fazer uma solicitação a um recurso no outro servidor falhará.

Esta é uma preocupação de segurança para o navegador. O CORS entra em ação para desabilitar esse mecanismo e permitir o acesso a esses recursos. O CORS adicionará um cabeçalho de resposta ``access-control-allow-origins`` e especificará quais origens são permitidas. CORS garante que estamos enviando os cabeçalhos corretos.

Portanto, um servidor público manipulando uma API pública adicionará um cabeçalho relacionado ao CORS à resposta. O navegador na máquina cliente examinará esse cabeçalho e decidirá se é seguro entregar essa resposta ao cliente ou não.


## 4. ---

Eventualmente, concluímos que ao realizar a implantção de um aplicativo no servidor, você não deve aceitar solicitações de todos os domínios. Em vez disso, você deve especificar qual origem pode fazer solicitações ao seu servidor.

Dessa forma, você pode bloquear usuários que tentam clonar seu site ou fazer solicitações de servidores não autorizados. Isso é importante uma medida de segurança.

Agora aplique isso em suas API's e tenha uma codificação!
