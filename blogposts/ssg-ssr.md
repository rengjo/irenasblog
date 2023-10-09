---
title: 'Wann sollte die statische Generierung im Vergleich zum serverseitigen Rendering verwendet werden?'
date: '2023-10-09'
---

Es wird empfohlen, wann immer möglich **Statische Generierung** (mit und ohne Daten) zu verwenden, da Ihre Seite einmal erstellt und vom CDN bereitgestellt werden kann, was sie viel schneller macht, als wenn ein Server die Seite bei jeder Anfrage rendern müsste.


Sie können die statische Generierung für viele Arten von Seiten verwenden, darunter:

- Marketingseiten
- Blogeinträge
- E-Commerce-Produktlisten
- Hilfe und Dokumentation

Sie sollten sich fragen: „Kann ich diese Seite **vor** einer Benutzeranfrage vorab rendern?“ Wenn die Antwort „Ja“ lautet, sollten Sie „Statische Generierung“ wählen.

Andererseits ist die statische Generierung **keine** gute Idee, wenn Sie eine Seite nicht vor der Anfrage eines Benutzers vorab rendern können. Möglicherweise werden auf Ihrer Seite häufig aktualisierte Daten angezeigt und der Seiteninhalt ändert sich bei jeder Anfrage.

In diesem Fall können Sie **Serverseitiges Rendering** verwenden. Es wird langsamer sein, aber die vorgerenderte Seite wird immer aktuell sein. Oder Sie können das Vorrendern überspringen und clientseitiges JavaScript verwenden, um Daten aufzufüllen.