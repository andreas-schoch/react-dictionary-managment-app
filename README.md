# React Dictionary Management App

A simple app to manage and validate dictionaries

![Screenshot of Overview](/dictionary-app-1.jpg?raw=true 'Screenshot')  
  
![Screenshot of Detail View](/dictionary-app-2.jpg?raw=true 'Screenshot')

## Details

-   Made with React & Redux
-   SCSS and CSS Modules
-   No CSS Framework used like Bootstrap, Semantic, Materialize, etc
-   State persisted using localStorage
-   somewhat responsive

## Functional Requirements

-   Creating and deleting dictionaries
-   Showing available dictionaries in an overview
-   Editing dictionaries (adding, updating and removing rows)
-   Validating the entire dictionary regarding consistency (see below)
-   Validations should be shown as some kind of problem markers next to the offending part of the dictionary.
-   Problem markers have different severities, e.g. Duplicates are less severe than a Cycle (in which case you cannot go on
    processing such a dictionary).
-   Persisting dictionaries with validation errors for future editing

### A Dictionary is valid if none of the following problems occur:

-   **Duplicates**: Duplicate Domain - Range pairs: Two rows in the dictionary map to the same value, simply resulting in duplicate content.
-   **Forks**: Duplicate Domains with different Ranges: Two rows in the dictionary map to different values, resulting in an ambiguous
    transformation.
-   **Cycles**: Two or more rows in a dictionary result in cycles, resulting in a never-ending transformation.
-   **Chains**: A chain structure in the dictionary (a value in Range column also appears in Domain column of another entry), resulting in
    inconsistent transformation.
