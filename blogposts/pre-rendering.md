---
title: 'Zwei Formen des Pre-rendering(Vorrendern)'
date: '2023-10-09'
---

Next.js verfügt über zwei Formen des Vor-Renderings: **Statische Generierung** und **Serverseitiges Rendering**. Der Unterschied besteht darin, **wann** der HTML-Code für eine Seite generiert wird.

- **Statische Generierung** ist die Pre-Rendering-Methode, die den HTML-Code zur **Erstellungszeit** generiert. Der vorgerenderte HTML-Code wird dann bei jeder Anfrage _wiederverwendet_.
- **Serverseitiges Rendering** ist die Pre-Rendering-Methode, die den HTML-Code bei **jeder Anfrage** generiert.

Wichtig ist, dass Sie mit Next.js **auswählen**, welches Pre-Rendering-Formular Sie für jede Seite verwenden möchten. Sie können eine „hybride“ Next.js-App erstellen, indem Sie für die meisten Seiten die statische Generierung und für andere das serverseitige Rendering verwenden.