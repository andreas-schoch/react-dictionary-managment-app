# React Dictionary Management App

A simple app to manage and validate dictionaries

![Screenshot of Overview](/dictionary-app-1.JPG?raw=true 'Screenshot')
![Screenshot of Detail View](/dictionary-app-2.JPG?raw=true 'Screenshot')

### Details

-   Made with React & Redux
-   SCSS and CSS Modules
-   No CSS Framework used like Bootstrap, Semantic, Materialize, etc
-   State persisted using localStorage
-   somewhat responsive

#### Functional Requirements

-   Creating and deleting dictionaries
-   Showing available dictionaries in an overview
-   Editing dictionaries (adding, updating and removing rows)
-   Validating the entire dictionary regarding consistency (see below)
-   Validations should be shown as some kind of problem markers next to the offending part of the dictionary.
-   Problem markers have different severities, e.g. Duplicates are less severe than a Cycle (in which case you cannot go on
    processing such a dictionary).
-   Persisting dictionaries with validation errors for future editing

### A Dictionary is only Valid when...:

-   ...it has no identical key/Value Pairs.
-   ...it has unique keys.
-   ...there are no loops/cycles where keys and values point to each other
-   ...the value of a member is not a key in another place
