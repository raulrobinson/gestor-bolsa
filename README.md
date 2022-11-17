# GESTOR BOLSA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

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



## Estructura General de la Plantilla:
```
- assets
  - img [ONLY IMAGES]
    - icons
    - background
    - logos
    - others [OTHER IMAGE CATEGORIES]
  - media [DIFFERENT OF IMAGE]
    - videos
    - sound
    ...
    ...
    ...
  -fonts
  -files [EXTRA FILES]
-environment
  -environment.prod.ts
  -environment.dev.ts
  -environment.test.ts
  -environment.ts
-app:
  -commons [FOLDER]
    -data
      -mapper.ts [ABSTRACT CLASS]
    -application
      -usecase.ts [INTERFACE]
  -global: [MODULE] -> [GLOBAL LAYOUT DEPEND OF PROJECT]
    -domain
      -models
        -sidenav-item-menu.model.ts
    -application
      -use-case
        -change-to-dark-mode-usecase.ts
        ...
        ...
        ...
    -presentation
      -routing
        -global-routing.ts
      -guards [FOLDER]
      -pipes [FOLDER]
      -directives [FOLDER]
      -components
        -sidenav-component [FOLDER COMPONENT]
        -header-component [FOLDER COMPONENT]
        -container-component [FOLDER COMPONENT]
        -footer-component [FOLDER COMPONENT]
  -user: [MODULE] -> [EXAMPLE OF MODULE]
    -domain [FOLDER]
      -models [FOLDER]
        -user.model.ts [INTERFACE OR CLASS][SUGGEST CLASS - AVOID ANEMIC DOMAIN MODEL]
      -repositories [FOLDER]
        -user.repository.ts [INTERFACE]
    -application [FOLDER]
      -use_case [FOLDER]
        -login-usecase.ts [IMPLEMENTS USECASE]
        -register-usecase.ts [IMPLEMENTS USECASE]
    -infrastructure
        -user-implementations.repositories.ts [SERVICE]
    -data [FOLDER]
      -entities [FOLDER]
        -user.entity.ts [INTERFACE OR CLASS]
      -mappers [FOLDER]
        -user-repository.mapper.ts [CLASS, IMPLEMENTS MAPPER INTERFACE]
        ...
        ...
        ...
        ...
    -presentation [FOLDER]
      -routing
        -user-routing.ts
      -guards [FOLDER]
      -pipes [FOLDER]
      -directives [FOLDER]
      -components [FOLDER]
        -user-detail-component [FOLDER COMPONENT]
        -user-list-component [FOLDER COMPONENT]
        ...
        ...
        ...
      -services
        -...
      -interceptors
        -auth.interceptor.ts [SERVICE]
    -user.module.ts [MODULE FILE]

      * DECLARAR COMPONENTES
      * IMPORTAR COMMOMMODULE
      * IMPORTAR RUTAS HIJAS
      * EXPORTAR LOS COMPONENTES QUE REQUIERAN EXPORTARSE
```

se usa tailwind: https://tailwindcss.com/
para el futuro: Design System -> se pueden extraer del style.scss
