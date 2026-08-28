# IRL Construtora Sustentável — site institucional

Site estático (HTML, CSS e JS puros, sem build e sem backend) para a IRL
Construtora Sustentável, de Montes Claros/MG. Foco em **construção do zero,
reforma e ampliação, e instalação de sistemas sustentáveis em casa pronta**.

```
site/
├── index.html                 página inteira
├── assets/css/style.css       sistema visual
├── assets/js/main.js          nav fixa, menu do celular, seção atual,
│                              revelação em scroll, animação do logotipo
├── assets/video/logo.mp4      animação da marca (10 s, 2,9 MB, sem som útil)
└── assets/img/                fotos do case + logotipo
    ├── logo-marca.png         símbolo verde, fundo transparente (nav)
    ├── logo-marca-branca.png  símbolo em branco (rodapé, fundo escuro)
    ├── logo-poster.jpg        quadro final do vídeo (poster do hero)
    ├── og-marca.jpg           1200×630, prévia do link no WhatsApp
    ├── favicon.png            ícone da aba
    └── apple-touch-icon.png   ícone de atalho no celular
```

## Logotipo

Todas as imagens do logotipo saíram do próprio `logo.mp4` (quadros extraídos e
recortados com o fundo removido) — não há arquivo vetorial. Se a IRL tiver o
logotipo em SVG/AI/PNG original, vale trocar: é só substituir os arquivos
`logo-marca*.png` mantendo os nomes.

O vídeo aparece no hero, dentro do painel à direita do texto. Ele só baixa e
toca sozinho em tela de 760 px ou mais, com conexão boa e sem "reduzir
movimento" ligado no sistema. Nos outros casos fica o quadro final (`logo-poster.jpg`)
com um botão para quem quiser ver a animação. São 2,9 MB — se quiser deixar mais
leve, comprima o mp4 (o áudio pode ser removido: ele toca sempre no mudo).

## Publicar

Arraste `site/` para <https://app.netlify.com/drop>, ou use Vercel, GitHub
Pages ou FTP. Ao definir o domínio, atualize em `index.html`:

- `<link rel="canonical">`
- `og:image` e `og:url` — precisam de **URL absoluta**, senão a prévia não
  aparece ao compartilhar no WhatsApp. A prévia usa `og-marca.jpg` (o
  logotipo sobre o verde da marca). O WhatsApp guarda a prévia em cache por
  URL: ao trocar a imagem, salve com **outro nome de arquivo**, senão as
  conversas antigas seguem mostrando a antiga
- `"url"` dentro do JSON-LD

## Ordem das seções

A página é ordenada para conversão, não para catálogo: prova primeiro,
oferta depois.

    hero → obras entregues → confiança → serviços → sustentável
         → como trabalhamos → perguntas → contato

Se mudar a ordem no HTML, ajuste também a ordem dos links da nav: o
destaque da seção atual segue a posição na página, não a ordem do menu. E
confira o revezamento de fundos das seções (`--papel`, `--branco`,
`--mata`) para não deixar duas iguais colada uma na outra.

## Pendências de conteúdo

O site tem nove blocos marcados com `PENDENTE` no `index.html`. Cada um é
código pronto, comentado, esperando informação que só a IRL tem. Para
ligar um deles: apague a linha `<!-- ====` e o texto de explicação até a
linha em branco, e apague a linha `==== -->` no fim. O bloco entra no ar
com o estilo já feito.

| Falta | O que precisa | Onde |
|---|---|---|
| **Depoimentos** | 3 a 5 frases de clientes com nome, bairro e obra | `#case` |
| **Nota do Google** | link do perfil, nota e nº de avaliações | `#case` |
| **Faixa de preço** | R$/m² de obra nova, faixa de uma casa de 100 m², piso de reforma | `#servicos` |
| **Portfólio** | fotos de outras obras, um antes e depois de reforma, foto de canteiro | `#case` |
| **Número de operação** | obras entregues ou m² construídos | hero |
| **Economia dos sistemas** | quanto cada sistema economiza de fato | `#obra` |
| **Regra de atraso** | o que o contrato prevê se a obra atrasar | `#faq` |
| **Identificação** | CNPJ, CREA/CAU do responsável, endereço, horário | rodapé |
| **Tempo de resposta** | horário de atendimento e prazo real de resposta | `#contato` |

