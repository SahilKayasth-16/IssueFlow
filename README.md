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

- MongoDB
- Mongoose
- Git & GitHub

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
