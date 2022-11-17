# Gestión de bolsas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



# ESTRUCTURA GENERAL DE LA PLANTILLA:
-ASSETS
  -IMGS [ONLY IMAGES]
    -ICONS
    -BACKGROUNDS
    -LOGOS
    -OTHERS [OTHER IMAGE CATEGORIES]
  -MEDIA [DIFFERENT OF IMAGE]
    -VIDEOS
    -SOUND
    .
    .
    .N
  -FONTS
  -FILES [EXTRA FILES]
-ENVIRONMENTS
  -ENVIRONMENT.PROD.TS
  -ENVIRONMET.DEV.TS
  -ENVIRONMET.TEST.TS
  -ENVIRONMENT.TS
-APP:
  -COMMONS [FOLDER]
    -DATA
      -MAPPER.TS [ABSTRACT CLASS]
    -APPLICATION
      -USECASE.TS [INTERFACE]
  -GLOBAL: [MODULE] -> [GLOBAL LAYOUT DEPEND OF PROJECT]
    -DOMAIN
      -MODELS
        -SIDENAV-ITEM-MENU.MODEL.TS
    -APPLICATION
      -USE-CASE
        -CHANGE-TO-DARK-MODE-USECASE.TS
        .
        .
        .N
    -PRESENTATION
      -ROUTING
        -GLOBAL-ROUTING.TS
      -GUARDS [FOLDER]
      -PIPES [FOLDER]
      -DIRECTIVES [FOLDER]
      -COMPONENTS
        -SIDENAV-COMPONENT [FOLDER COMPONENT]
        -HEADER-COMPONENT [FOLDER COMPONENT]
        -CONTAINER-COMPONENT [FOLDER COMPONENT]
        -FOOTER-COMPONENT [FOLDER COMPONENT]
  -USER: [MODULE] -> [EXAMPLE OF MODULE]
    -DOMAIN [FOLDER]
      -MODELS [FOLDER]
        -USER.MODEL.TS [INTERFACE OR CLASS][SUGGEST CLASS - AVOID ANEMIC DOMAIN MODEL]
      -REPOSITORIES [FOLDER]
        -USER.REPOSITORY.TS [INTERFACE]
    -APPLICATION [FOLDER]
      -USE_CASE [FOLDER]
        -LOGIN-USECASE.TS [IMPLEMENTS USECASE]
        -REGISTER-USECASE.TS [IMPLEMENTS USECASE]
    -INFRASTRUCTURE
        -USER-IMPLEMENTATIONS.REPOSITORIES.TS [SERVICE]
    -DATA [FOLDER]
      -ENTITIES [FOLDER]
        -USER.ENTITY.TS [INTERFACE OR CLASS]
      -MAPPERS [FOLDER]
        -USER-REPOSITORY.MAPPER.TS [CLASS, IMPLEMENTS MAPPER INTERFACE]
        .
        .
        .
        .N
    -PRESENTATION [FOLDER]
      -ROUTING
        -USER-ROUTING.TS
      -GUARDS [FOLDER]
      -PIPES [FOLDER]
      -DIRECTIVES [FOLDER]
      -COMPONENTS [FOLDER]
        -USER-DETAIL-COMPONENT [FOLDER COMPONENT]
        -USER-LIST-COMPONENT [FOLDER COMPONENT]
        .
        .
        .N
      -SERVICES
        -N
      -INTERCEPTORS
        -AUTH.INTERCEPTOR.TS [SERVICE]
    -USER.MODULE.TS [MODULE FILE]
      * DECLARAR COMPONENTES
      * IMPORTAR COMMOMMODULE
      * IMPORTAR RUTAS HIJAS
      * EXPORTAR LOS COMPONENTES QUE REQUIERAN EXPORTARSE
## se usa tailwind: https://tailwindcss.com/
## para el futuro:
### Design System -> se pueden extraer del style.scss
### Translate (i18N+ standard)
