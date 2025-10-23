# Next.js, Tailwind, and Shadcn Template

This project is a [Next.js](https://nextjs.org) template bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It comes pre-configured with Shadcn components and Lucide icons, providing a solid foundation for building your application. You can use this template as a starting point for your project.

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Check Prerequisites
Ensure that you have the following installed on your machine:

- Node.js (version 16.8 or higher)
- npm (Node package manager, comes with Node.js)

To check if you have them installed, run the following commands:

```bash
node -v
npm -v
```

If Node.js or npm is not installed, you can download and install the latest version of Node.js from here.

### 2. Clone the Repository
Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/revelotech/next-tailwind-shadcn-template.git
```

### 3. Install Dependencies
Navigate to the project directory and install the necessary dependencies using npm:

```bash
npm install --legacy-peer-deps
```

Note that the flag `--legacy-peer-deps` is necessary in order to support Lucide icons with the newest version of React 19.0.0.

### 4. Set Up Environment Variables (Optional)
If your project requires environment variables, create a `.env.local` file in the root of the project and add the necessary keys. For example:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

**Note:** Adjust the environment variables based on your project’s requirements.

### 5. Run the Development Server
Once dependencies are installed and environment variables are set, you can start the development server with the following command:

```bash
npm run dev
```

This will start the development server, and you'll be able to view the project in your browser at `http://localhost:3000`.

### 6. Customize the Application
You can now start customizing the application by modifying the relevant files. For example, to update the main page, edit the [src/app/page.tsx](src/app/page.tsx) file.

Feel free to adjust components, styles, and content to fit your project’s needs.
