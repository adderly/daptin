
# Daptin

<p align="left">
    <a href="https://github.com/daptin/daptin/releases/latest"><img alt="Release" src="https://img.shields.io/github/release/daptin/daptin.svg?style=flat-square"></a>
    <a href="/LICENSE.md"><img alt="Software License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"></a>
    <a href="https://travis-ci.org/daptin/daptin"><img alt="Travis" src="https://img.shields.io/travis/daptin/daptin.svg?style=flat-square"></a>
    <a href="https://codecov.io/gh/daptin/daptin"><img alt="Codecov branch" src="https://img.shields.io/codecov/c/github/daptin/daptin/master.svg?style=flat-square"></a>
    <a href="https://goreportcard.com/report/github.com/daptin/daptin"><img alt="Go Report Card" src="https://goreportcard.com/badge/github.com/daptin/daptin?style=flat-square"></a>
    <a href="http://godoc.org/github.com/daptin/daptin"><img alt="Go Doc" src="https://img.shields.io/badge/godoc-reference-blue.svg?style=flat-square"></a>
    <a href='https://semaphoreci.com/artpar/daptin-2'> <img src='https://semaphoreci.com/api/v1/artpar/daptin-2/branches/master/badge.svg' alt='Build Status'></a>
</p>
  <p align="left">

  <img src="https://github.com/daptin/daptin/raw/master/daptinweb/static/img/logo_blk.png" alt="Daptin logo" title="Daptin" height="140" />
    </p>

## What is Daptin?
Daptin is a fully loaded backend server. Expose JSON APIs for your data.

## Installation

