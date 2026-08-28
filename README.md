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
  aparece ao compartilhar no WhatsApp
- `"url"` dentro do JSON-LD

## Onde mexer

| O que | Onde |
|---|---|
| WhatsApp de obra | `wa.me/5538998463300` em `index.html` |
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
