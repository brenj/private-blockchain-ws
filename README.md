Private Blockchain Web Service API
==================================

About
-----

From Udacity:
> Create a backend API web service that is consumable for client applications. This project will emphasize the conversion of your private blockchain to a valuable web service.

Supporting courses:
* Blockchain Web Services

The web framework I chose to use for this project was `express`. I chose `express` because of its minimalist and unopinionated approach which allowed me to quickly build out a couple of HTTP endpoints.

Endpoints
---------

#### Get Block - Returns a block in the blockchain for a specified height.
* __URL__: `/block/:height`
* __Method__: `GET`
* __Required Parameters__
  * `height=[integer]`
* __Success Response__
  * _Code_: `200`
  * _Content_
  ```javascript
  {
      "body": "GENESIS",
      "height": 0,
      "previousBlockHash": "",
      "time": "1537625658",
      "hash": "c1ad7b65eeed9c996a34a88ab3bde769019ac94098622d058c26c7dbfb9d8ac7"
  }
  ```
* __Error Response__
  * _Code_: `500`
  * _Content_: `{ error: true, message: "Something bad happened ಥ_ಥ" }`
  
#### Add Block - Adds a new block in the blockchain containing specified data.
* __URL__: `/block`
* __Method__: `POST`
* __Required Parameters__
  * `body=[string]`
* __Success Response__
  * _Code_: `201`
  * _Content_:
  ```javascript
  {
    "body": "My New Block",
    "height": 11,
    "previousBlockHash": "0f956fb33fdd5af58d962d468a70790a52bbb3aeddd8d6e1cc489dcab154b4bf",
    "time": "1537649115",
    "hash": "226cc441c6876e6ff4ebb363d13b96ee1a0cf2498a9c6737fad63024458b231e"
  }
  ```
* __Error Response__
  * _Code_: `500`
  * _Content_: `{ error: true, message: "Something bad happened ಥ_ಥ" }`

Requirements
------------
* Node
* Node Package Manager (npm)

Install
-------
1. `npm install`

Code Quality
------------
This codebase adheres to the [Airbnb JavaScript/React/JSX Style Guide](https://github.com/airbnb/javascript)

Code Organization
-----------------
```console
├── README.md
├── package.json
└── src
    └── app.js

1 directory, 3 files
```

Grading (by Udacity)
--------------------

Criteria             |Highest Grade Possible  |Grade Recieved
---------------------|------------------------|--------------
Setup                |Meets Specifications    |
functionality        |Meets Specifications    |
Code Readability     |Meets Specifications    |
