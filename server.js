import 'dotenv/config'
import express from "express";
import cors from "cors";
const app = express();


// app.use(cors())

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the developer go broke?",
      content: "Because he used up all his cache.",
    },
    {
      id: 2,
      title: "Why do JavaScript developers wear glasses?",
      content: "Because they don’t C#.",
    },
    {
      id: 3,
      title: "How do you comfort a JavaScript bug?",
      content: "You console it.",
    },
    {
      id: 4,
      title: "Why did the function break up with the loop?",
      content: "Because it had too many issues to resolve.",
    },
    {
      id: 5,
      title: "What's a programmer's favorite place to hang out?",
      content: "The Foo Bar.",
    },
  ];
  res.send(jokes);
});

// const whitelist = ['http://localhost:5173']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.get("/jokes",cors(corsOptions), (req, res) => {
//   const jokes = [
//     {
//       id: 1,
//       title: "Why did the developer go broke?",
//       content: "Because he used up all his cache.",
//     },
//     {
//       id: 2,
//       title: "Why do JavaScript developers wear glasses?",
//       content: "Because they don’t C#.",
//     },
//     {
//       id: 3,
//       title: "How do you comfort a JavaScript bug?",
//       content: "You console it.",
//     },
//     {
//       id: 4,
//       title: "Why did the function break up with the loop?",
//       content: "Because it had too many issues to resolve.",
//     },
//     {
//       id: 5,
//       title: "What's a programmer's favorite place to hang out?",
//       content: "The Foo Bar.",
//     },
//   ];
//   res.send(jokes);
// });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
