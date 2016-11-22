# wake-up
Wake on lan server, using nodejs

## Usage 

Need to create some config files

Back-end `/config.json`

```json
{
  "server": {
    "port": ""
  },
  "auth": {
    "username": "",
    "password": ""
  }
}
```

Front-end `/public/config.json`

```json
{
  "location": "https://mydomain.com/wake"
}
```

To run the server 

```
npm install
npm start
```

