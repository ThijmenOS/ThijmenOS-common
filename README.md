# ThijmenOS - Common

ThijmenOS Common is een package onderdeel van het ThijmenOS project.
Dit project is het bouwen van een volledig functionerend operating system in de
browser. Dit project bevat naast een front- en back-end ook verschillende packages welke
ieder een functionaliteit leveren aan de OS.

Deze packages hebben voor sommige functionaliteit allemaal de zelfde typen nodig.
Zo moet er voor het renderen van een applicatie een typen in de front- en backend gebruikt
worden.

Het ThijmenOS Common package is welke deze typen, methoden en configuratie opties levert
aan de rest van het systeem.

## CI/CD

### development

Om de zeker te weten dat nieuwe code correct integreerd en goed werkt worden er voor iedere
feature pull requests gemaakt. Op het moment dat deze pull request gemaakt word word er een
pipeline getriggerd welke valideerd of de code correct werkt.

![Develop pipeline](https://github.com/ThijmenOS/.github/blob/production/develop-pipeline.png?raw=true)

### deployment

Vervolgens wanneer een feature klaar is om gebruikt te worden in andere packages en correct
werkt word er een release gemaakt van de package. Deze release triggert vervolgens
een deployment pipeline welke nogmaals de code checkt of alles werkt en goed is waarna
het gepubliceerd word in de NPM registry om gebruikt te worden in de andere packages

![Deploy pipeline](https://github.com/ThijmenOS/.github/blob/production/deploy-pipeline.png?raw=true)

## More documentation

- [ThijmenOS documentatie](https://github.com/ThijmenOS/ThijmenOS-docs)
- [ThijmenOS Client](https://github.com/ThijmenOS/ThijmenOS-client)
- [ThijmenOS Server](https://github.com/orgs/ThijmenOS/repositories)

## Bevat

- Methods
  - GenerateUUID()
- Types
  - ApplicationTypes
  - FileSystemTypes
  - GraphicTypes
  - OsTypes
  - WindowTypes
