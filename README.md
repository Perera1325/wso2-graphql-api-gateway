# WSO2 GraphQL API Gateway (StudentGraphQL)

This project demonstrates how to expose and manage a GraphQL API using **WSO2 API Manager** as an **API Gateway**.

A Node.js GraphQL backend (Apollo Server) is deployed locally and published through WSO2 APIM. The API is then consumed via Developer Portal using OAuth2 access tokens.

---

## ✅ Features
- GraphQL backend built using **Node.js + Apollo Server**
- API published and managed using **WSO2 API Manager 4.6.0**
- OAuth2 security via WSO2 Developer Portal
- TryOut console tested successfully (GraphiQL)
- API export included for reuse

---

## 🏗 Architecture
Client (DevPortal GraphiQL)
        |
        v
WSO2 API Gateway
        |
        v
GraphQL Backend (Apollo Server @ localhost:4000)

---

## 🧰 Tech Stack
- Node.js
- Apollo Server + GraphQL
- WSO2 API Manager 4.6.0
- Git + GitHub

---

## 🚀 How to Run

### 1) Start GraphQL Backend
Open Git Bash:

```bash
cd ~/wso2-graphql-api-gateway/backend
npm install
node index.js


Backend runs at:
http://localhost:4000/


2) Start WSO2 API Manager

Open another terminal:

cd ~/wso2/wso2am-4.6.0.8/wso2am-4.6.0/bin
./api-manager.bat


Portals:

Publisher: https://localhost:9443/publisher

DevPortal: https://localhost:9443/devportal

Login:

Username: admin

Password: admin

🧪 Testing (WSO2 DevPortal TryOut)

GraphQL Query used:

query {
  students {
    id
    name
    course
  }
}


Steps:

Go to DevPortal → StudentGraphQL → TryOut → API Console

Select StudentApp

Click GET TEST KEY

Run the query

✅ Successful response returns student list.


📦 WSO2 API Export

The published API export zip is available in:

wso2-api-export/

🖼 Screenshots

Screenshots are stored in:

docs/screenshots/

👤 Author

(Vinod Perera)


Save the file (Ctrl + S).

---

## ✅ PART F — Commit and Push to GitHub
Now back in Git Bash type:

```bash
git status
git add .
git commit -m "Add README, screenshots folder, and WSO2 export"
git push





