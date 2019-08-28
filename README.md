# vEarn
vearn is a backend application developed using mongoose, node and express framework. Using this application the user can login, signup, add or watch movies. To see how this application works please install postman and call the endpoints to see the results. It has four endpoints.

This app only shows the working model because this is a sandbox application. More functionalities will be added in the future.

#installation
1. download the zip file or clone download and extract
2. run the command npm i in the command prompt
3. if everything goes well you can start the application by running npm start/ node index.js command.
4. For best view this application use Postman for sending the requests to https://vearn.herokuapp.com/

 
      1. https://vearn.herokuapp.com/api/login 
        Takes two values email and password,should be mentioned in the body of the request JSON 
      2. https://vearn.herokuapp.com/api/register 
      Takes name, email, password, c_password and phone in the body of the request 
      3. https://vearn.herokuapp.com/api/addmovie 
      For adding movies title, gnere, rate should be provided in the body of the request 
      4. https://vearn.herokuapp.com/api/getmovie?gnere=all 
      getmovie takes query string for getting movies ex:gnere=all, gnere=action, gnere=comedy,
      gnere=thriller.
    
For registering user open postman navigate URL to https://vearn.herokuapp.com/api/register. In the body of the request select raw->JSON(application/json)

      {
          "name":"yourname",
          "email":"youremail@xyz.com",
          "password":"password",
          "c_password":"password",
          "phone":"123456"

      }
      
