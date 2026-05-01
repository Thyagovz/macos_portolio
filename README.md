# macOS Portfolio

Este projeto é um portfólio interativo que simula a interface do sistema operacional macOS. Desenvolvido com foco em uma experiência de usuário imersiva e moderna, o projeto demonstra habilidades em desenvolvimento frontend, animações complexas e gerenciamento de estado.

## Visão Geral

A aplicação reproduz elementos clássicos do macOS, como a Barra de Menu, o Dock dinâmico e janelas redimensionáveis/arrastáveis. O objetivo é apresentar informações profissionais (projetos, habilidades, certificados e contato).

## Tecnologias Principais

O desenvolvimento foi pautado pela escolha de ferramentas modernas que garantem performance e escalabilidade:

- **React 19**: Biblioteca base para a construção da interface declarativa.
- **Vite**: Build tool de última geração para um ambiente de desenvolvimento rápido.
- **GSAP (GreenSock Animation Platform)**: Utilizado para as animações fluidas da interface, como a abertura de janelas e o efeito do Dock.
- **Zustand**: Gerenciamento de estado leve e eficiente para controlar o foco das janelas e o sistema de arquivos simulado.
- **Tailwind CSS**: Framework utilitário para estilização rápida e responsiva.
- **Dayjs**: Manipulação de datas e exibição do relógio em tempo real.

## Estrutura do Projeto

A organização do código foi pensada para facilitar a manutenção e a expansão de funcionalidades:

- `src/constants`: Centraliza todo o conteúdo do portfólio (textos, links e metadados), permitindo atualizações sem tocar na lógica dos componentes.
- `src/store`: Implementação do estado global com Zustand (localização, janelas abertas, etc).
- `src/windows`: Componentes que representam cada "aplicativo" interno (Safari, Terminal, Finder).
- `public`: Armazena ativos estáticos como ícones, imagens e PDFs de certificados.

## Como Executar

Para rodar o projeto localmente, siga os passos abaixo:

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Considerações de Design

Diferente de portfólios convencionais, esta abordagem prioriza a interatividade. A escolha por utilizar um "clone" do MacOs reflete a maturidade do projeto, focando na qualidade técnica e na fidelidade da simulação da interface original.
