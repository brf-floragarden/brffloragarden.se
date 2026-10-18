# brffloragarden.se – föreningens hemsida

Det här är hela hemsidan för Brf Floragården. Den är skriven för att **vem som helst
i styrelsen ska kunna uppdatera den**, utan att kunna programmera.

## Vanliga uppdateringar – så gör du

Logga in på redigeringsverktyget **Pages CMS**: <https://app.pagescms.org>
(logga in med GitHub → *Continue with Google* → `styrelsen@brffloragarden.se`,
se *Konton* nedan). Där finns allt i menyn
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

## Konton – allt går via föreningens Google-konto

> **Har du tillgång till Google-kontot `styrelsen@brffloragarden.se` har du
> tillgång till allt.**

Alla tjänster nedan är registrerade på `styrelsen@brffloragarden.se`, och man
loggar in med **"Logga in med Google" / "Continue with Google"** där det finns.
Det finns alltså bara ett lösenord att hålla reda på – Google-kontots – och
återställningsmejl för alla tjänster hamnar i samma inkorg.

| Del | Tjänst | Logga in | Vad den gör |
|---|---|---|---|
| E-post och inloggning | Google | `styrelsen@brffloragarden.se` | Nyckeln till allt nedan. |
| Koden och innehållet | GitHub, kontot **brf-floragarden** | Continue with Google | Alla filer och all historik (repot `brf-floragarden/brffloragarden.se`). |
| Redigering | Pages CMS | Logga in med GitHub (ovan) | Formulär för att ändra innehållet. |
| Publicering | GitHub Pages | Ingår i GitHub-kontot | Bygger och visar sidan på brffloragarden.se, gratis, automatiskt vid varje sparad ändring. |
| Domänen | *(registrar – bestäms)* | `styrelsen@brffloragarden.se` | brffloragarden.se, förnyas en gång per år. |

**Lämnar du styrelsen?** Det enda som behöver lämnas över är lösenordet till
Google-kontot (och tvåstegsverifieringen – se till att den går till ett nummer
eller en enhet som styrelsen har kvar, inte din privata telefon).

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

Publicering: `.github/workflows/publicera.yml` bygger med `npm run build` och
lägger upp `_site/` på GitHub Pages vid varje push till `main`. Egen domän anges
under Settings → Pages → Custom domain.
