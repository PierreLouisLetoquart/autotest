This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Set up and run the backend locally
##### First, install the required packages:
- `pip install -r requirements.txt`

#### Next step :
- Make sure you've installed ``deepseek-r1:7b`` model on your local machine with ``ollama``.
- open a new cmd or terminal window, navigate to the `backend` folder.
- Run `python server.py` to start the backend server.
  It will listen on [http://127.0.0.1:5000](http://127.0.0.1:5000)
- In the root of your project create a `.env` file and add this variable 
`BACKEND_BASE_URL=http://127.0.0.1:5000`

## Set up MongoDB 
- Add the `MONGODB_URL` variable in `.env` file 
