# Exercice typescript Axios 


1. Installer axios (librairie http)

    npm i -S axios

*Pour info l'option -S permet d'installer la dependences dans l'objet dependencies sur package.json Si on utilise l'option -D ça se retrouve dans devDependencies.*

2. Récupérer des utilisateurs via cette endpont :

https://reqres.in/api/users?page=1

3. Récupérer un utilisateur portant le prénom "Janet" et typer la réponse reçu.


    import axios, {AxiosResponse} from 'axios';

    //avec un await sinon utiliser .then(callback)
    const response: AxiosResponse<any[]> = await  axios.get({url})//renvoi une promesse
    
    

4. En utilisant l'id de l'utilisateur, récupérer sa couleur via cette endpoint :

https://reqres.in/api/unknown/{id}


5. Typer la réponse reçu 


6. Créer une fonction qui prends en parametre un utilisateur et une couleur et retourne un objet Person avec comme propriété :

- une couleur en hexa correctement typé (ex: "#BF1932")
- un nom comportant la concaténation du prénom et du nom
- un email

7. Tester cette derniere fonction graçe à Jest



NB :

package.json

    {
      "name": "formation-typescript",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "type": "module",
      "scripts": {
        "build": "tsc",
        "lint": "eslint ./src",
        "start": "ts-node src/app.ts",
        "start:dev": "nodemon -e ts -w ./src -x npm start",
        "test": "jest"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@types/jest": "^29.0.3",
        "@types/node": "^18.7.18",
        "@typescript-eslint/eslint-plugin": "^5.38.0",
        "@typescript-eslint/parser": "^5.38.0",
        "eslint": "^8.23.1",
        "jest": "^29.0.3",
        "nodemon": "^2.0.20",
        "ts-jest": "^29.0.1",
        "ts-node": "^10.9.1",
        "typescript": "^4.8.3"
      },
      "dependencies": {
        "axios": "^1.3.1"
      }
    }
  
tsconfig.json

    { "compilerOptions": 
      { 
        "outDir": "./dist", 
        "module": "esnext", 
        "moduleResolution": "node", 
        "esModuleInterop": true, 
        "target": "ES2019", 
        "lib": ["dom", "ESNext"] 
      } 
    }