Nada disso é enfeite: a falta de prova de terceiro e a ausência de faixa
de preço são as duas maiores razões para alguém sair do site sem chamar.

## Fotografia

As fotos existentes são registros de celular de uma casa vazia, com fiação
e mato no quadro. Servem como prova na galeria, mas **não servem para o
topo da página** — por isso o hero mostra a animação da marca, e não uma
foto. Quando houver fotografia profissional (fachada em fim de tarde,
ambientes decorados, canteiro organizado), o painel do hero deve virar
foto: é o espaço mais valioso do site, e logotipo não vende obra.

## Medição

Todo CTA tem `data-cta` e o `main.js` empurra cada clique para o
`dataLayer` como evento `clique_cta`. Falta apenas colar o GA4 ou o GTM no
`<head>` (há um comentário marcando o lugar). Sem isso não há como saber
qual seção gera orçamento.

## Onde mexer

| O que | Onde |
|---|---|
| WhatsApp de obra | `wa.me/5538998463300` em `index.html` |
| Roteiro das mensagens de WhatsApp | o texto depois de `?text=` — hoje cada CTA já manda as perguntas de qualificação (o quê, onde, quando) |
| WhatsApp de venda de imóvel | `wa.me/5531998264493` em `index.html` |
| Serviços | seção `#servicos` |
| Janela de cada sistema na obra | seção `#obra`, classes `.sis__linha span.on` |
| Case | seção `#case` |
| Etapas do processo | seção `#processo` |
| Cores e tipografia | `:root` no topo de `style.css` |

A linha do tempo da obra funciona por células: cada sistema tem seis `<span>`,
um por fase. Marcar `class="on"` acende a célula.

## Precisa de confirmação antes de divulgar

Estas afirmações foram escritas por inferência, não a partir de informação
confirmada pela IRL:

1. **As cinco etapas do processo** (`#processo`) e os **três compromissos**
   da seção Confiança — orçamento fechado, cronograma por etapa e registro do
   andamento. São um fluxo plausível de construtora, não o processo real da
   IRL. Como a seção Confiança é o coração do site, é o item mais importante
   a validar: se a IRL não entrega alguma dessas três coisas hoje, tem de sair
   ou de mudar de redação.
2. **A lista "Também fazemos"** — quinze serviços de construção civil comuns.
   Corte o que a IRL não faz.
3. **As janelas de cada sistema na linha do tempo** — corretas em termos
   construtivos gerais, mas vale conferir com quem executa.
4. **"Mais de 10 anos"** — vem da bio do Instagram da IRL.
7. **"Preço fechado e data de entrega"**, no título da página, e
   **"Visita e orçamento sem custo e sem compromisso"**, embaixo dos
   botões. As duas frases repetem o que o site já afirmava em Confiança e
   em Como trabalhamos — mas agora estão na promessa principal, onde
   qualquer diferença com a prática vira reclamação. Confirmar.
5. **O nome da marca** — o logotipo do vídeo diz "IRL **Empreendimentos**
   Sustentáveis" (igual ao Instagram) e o texto do site diz "IRL **Construtora**
   Sustentável". Os dois convivem hoje: o símbolo aparece na nav e no rodapé com
   o texto "Construtora Sustentável", e a legenda embaixo do vídeo no hero diz
   "Empreendimentos Sustentáveis". Confirmar com a IRL qual nome é o oficial e
   padronizar.
6. **A grafia do vídeo** — no quadro final o vídeo escreve "SUSTEN TÁVEIS", com
   um espaço no meio da palavra. É defeito da animação original, não do site.
   Por isso o site usa apenas o **símbolo** do logotipo como imagem: a parte
   escrita é texto HTML.

## O que falta para o site ficar completo

- **Fotos de obra em andamento** — hoje o único material visual é uma casa
  pronta. Canteiro, fundação e estrutura são o que dá credibilidade a uma
  construtora.
- **Mais cases**, principalmente uma **reforma com antes e depois**. Metade dos
  serviços não tem nenhuma imagem.
- **Depoimentos de clientes.**
- **CNPJ e endereço do escritório**, para o rodapé.
