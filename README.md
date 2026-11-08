# IssueFlow 🚀

**Track Issues. Manage Projects. Ship Better.**

IssueFlow is a full-stack project and issue tracking platform inspired by Jira and Linear. It helps development teams organize projects, report bugs, manage tasks, collaborate with team members, and track development progress through an intuitive Kanban board.

## ✨ Features

### Core Features

- **Authentication & Authorization** – Secure user registration and login using JWT and bcrypt.
- **Project Management** – Create, update, delete, and manage projects.
- **Team Collaboration** – Add team members and manage project-level roles.
- **Issue Tracking** – Create, assign, update, and resolve bugs and tasks.
- **Kanban Board** – Manage issues using drag-and-drop workflows.
- **Search & Filtering** – Search, filter, and sort issues by status, priority, assignee, and type.
- **Comments & Activity History** – Collaborate and track issue updates.
- **Dashboard & Analytics** – Monitor projects, issues, priorities, and progress.
- **File Attachments** – Upload screenshots and other issue-related files.
- **Real-Time Updates** – Live collaboration using Socket.IO.

## 🛠️ Tech Stack

### Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- React Router
- dnd-kit
- Context API
- Fetch API
- Lucide React

### Backend

- Node.js
- Express.js
- TypeScript
- REST API
- JWT Authentication
- bcrypt
- Zod
- Socket.IO
- Multer

### Database & Tools

- PostgreSQL
- Prisma ORM
- Git & GitHub
- pgAdmin 4

## 📁 Project Structure

```text
issueflow/
│
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── hooks/
│       ├── services/
│       ├── types/
│       └── utils/
│
├── server/                 # Express backend
│   ├── prisma/
│   │   └── schema.prisma
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── routes/
│       ├── services/
│       ├── validators/
│       ├── utils/
│       ├── app.ts
│       └── server.ts
│
├── .gitignore
├── README.md
└── package.json
```

## ⚙️ Installation & Setup

### Prerequisites

Make sure the following are installed:

- Node.js (LTS)
- npm
- PostgreSQL
- Git

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd issueflow
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server/` directory.

```env
PORT=5000
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/issueflow"
JWT_SECRET="your_secure_jwt_secret"
CLIENT_URL="http://localhost:5173"
```

Replace the database credentials and JWT secret with your own values.

### 4. Set up the database

Create a PostgreSQL database named `issueflow`.

Initialize Prisma and run database migrations:

```bash
cd server

npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the application

Return to the root directory:

```bash
cd ..
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000`

## 🗄️ Database Models

The application is designed around the following core entities:

| Model         | Purpose                           |
| ------------- | --------------------------------- |
| User          | User accounts and authentication  |
| Project       | Project information               |
| ProjectMember | Project membership and roles      |
| Issue         | Bugs, tasks, and feature requests |
| Comment       | Issue discussions                 |
| Label         | Issue categorization              |
| IssueLabel    | Issue-label relationships         |
| Attachment    | Issue-related files               |
| Activity      | Issue activity history            |

## 🔐 Security

- Password hashing using bcrypt.
- JWT-based authentication.
- Protected API routes.
- Role-based authorization.
- Request validation using Zod.
- Security headers using Helmet.
- Configured CORS policies.
- Environment-based configuration.

## 🎯 Project Goal

Build a scalable, maintainable, and production-oriented issue tracking platform that demonstrates practical full-stack development skills, relational database design, REST API development, authentication, authorization, and real-world team collaboration workflows.

## 👨‍💻 Author

**Sahil Kayasth**

Full Stack Developer | React.js | Node.js | TypeScript | PostgreSQL

---

*IssueFlow — Track Issues. Manage Projects. Ship Better.*
