# RodaRoad Form

Diari de ruta digital per a conductors de camio.

## Funcionalitats

- Seccio Conductor: nom, numero, conduccio doble
- Seccio Vehicle: numero, tractora, remolc, repostatge (Gasoil A/B, AdBlue, Gas)
- Seccio Viatge: client, ciutats, dates, hores, carregues, descarregues
- Quilometres: inicials, finals, totals (auto-calculat), temps de conduccio
- Dieta / Pais (27 paissos de la UE)
- Observacions i incidencies
- Adjunts: fotos i fitxers (tiquets, albarans, documentacio)
- Icones Lucide
- Layout responsive (desktop 2 columnes, mobil 1 columna)
- Tema fosc

## Estructura del projecte

```
rodaroadform-v1/
  index.html          # Entrada principal
  css/
    style.css         # Entry point (imports)
    variables.css     # Variables CSS (colors, fonts)
    base.css          # Reset, body, headings
    form.css          # Labels, inputs, buttons, icons
    layout.css        # Grid, sections, responsive
  js/
    main.js           # Entry point JS
  img/
  docs/
```

## Tecnologies

- HTML5 / CSS3 / JavaScript (ES Modules)
- CSS Custom Properties (variables)
- Lucide Icons (CDN)
- Sense frameworks ni build tools

## Desenvolupament

1. Obrir `index.html` amb Live Server al VS Code
2. O executar `npx serve` a la carpeta del projecte

## Git

- Commit format: `type: short description`
- Types: feat, fix, docs, style, refactor, test
