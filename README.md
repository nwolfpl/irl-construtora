# IRL Construtora Sustentável — site institucional

Site estático (HTML, CSS e JS puros, sem build e sem backend) para a IRL
Construtora Sustentável, de Montes Claros/MG. Foco em **construção do zero,
reforma e ampliação, e instalação de sistemas sustentáveis em casa pronta**.

```
site/
├── index.html                 página inteira
├── assets/css/style.css       sistema visual
├── assets/js/main.js          nav fixa, revelação em scroll, barra do celular
└── assets/img/                fotos do case (casa do Reserva Real)
```

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

1. **"3 sistemas instalados de série em toda obra nova"** (hero) e "Os três
   sistemas já inclusos" (card de construção) — deduzido do posicionamento da
   marca e da casa do Reserva Real. Confirmar se é mesmo padrão em toda obra.
2. **As cinco etapas do processo** (`#processo`) — são um fluxo plausível de
   construtora, não o processo real da IRL.
3. **As janelas de cada sistema na linha do tempo** — corretas em termos
   construtivos gerais, mas vale conferir com quem executa.
4. **"Mais de 10 anos"** — vem da bio do Instagram da IRL.
5. **Logotipo** — o site usa um selo tipográfico com as letras IRL. O logotipo
   real (círculo verde com a folha) não foi fornecido; substituir em
   `.marca__selo` quando houver o arquivo.

## O que falta para o site ficar completo

- **Fotos de obra em andamento** — hoje o único material visual é uma casa
  pronta. Canteiro, fundação e estrutura são o que dá credibilidade a uma
  construtora.
- **Mais cases**, principalmente uma **reforma com antes e depois**. Metade dos
  serviços não tem nenhuma imagem.
- **Depoimentos de clientes.**
- **CNPJ e endereço do escritório**, para o rodapé.
