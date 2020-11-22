![nest_js_logo](https://nestjs.com/img/logo_text.svg)

# Description
REST API performing CRUD operations using nestjs framework 
|#|Components| use cases|
|--|--|--|
|1|[controllers](controllers)|handling incoming **requests** and returning **responses** to the client.|
|2|[providers](https://docs.nestjs.com/providers)|you can call it services for now and the framework will **provide** them to the controller.|
|3|[modules](modules)|this Component is something like a glow between other Component it will connect the controller with other dependencies [providers] |

> quick tip : you can find postman JSON file inside root file of this project /postman_api

**starting tips**

 - In this example we won't use any database that's in future examples
   for now we will use simple list inside **TodoService** to maintain
   todos .
   
 - We will perform 5 operations 
   [
    Create Todo ,
    Read One Todo && Read All Todos,
    Update Todo,
    Delete Todo
    ];
    
### Responsibilities
TodoService => maintaining todos and manipulating the todos list [add or get or remove] todos to and from it .
CreateTodoDto / UpdateTodoDtop => To simplifythe code and write less boilerplate code while extracting the body params.
TodoController => to handle incoming requests and decide which function to trigger and basing the request to it.
TodoModule => To wire every thing togther so nest can work under the hood;

### Explaining the process
when the user fire up a request nest will receive it and base on the request route nest will pass it to the right controller 
but in case of no matching controller nest will return response with 404 status code 

in case of matching controller nest will trigger the matching function and passing the request to it 
for example a request sent to /todos with GET method;
in our case  nest will trigger the function that was annotated with **GET** decorator inside the todos  **controller** also it wall base the matching dependencies to controller with no interference form you ;

now the **GET** function will perform some logic and simply pass the response tow the user as a return from the triggered function without warping it in any Response object or any thing nest will handle that for you;

> quick tip : every successful request will have 200 status code except post  it will return 201 status code but don't worry you can change the later using just one line or one Decorator to be accurate .

that will be every thing , in the next example we will use other nest components to build better rest APIs

