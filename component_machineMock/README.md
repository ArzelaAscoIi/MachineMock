# Creating complete test environment
 
  ## 1. Installing packages [component_js](https://github.com/Senseering/component_js/ "Named link title") and [component_test_js](https://github.com/Senseering/component_test_js/ "Named link title")
     
     1.Install component_js: 
        
        1.in component_js : npm install
        2.in component_js : sudo npm link (without sudo on windows)
     
     2.Install component_test_js:
        
        1.in component_test_js : npm install
        2.in component_test_js : npm link component_js

   ## 2. Start Edge-Node [edge_node_js](https://github.com/Senseering/component_js/ "Named link title")

       1. cleanup (needed): 

           1.Kill all containers : docker container stop $(docker container ls -aq)
           2.delete all cache containers : docker system prune

       2. Build and Start:

          1.Build: `docker-compose build --no-cache`
          2.Start:  `docker-compose up`

  
  
  ## 3. API-KEY anf UUID for your test component [API and UUID link](http://127.0.0.1:3000/component/apikey/ "Named link title")
        
        1. copy this into your browser: `127.0.0.1:3000/component/apikey`
           example site: {"uuid":"38e399af-2e38-5e22-a1f8-7b0db5345c2e","APIKey":"f92689a3f1b555d0be77b15633f5b386"}
        2. in component_test_js/index.js update the "id" and the "apikey" with the values from the site
        

  ## 4. Send Test data:
  
         in the updated component_test_js run:
         
         DEBUG=*,-follow-redirects node index.js
         

 ## 5. Visualisation
     
   We have a MYSQL and a MONGODB where the MYSQL stores main data for searching
   (machine,timestamp..) MongoDB the whole Datatable created by the machine
     
   add your username and password in edge_node_js\conf\docker-entrypoint-initdb.d\1- usercreation.sql
     
   #### MYSQL-Database:
     
   Download [MYSQL Workbench](https://www.mysql.com/de/products/workbench/ "Named link title")    
     
   after the start only the Schema has to be added: "edgedb" port and IP are standard
    enter your username and password

   Query to get the data:
```sql
select * from edgedb.component;
select * from edgedb.component_input_output;
select * from edgedb.data;
select * from edgedb.component_salt;
```
     
     
   #### MongoDB:
Download [MongoDB-Compass](https://www.mongodb.com/download-center/compass?jmp=docs "Named link title")
     everything here should be automated
     
   ### Windows error:
    ERROR: for mongo Cannot start service application: driver failed programming external connectivity on endpoint edgenode_js (bd7f89ef4c1b0c6cbb4eb82ba552e5ccbf87f168ad81b8f8656bdc6443c2ef79): Error starting userland proxy: mkdir /port/tcp:0.0.0. 0:8888:tcp:172.18.0.4:8000: input/output error

    after docker-compose up, your Docker for windows is the problem. Nobody really knows why this is happening but restarting docker for windows does fix this issue.


