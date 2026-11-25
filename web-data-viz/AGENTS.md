# AGENTS.md

## Visão geral
web-data-viz é um projeto de primeiro semestre para criar aplicações web que recebem, armazenam, consultam e exibem dados, usando uma API conectada a um banco de dados.

O tema atual do projeto é um site sobre arte, ele também possui um quiz de estilos de arte (tabelas `usuario` e `resultadoQuiz`) e uma dashboard de resultados.

## Tecnologias
- Frontend: HTML, CSS, JavaScript
- Bibliotecas: Chart.js
- Backend: Node.js com Express
- Banco de dados: MySQL (biblioteca mysql2)
- Outras dependências já instaladas: cors, dotenv, nodemon

## Comandos
- `npm i`: instala as dependências
- `npm start`: inicia o projeto
- `npm run dev`: inicia com nodemon (reinicia ao salvar)
- `Ctrl + C`: para a execução

## Arquitetura
- Fluxo dos dados: frontend faz uma requisição -> routes -> controllers -> models -> banco de dados
- Siga a estrutura de pastas já estabelecida. Não crie novas pastas nem mude a organização sem minha aprovação
- `public/`: arquivos do frontend (HTML, CSS, JS)
- `src/routes/`: define os endpoints da API
- `src/controllers/`: recebe os dados da requisição, faz as validações e devolve a resposta
- `src/models/`: executa as instruções SQL no banco de dados
- `src/database/config.js`: conexão com o banco (lê as credenciais do `.env`)
- `src/database/script-tabelas.sql`: script de criação das tabelas
- `app.js`: ponto de entrada. Aqui cada router é importado e registrado com `app.use()`
- `DOCUMENTOS_DE_APOIO/`: material de estudo e exemplos. Pode ser lido como referência, mas não deve ser alterado

### Para criar um novo recurso
Siga sempre esta ordem, copiando o padrão dos arquivos existentes (o recurso `aviso` tem o CRUD completo e serve de modelo):
1. Tabela no banco (e atualizar o `script-tabelas.sql`)
2. Model em `src/models/`
3. Controller em `src/controllers/`
4. Route em `src/routes/`
5. Registrar o router no `app.js`
6. Frontend em `public/`

## Padrões de desenvolvimento
- O código existente usa `var` e `function`. Ao editar arquivos existentes, mantenha esse estilo para ficar consistente
- Em arquivos novos, pode usar `const` por padrão e `let` apenas quando houver reatribuição
- Mantenha o nome das funções no padrão do projeto (`buscarX`, `listar`, `cadastrar`, `salvar`...)
- Use nomes claros e coerentes para arquivos, funções, variáveis, endpoints e tabelas
- Controllers devem validar os dados recebidos (`undefined`) e usar `.then()` / `.catch()` como nos exemplos existentes
- Códigos HTTP usados no projeto: 200 (ok), 201 (criado), 204 (sem conteúdo), 400 (dados inválidos), 403 (não autorizado), 500 (erro no servidor)
- Escreva comentários simples em português explicando o que o código faz
- Para commits, use Conventional Commits (ex.: `feat: adiciona rota de dashboard`)

## Simplicidade
- Este é um projeto de estudante. Escreva código simples, curto e fácil de explicar
- Evite código avançado ou complexo: nada de classes, `async/await` aninhado, padrões de projeto, métodos encadeados longos, regex complicada ou abstrações genéricas
- Prefira laços `for`, `if/else` e funções pequenas e diretas
- Se existir mais de uma solução, escolha a mais simples e legível
- Se precisar usar um conceito novo, explique em linguagem simples o que ele faz

## Cuidados e restrições
- **Não altere a estrutura da API** (rotas existentes, nomes de endpoints, formato das respostas JSON, nomes de tabelas e colunas) sem minha aprovação
- Não adicione tecnologias, frameworks ou bibliotecas que não estejam listados neste documento
- Não instale pacotes novos sem perguntar
- Não altere o `app.js`, o `package.json`, os arquivos `.env` e `.env.dev` nem o `script-tabelas.sql` sem minha aprovação
- Não apague arquivos
- Nunca suba para o GitHub o `.env`, o `.env.dev` ou qualquer arquivo com senhas e dados sensíveis. Se algum deles não estiver no `.gitignore`, me avise
- Não exiba nem repita senhas e credenciais nas respostas
- As models montam o SQL concatenando variáveis (`'${variavel}'`), o que permite SQL Injection. Não reescreva isso por conta própria. Se perceber o risco em um trecho em que estiver trabalhando, me avise e sugira a correção
- Se encontrar um bug no código existente (mesmo fora do que foi pedido), me avise em vez de corrigir sozinho

## Fluxo de trabalho (validar antes de alterar)
1. **Leia** os arquivos relacionados antes de propor qualquer coisa
2. **Explique** o que pretende fazer, quais arquivos serão alterados e por quê
3. **Mostre** o código proposto e **espere minha confirmação** antes de editar qualquer arquivo
4. **Altere** apenas o que foi aprovado, sem mudanças extras
5. **Explique** o código novo ou alterado em linguagem simples, linha por linha quando necessário
6. Se o pedido estiver ambíguo, faça perguntas antes de começar

## Regra geral
Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto. Na dúvida, pergunte.