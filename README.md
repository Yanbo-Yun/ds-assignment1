## Serverless REST Assignment - Distributed Systems.

__Name:__ ....Yanbo Yun.....

__Demo:__ ... https://youtu.be/z7zHr0y0sS8?si=ktyTBQgtNOr4v1ZX ......

### Context.

State the context you chose for your web API and detail the attributes of the DynamoDB table items, e.g.

Context: Animal Cast

Table item attributes:
+ AnimalID - number  (Partition key)
+ RoleName - string
+ RoleDescription - string
+ likeIt - true/false
+ rating - points

### App API endpoints.

[ Provide a bullet-point list of the app's endpoints (excluding the Auth API) you have successfully implemented. ]
e.g.
 
+ POST /animals - add a new 'animal'.
+ GET /animals - Get all the 'animals' with a specified partition key.
+ GET /animals/animal001 - Get one animal.
+ GET /animals/animal001/Dog/translation?language - translate the language
+ PUT /animals - edit the animal's information


### Features.

#### Translation persistence (if completed)

[ Explain briefly your solution to the translation persistence requirement - no code excerpts required. Show the structure of a table item that includes review translations, e.g.

+ AnimalID - number  (Partition key)
+ RoleName - string
+ RoleDescription - string
+ likeIt - true/false
+ rating - points
+ Translations - ?
]


#### API Keys. (if completed)

[I don't have an API key, but I have API identification and an authorization layer. ]


###  Extra (If relevant).

[ State any other aspects of your solution that use CDK/serverless features not covered in the lectures ]