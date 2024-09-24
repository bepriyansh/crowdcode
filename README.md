## **CrowdCode** - Real-Time Code Editor with AI-Powered Suggestions

### **Project Description**
CrowdCode is a collaborative real-time code editor that allows multiple users to edit code simultaneously while providing intelligent AI-powered code suggestions. This editor is built for fast, real-time collaboration, enabling developers to write, review, and run code together in a shared environment. The project integrates a pre-built AI-powered code suggestion engine from Codeium, which enhances the developer experience with smart suggestions.

### **Features**
- **Real-Time Collaboration:** Multiple users can edit the code simultaneously with seamless synchronization.
- **AI-Powered Code Suggestions:** Integrated Codeium editor offers smart code completions and suggestions.
- **Persistent WebSocket Connections:** Real-time sync is achieved using Socket.io, ensuring smooth updates across users.
- **Run Code within Editor:** Users can write and run code directly in the editor with live outputs using the `compileRun` package.

---

### **Table of Contents**
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Future Improvements](#future-improvements)

---

### **Technologies Used**
- **Frontend:** Next.js, Codeium Editor
- **Backend:** Node.js, Socket.io, Express.js
- **Styling:** ShadcnUI
- **Real-Time Communication:** Socket.io
- **Code Execution:** compileRun

---

### **Installation**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/priyaaanshh/crowdcode.git
   cd crowdcode
   ```

2. **Install Dependencies and Start the Development Servers:**

   - **For the Client (Frontend):**
     ```bash
     cd client
     npm install
     npm run dev
     ```

   - **For the Server (Backend):**
     
     Open a new terminal in the same `crowdcode` directory:
     ```bash
     cd server
     npm install
     node index.js
     ```

3. **Open in Browser:**

   Once both servers are running, open `http://localhost:3000` in your browser to use the editor.

---

### **Usage**

1. **Starting a New Session:**
   Open the application in your browser, and you’ll automatically join a session where you can start typing your code. If someone else joins the session, they will see your updates in real-time.

2. **AI-Powered Code Suggestions:**
   The editor uses the built-in Codeium engine to offer code suggestions. As you type, you’ll receive intelligent completions that help you write code more efficiently.

3. **Running Code:**
   Click the "Run" button to execute the code in real-time. The output will appear in the designated output section.

---

### **Future Improvements**

1. **Conflict Resolution:**
   - Currently, the project sends the full text during real-time updates. To improve this, we plan to implement conflict resolution using **Operational Transformation (OT)** or **Conflict-Free Replicated Data Types (CRDT)** for smoother collaboration when multiple users are editing the same line of code.

2. **Performance Optimization:**
   - Introduce **diff-based updates** to reduce the amount of data being sent over the WebSocket, especially for large files.

3. **Enhanced Scalability:**
   - Optimize WebSocket connections for larger teams and more intensive use-cases, adding throttling and batching of updates to handle high traffic more efficiently.
