```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new-note-spa
    activate server
    server-->>browser: JSON document
    deactivate server
```
