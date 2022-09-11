Vue.js Technical Session
========================

State Management: Vuex -> Pinia

# Prerequisites <small>(optional)</small>

Node 16.10.0


- Install the Chrome [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- Install the Visual Studio Code [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension
- Install the Visual Studio Code [Vue Inline Template](https://marketplace.visualstudio.com/items?itemName=faisalhakim47.vue-inline-template) extension


# 01-HelloWorld

Used the example from [Vue Mastery](https://www.vuemastery.com).

## Start
```
npx http-server
```


# cli-socks

Converted `01-HelloWorld` to a with Vue CLI **Vite** generated "full blown" application
(Routing Vuex, SCSS, TypeScript, ...)

## Installation
```
cd cli-socks
npm install
```

ATTN: Some Webstorm attendees needed to do an additional `npm install node-sass`.
As always with npm, read the error messages :)


## Start

The idea is for the attendees to "claim" a ticket (by replying to it) and
create a PR once ready. 

```
npm run serve
```


# Not Covered

## 02-Snippets

Some code examples on slots, mixins, directives, filters, ...


## Vue CLI -> Vite

Scaffold projects in Vue, React, ...

```
npm create vite@latest
```

VitePress: static website generator


## Testing

```
npm run test:unit
```
