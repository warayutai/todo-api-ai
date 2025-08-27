# Simple Item API

A simple RESTful API built with **Node.js** and **Express** to manage a list of items. Data is stored in-memory (resets on server restart).

## 🚀 Quick Start

1. Clone the repo:

```bash
git clone <your-repo-url>
cd <repo-folder>

2. Install dependencies:

```bash
npm install

3. Start the server:

```bash
node server.js

Server runs on: http://localhost:3000

## 📦 API Endpoints

Get all items

```bash
GET /items

Example:

```bash
curl http://localhost:3000/items

Get item by ID

```bash
GET /items/:id

Example:

```bash
curl http://localhost:3000/items/1

Create a new item

```bash
GET /items/:id

Body Example:

```json
{
  "name": "New Item",
  "description": "Description here"
}

Example:

```bash
curl -X POST http://localhost:3000/items \
-H "Content-Type: application/json" \
-d '{"name":"New Item","description":"Description here"}'

Update an item

```bash
PUT /items/:id

Body Example:

```json
{
  "name": "Updated Name",
  "description": "Updated description"
}

Example:

```bash
curl -X PUT http://localhost:3000/items/1 \
-H "Content-Type: application/json" \
-d '{"name":"Updated Name","description":"Updated description"}'

Delete an item

```bash
DELETE /items/:id

Example:

```bash
curl -X DELETE http://localhost:3000/items/1

## ⚡ Notes
IDs are assigned automatically.
Data is not persistent; restarting the server resets it.