**Deploy**

 [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

**Docker**

```
docker run -d -p 8080:8080 daptin/daptin
```

## Usage

![Sign up and Sign in](https://raw.githubusercontent.com/daptin/daptin/master/docs_markdown/docs/gifs/signup_and_signin.gif)
![Create entity and add item](https://raw.githubusercontent.com/daptin/daptin/master/docs_markdown/docs/gifs/create_entity_and_add.gif)
![Generate random data to show tables](https://raw.githubusercontent.comdaptin/daptin/master/docs_markdown/docs/gifs/generate_random_show_tables.gif)

Daptin will provide

- [JSON](http://jsonapi.org) based CRUD+eXecute APIs for all your entities
- Integrated authentication and authorization with user management
- Access control for data
- Extensible system with useful integrations (eg sync data updates to 3rd party api)
- [Client libraries](http://jsonapi.org/implementations/) to consume JSON API seamlessly


- Sub site hosting (SSH) without the need to run separate server
- An events-actions-outcomes framework to extend system
- Data-as-objects (instead of just strings)

Compared to building JSON APIs directly, Daptin provides APIs that makes writing fast frontend apps simpler.



## Why Daptin?


Daptin was to help build faster, more capable APIs over your data that worked across for all types of frontend.

While Daptin primarily targeted Web apps, the emergence of Android and iOS Apps as a rapidly growing target for developers demanded a different approach for building the backend. With developers classic use of traditional frameworks and bundling techniques, we struggle to invest enough time in the business and frontend demands for all sorts of Apps that provide consistent and predictable APIs which perform equally well on fast and slow load, across a diversity of platforms and devices.

Additionally, framework fragmentation had created a APIs development interoperability nightmare, where backend built for one purpose needs a lot of boilerplate and integration with the rest of the system, in a consistent way.

A component system around JSON APIs offered a solution to both problems, allowing more time available to be invested into frontend and business building, and targeting a standards-based JSON/Entity models that all frontends can use.

However, JSON APIs for data manipulation by themselves weren't enough. Building apps required a lot of custom actions, workflows, data integrity, event subscription, integration with external services that were previously locked up inside of traditional web frameworks. Daptin was built to pull these features out of traditional frameworks and bring them to the fast emerging JSON API standard in an automated way.


## Getting started


- Deploy instance of Daptin on a server
- Upload JSON/YAML/TOML/HCL file which describe your entities (or use marketplace to get started)
- or upload XLS file to create entities and upload data
- Become Admin of the instance (until then its a open for access, that's why you were able to create an account)


## Use cases

Examples

Define your own entities | Define relations | Subscribe to events | Sync changes with other systems | Deploy back end server
--- | --- | --- | --- | ---
Todo | Belongs to project | Send SMS if deadline is today | Update a Google Sheet when todo updated | Build an android app
Todo | Has current status | Update manager when employee updates a todo | SMS when todo is marked complete | Build an Electron app
Cooking Recipe | Has many Ingredients | Get Slack notification when anyone adds new Recipe | Get recipe from Google sheets | Build a quick angular app 
Wedding | has many people called "attendees" | Send everyone SMS on updates to wedding party schedule | Calender changes with every attendees calender | Build a UI using React


## Tech Goals

- Zero config start (sqlite db for fresh install, mysql/postgres is recommanded for serious use)
- A closely knit set of functionality which work together
- Completely configurable at runtime, can be run without any dev help
- Stateless(Horizontally scalable)
- Try to piggyback on used/known standards
- Runnable on all types on devices
- Cross platform app using [qt](https://github.com/therecipe/qt) (very long term goal. A responsive website for now.)


## Competitor products

These are the competition:

- [Directus](https://getdirectus.com/) - Directus is an API-driven content management framework for custom databases. It decouples content for use in apps, websites, or any other data-driven projects.
- [Cockpit](https://getcockpit.com/) - An API-driven CMS
- [Contentful](https://www.contentful.com/) - Contentful is the essential content management infrastructure for projects of any size, with its flexible APIs and global CDN.
- [Scaphold](https://scaphold.io/) - GraphQL Backend As A Service


*Todo*: complete research and fill this table

|                                           | Daptin | Cockpit | Contentful | Scaphold | Airtable | graph.cool | fieldbook |
|-------------------------------------------|------|---------|------------|----------|----------|------------|-----------|
| JSON API                                  | Yes  | Yes     | Yes        | Yes      | Yes      | Yes        | Yes       |
| User defined entities                     | Yes  | Yes     | Yes        | Yes      | Yes      | Yes        | Yes       |
| Dashboard                                 | Yes  | Yes     | Yes        | Yes      | Yes      | Yes        | Yes       |
| In built analytics on your data           |      |         |            |          |          |            |           |
| Relations in entities                     |      |         |            |          |          |            |           |
| Users                                     |      |         |            |          |          |            |           |
| User groups                               |      |         |            |          |          |            |           |
| Authentication (In built User Management) |      |         |            |          |          |            |           |
| Authorization (Roles and Permission)      |      |         |            |          |          |            |           |
| Asset management                          |      |         |            |          |          |            |           |
| Revision History/Auditing                 |      |         |            |          |          |            |           |
| Field data types                          |      |         |            |          |          |            |           |
| Integrate external API                    |      |         |            |          |          |            |           |
| Workflows (If this than that)             |      |         |            |          |          |            |           |
| Cloud store for assets                    |      |         |            |          |          |            |           |
| Sub sites                                 |      |         |            |          |          |            |           |
| Marketplace for plugins                   |      |         |            |          |          |            |           |
| Transformed Streams/Views of your data    |      |         |            |          |          |            |           |
|                                           |      |         |            |          |          |            |           |


## Road Map


* [x] Normalised Db Design from JSON schema upload
* [x] Json Api, with CRUD and Relationships
* [x] OAuth Authentication, inbuilt jwt token generator (setups up secret itself)
* [x] Authorization based on a slightly modified linux FS permission model
* [x] Objects and action chains
* [x] State tracking using state machine
* [ ] Native tag support for user defined entities
* [x] Data connectors -> Incoming/Outgoing data
* [x] Plugin system -> Grow the system according to your needs
* [ ] Native support for different data types (geo location/time/colors/measurements)
* [ ] Configurable intelligent Validation for data in the APIs
* [x] Pages/Sub-sites -> Create a sub-site for a target audiance
* [ ] Define events all around the system
* [ ] Ability to define hooks on events from UI
* [x] Data conversion/exchange/transformations
* [x] Live editor for subsites - grapesjs
* [x] Store connectors for storing big files/subsites - rclone
* [x] Market place to allow plugins/extensions to be installed
* [x] Online entity designer
* [x] Excel to entity identification

### Documentation

- Checkout the [documentation for daptin](http://docs.dapt.in)


## Tech stack


Backend | FrontEnd | Standards | Frameworks
---|---|---|---
[Golang](golang.org) | [BootStrap](http://getbootstrap.com/) | [RAML](raml.org) | [CoPilot Theme](https://copilot.mistergf.io)
[Api2go](https://github.com/manyminds/api2go) | [BootStrap](http://getbootstrap.com/) | [JsonAPI](jsonapi.org) | [VueJS](https://vuejs.org/v2/guide/)
[rclone](https://github.com/ncw/rclone) |  [grapesJs](grapesjs.com) | | [Element UI](element.eleme.io)
