# Job Portal UI

App React (Vite + Tailwind) de portal de vagas — SPA com dados mockados e persistência em `localStorage` (sem backend real).

Este repositório é o projeto do curso [Claude Code Bootcamp](https://www.udemy.com/course/claude-code-bootcamp/) (Udemy): além do app, ele traz toda a configuração do Claude Code (regras, hooks, skills, subagentes, MCP e automações no GitHub) versionada em `.claude/`.

## Stack

- React 19
- Vite 7
- Tailwind CSS 4
- React Router 7
- Font Awesome + Lucide React (ícones)
- react-toastify (notificações)

## Comandos

- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — build de produção
- `npm run lint` — roda o ESLint
- `npm run preview` — pré-visualiza o build de produção

## Funcionalidades do curso (Claude Code)

Tudo o que foi configurado ao longo do curso, na ordem em que entrou no histórico do git:

| Funcionalidade                      | Onde fica                                   | Commit                                                             |
| ----------------------------------- | ------------------------------------------- | ------------------------------------------------------------------ |
| Memória do projeto e regras         | `CLAUDE.md`, `.claude/rules/`               | `cf28b2d` chore: initialize job-portal-ui as standalone repository |
| Skills e slash commands             | `.claude/skills/`, `.claude/commands/`      | `cf28b2d`                                                          |
| Automação com GitHub Actions        | `.github/workflows/`                        | `cf28b2d`                                                          |
| Hooks de pré-escrita                | `.claude/hooks/`, `.claude/settings.json`   | `fd7199a` chore: add line-limit and protect-files pre-write hooks  |
| Refatoração assistida (lazy-load)   | `src/App.jsx`                               | `a889ed8` refactor: lazy-load page components in App routes        |
| Servidores MCP                      | `.mcp.json`                                 | `b7a022a` chore: add MCP server config for devtools, playwright…   |
| Subagentes especializados           | `.claude/agents/`                           | `d7957cf` chore: add specialized review and debugging subagents    |
| Agent teams (experimental)          | `.claude/settings.json`, `teams-agents-prompt-example` | `0f2b6e3`, `d8a68ec`                                    |

### Memória e regras (`CLAUDE.md` + `.claude/rules/`)

O `CLAUDE.md` concentra comandos, estrutura de pastas, convenções de git, padrões de código e arquitetura. As mesmas orientações estão divididas em arquivos temáticos em `.claude/rules/`:

- `architecture.md` — stack, camadas de contexto e ordem dos providers
- `coding-standards.md` — JSX puro, componentes funcionais, Tailwind, tema via `ThemeContext`
- `data-layer.md` — mock data, services com `delay()` e chaves de `localStorage`
- `routing-and-roles.md` — papéis e proteção de rotas com `ProtectedRoute`
- `git-conventions.md` — branches, Conventional Commits e PRs

### Skills e slash commands

| Comando                       | O que faz                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------- |
| `/analyze-issue <nº>`         | Busca uma issue do GitHub, explora o repositório e gera uma especificação técnica pronta para implementar (somente leitura: `Read, Grep, Glob`). |
| `/feature-guide <feature>`    | Explica de ponta a ponta como uma funcionalidade funciona (componente → contexto → service → dados). Roda em contexto isolado (`context: fork`) com o agente `Explore`. |
| `/investigate-change <alvo>`  | Investigador de histórico git: descobre quem mudou o quê, quando e por quê em um arquivo, trecho, função ou intervalo de linhas, e gera um relatório (ex.: `change-investigation-report.md`). |

### Hooks (`PreToolUse` em `Write|Edit`)

Configurados em `.claude/settings.json`, rodam antes de qualquer escrita do Claude:

- `secret-guard.py` — bloqueia escritas que contenham segredos hardcoded (chaves Anthropic/OpenAI/Stripe, tokens do GitHub etc.)
- `line-limit.py` — bloqueia escritas que deixariam um arquivo com mais de 500 linhas
- `protect-files.sh` — bloqueia edição de arquivos protegidos (`.env`, `package-lock.json`, `.git/`)

Há também um hook de `Notification` que dispara `notify-send` quando o Claude precisa de atenção.

### Servidores MCP (`.mcp.json`)

- **chrome-devtools** — inspeção do app no navegador (console, rede, performance, Lighthouse)
- **playwright** — automação e testes de navegador
- **context7** — documentação atualizada de bibliotecas

### Subagentes (`.claude/agents/`)

Todos usam o modelo `sonnet` e memória por projeto (`memory: project`, armazenada em `.claude/agent-memory/`):

| Agente                  | Foco                                                                             |
| ----------------------- | -------------------------------------------------------------------------------- |
| `bug-investigator`      | Depuração sistemática de bugs (contextos, rotas, `localStorage`, camada de services) |
| `code-quality-reviewer` | Revisão de convenções, estrutura e boas práticas                                 |
| `performance-reviewer`  | Revisão exclusiva de problemas de performance                                    |
| `security-auditor`      | Revisão de autenticação, autorização, entrada de usuário e dependências          |

### Agent teams (experimental)

Habilitado com `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` em `.claude/settings.json`. O arquivo [`teams-agents-prompt-example`](./teams-agents-prompt-example) traz um prompt de exemplo que monta um time de três agentes (segurança, bugs e padrões de código) para revisar o portal e gerar um relatório, sem alterar código.

### Plugins e automação no GitHub

- Plugin `commit-commands` habilitado (`/commit`, `/commit-push-pr`, `/clean_gone`), seguindo Conventional Commits.
- `.github/workflows/claude.yml` — responde a menções `@claude` em issues, PRs e reviews.
- `.github/workflows/claude-code-review.yml` — revisão automática de PRs (`/code-review --comment`) em `opened`, `synchronize`, `ready_for_review` e `reopened`.

## Comandos do Claude Code usados no curso

### Nativos

| Comando               | O que faz                                                                  | Onde apareceu                                          |
| --------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------ |
| `/memory`             | Edita os arquivos de memória, como o `CLAUDE.md`                           | `CLAUDE.md` e `.claude/rules/`                         |
| `/hooks`              | Mostra e configura os hooks                                                | Hooks `PreToolUse` em `.claude/settings.json`          |
| `/agents`             | Cria e gerencia subagentes                                                 | `.claude/agents/`                                      |
| `/mcp`                | Lista, conecta e autentica servidores MCP                                  | `.mcp.json`                                            |
| `/plugins`            | Gerencia plugins                                                           | Plugin `commit-commands`                               |
| `/reload-plugins`     | Recarrega os plugins sem reiniciar a sessão                                | Plugin `commit-commands`                               |
| `/install-github-app` | Instala o app do Claude no GitHub e gera os workflows                      | `.github/workflows/`                                   |
| `/login`              | Autentica a conta                                                          | —                                                      |
| `/exit`               | Encerra a sessão                                                           | —                                                      |
| `/rewind`             | Volta a conversa e/ou o código a um ponto anterior da sessão               | Desfazer alterações sem recorrer ao git                |
| `/branch`             | Cria uma ramificação da conversa atual para testar outra abordagem         | Explorar alternativas sem perder a sessão original     |
| `/worktree`           | Trabalha em um git worktree isolado, sem mexer na branch atual             | Tarefas paralelas em branches separadas                |

### Do plugin `commit-commands` e do projeto

| Comando                           | O que faz                                                     |
| --------------------------------- | ------------------------------------------------------------- |
| `/commit-commands:commit`         | Cria um commit no padrão Conventional Commits                 |
| `/commit-commands:commit-push-pr` | Faz commit, push e abre o PR                                  |
| `/investigate-change`             | Investiga o histórico git de um alvo e gera um relatório      |

## Documentação

Mais detalhes sobre estrutura de pastas, convenções de código, git e arquitetura estão em [`CLAUDE.md`](./CLAUDE.md) e em [`.claude/rules/`](./.claude/rules).
