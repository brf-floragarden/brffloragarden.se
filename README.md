# brffloragarden.se – föreningens hemsida

Det här är hela hemsidan för Brf Floragården. Den är skriven för att **vem som helst
i styrelsen ska kunna uppdatera den**, utan att kunna programmera.

## Vanliga uppdateringar – så gör du

Logga in på redigeringsverktyget **Pages CMS**: <https://app.pagescms.org>
(logga in med föreningens GitHub-konto, se *Konton* nedan). Där finns allt i menyn
till vänster. När du klickar **Spara** publiceras ändringen automatiskt på
hemsidan inom ett par minuter.

| Jag vill… | Gör så här |
|---|---|
| **Lägga upp en ny årsredovisning** | *Media → Årsredovisningar → Ladda upp.* Döp filen till `arsredovisning-ÅÅÅÅ.pdf` (t.ex. `arsredovisning-2026.pdf`). Den hamnar automatiskt överst i listan. Hämta den signerade PDF:en från SBC (hemma.sbc.se → Ekonomi → Bokslut och årsredovisningar). |
| **Uppdatera styrelsen** efter stämman | *Styrelse* – ändra namn och roller. |
| **Byta stadgar** | Ladda upp nya PDF:en under *Media → Övriga filer*, välj den sedan under *Dokument → Stadgar*. |
| **Ändra taxeringsvärde, lån m.m.** | *Fakta om fastigheten.* Siffrorna finns i senaste årsredovisningen. |
| **Ändra en leverantör** | *Leverantörer.* |
| **Ändra text** (tvättstuga, sophantering, historia) | *Sida – Allmän information* eller *Sida – Historia.* |
| **Ändra adress eller e-post** | *Föreningen.* |

Årtalet i sidfoten uppdateras av sig självt.

### Att göra varje år efter stämman
- [ ] Ny årsredovisning uppladdad
- [ ] Styrelsen uppdaterad
- [ ] Taxeringsvärde och lån uppdaterade under *Fakta om fastigheten*
- [ ] Nya stadgar? Ladda upp.

## Konton

Hemsidan består av tre delar. Inloggningsuppgifterna ska ligga i styrelsens
gemensamma lösenordsförvaring – **inte** i en vanlig fil i Dropbox.

| Del | Tjänst | Vad den gör |
|---|---|---|
| Koden och innehållet | GitHub (föreningens konto) | Här sparas alla filer och all historik. |
| Publicering | Cloudflare Pages (föreningens konto) | Bygger och visar sidan på brffloragarden.se, gratis. |
| Domänen | *(registrar – bestäms)* | brffloragarden.se, förnyas en gång per år. |

**Lämnar du styrelsen?** Se till att någon kvarvarande ledamot har inloggning till
alla tre, och att e-postadressen på kontona är föreningens, inte din privata.

---

## För utvecklare

Statisk sajt byggd med [Eleventy](https://www.11ty.dev/). Inga externa typsnitt
eller spårare.

```sh
npm install
npm start        # förhandsvisning på http://localhost:8080
npm run build    # bygger till _site/
```

- `src/_data/*.yml` – allt redigerbart innehåll (det Pages CMS ändrar)
- `src/_data/arkiv.js` – listar årsredovisningar och ritningar automatiskt ur `src/filer/`
- `src/*.njk`, `src/*.md` – sidorna; `src/_includes/` – mallar
- `.pages.yml` – vilka fält Pages CMS visar

Cloudflare Pages: byggkommando `npm run build`, utdatamapp `_site`.
