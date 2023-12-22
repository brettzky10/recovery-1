# Kineteck Recovery Website

Introducing **Kineteck**, a place for someone to diagnose their pain, take courses for recovery and chat with professionals as they heal! This product showcases many different technologies coming together. 
Uses:
- NextJs
- Typescript
- Prisma
- Shadcn UI
- Mux - for video embedding
- Pinecone - for vector database
- Socket.io - for video and audio chat
- many more...

[![Video](https://img.youtube.com/vi/egzwL6vSG2U/maxresdefault.jpg)](https://www.youtube.com/watch?v=egzwL6vSG2U)


## Running Locally

We recommend opening up two terminal windows side-by-side, one for the server and one for the extension.

1. To start: Clone the repository

        
        git clone https://github.com/brettzky10/recovery-1.git


    1. Install the necessary dependencies:

        ```bash
        npm install
        ```

    2. Create a file `.env.local` with your Project. See `.env.example` for an example. Visit the sites in the env.example and paste their respective keys.

        ```bash
        CLERK_SECRET_KEY=
        UPLOADTHING_SECRET=
        ...
        ```

    3. Setup Prisma:

        ```bash
        npx prisma generate
        ```
        ```bash
        npx prisma db push
        ```
    4. Run Server:

        ```bash
        npx prisma generate
        ```
        ```bash
        npx prisma db push
        ```

    5. That's it! You should now be able to open the website in your browser!
