# Pé na Quadra | Front-end Design e Web Development
 
Site de apresentação do **Pé na Quadra**, um app para encontrar quadras e partidas de esportes coletivos em espaços públicos. Este repositório é a parte de **Front-end Design e Web Development** da Global Solution 2026.2 (CitizenTech) da FIAP, curso de Engenharia de Software.
 
> Quem tem sede de jogo, bota o pé na quadra.
 
## Sobre o projeto
 
Muita gente tem vontade de jogar, mas a rotina aperta, a turma não fecha e nem sempre se sabe onde existe uma quadra por perto. O esporte acaba ficando para depois.
 
O Pé na Quadra propõe reunir pessoas, quadras e horários em um só lugar. O site apresenta essa ideia: o problema, a proposta de tecnologia, os objetivos, o público-alvo, os benefícios e as dúvidas mais comuns.
 
## O que o site tem
 
A página é única (landing page) e está dividida em seções, acessadas pelo menu do topo:
 
| Seção | O que mostra |
| --- | --- |
| Início | Chamada principal, logo e botões "Encontrar meu jogo" e "Como funciona" |
| Quadras | Carrossel de partidas de exemplo, com filtro por modalidade |
| Problema | Os três obstáculos para jogar: falta de companhia, horários que não batem e informação espalhada |
| Tecnologia | Recursos previstos: geolocalização, busca e filtros, interface responsiva |
| Objetivo | Conectar pessoas, facilitar o acesso e incentivar a constância |
| Público-alvo | Quem vive na correria, quem procura uma turma e quem quer voltar a jogar |
| Benefícios | Mais movimento, novas conexões e rotina mais leve |
| FAQ | Perguntas frequentes sobre participar e encontrar partidas |
 
### Carrossel de quadras com filtro
 
- Mostra cinco partidas de exemplo de futsal, basquete e vôlei, com foto, nome, local, horário e quantos jogadores faltam.
- Na opção **Todas**, os cards deslizam sozinhos em um loop contínuo, e a animação pausa quando o mouse passa por cima.
- Ao escolher **Futsal**, **Basquete** ou **Vôlei**, o carrossel para e mostra só as partidas daquela modalidade.
## Tecnologias
 
- **HTML5**, com estrutura semântica (`header`, `main`, `section`, `footer`)
- **CSS3**, com variáveis de cor, Flexbox, Grid e animação com `@keyframes`
- **JavaScript** puro, sem bibliotecas, para o filtro do carrossel
- **Google Fonts**: Anton (títulos) e Inter (textos)
Não há back-end, banco de dados nem etapa de build. Os dados das partidas são exemplos escritos direto no HTML.
 
## Estrutura de pastas
 
```
GS-CITIZEN-TECH-FRONT-WEB/
├── index.html           # página única do site
├── README.md
└── src/
    ├── css/
    │   ├── reset.css    # zera os estilos padrão do navegador
    │   └── style.css    # estilos do site
    ├── img/             # logo e fotos das quadras
    └── js/
        └── script.js    # filtro do carrossel por modalidade
```
 
## Identidade visual
 
| Cor | Uso | Código |
| --- | --- | --- |
| Preto | Fundo principal | `#090a09` |
| Amarelo | Destaque e botões | `#ffcf00` |
| Cinza escuro | Cards | `#151713` |
| Branco suave | Texto principal | `#f5f5eb` |
| Cinza claro | Texto secundário | `#acaea3` |
 
## Integrantes
 
Grupo do Pé na Quadra, FIAP, Engenharia de Software, 1º ano.
 
- Bruno Sinhorelli (RM 574415)
- Diógenes Costa (RM 559127)
- Roberto F. S. Santos (RM 575266)

Projeto acadêmico, desenvolvido para a Global Solution 2026.2 (CitizenTech).
 
