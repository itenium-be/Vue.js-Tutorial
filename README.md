Vue.js Technical Session
========================

# Prerequisites <small>(optional)</small>


- Install the Chrome [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- Install the Visual Studio Code [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extension
- Install the Visual Studio Code [Vue Inline Template](https://marketplace.visualstudio.com/items?itemName=faisalhakim47.vue-inline-template) extension


# 01-HelloWorld

Used the example from [Vue Mastery](https://www.vuemastery.com).

## Start
```
npx http-server
```


# cli-socks

Converted `01-HelloWorld` to a with Vue CLI generated "full blown" application
(Routing Vuex, SCSS, TypeScript, ...)

## Installation
```
cd cli-socks
npm install
```

ATTN: Some Webstorm attendees needed to do an additioan `npm install node-sass`.
As always with npm, read the error messages :)


## Start

The idea is for the attendees to "claim" a ticket (by replying to it) and
create a PR once ready. 

```
npm run serve
```

## Common Issues

Create models so that the typescript issues go away...
(now need to do `const x = state.products as any`)


# Not Covered

## 02-Snippets

Some code examples on slots, mixins, directives, filters, ...


## Vue CLI

```
npm install -g @vue/cli

vue --version
vue create cli-socks
```

## Testing

```
npm run test:unit
```
