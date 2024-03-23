import readline from 'readline';
import { delay } from './delay';
import { clearScreen } from './clear-screen';
import { colorize } from './colorize';



const ask = (question: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let answer: string | undefined;
  return new Promise((resolve, reject) => {
    rl.question(colorize(question), (data) => {
      answer = data;
      rl.close();
    });
    rl.on("SIGINT", () => {
      reject("goodbyeeee 😊");
      rl.close();
    });
    rl.on("close", () => {
      if (typeof answer === "undefined") {
        reject("empty message");
        return;
      }
      resolve(answer);
    });
  });
}

const renderResponse = async (message: string) => {
  for (const letter of message.split("")) {
    if (letter === ".") {
      process.stdout.write(letter);
      await delay(75);
    } else if (letter === "\n") {
      await delay(5000);
      clearScreen();
    } else {
      process.stdout.write(letter);
      await delay(75);
    }
  }
}


export default async function(question: string) {
  try {
    const response = await ask(question);
    await renderResponse(response);
    console.log("");
    delay(1000);
    return;
  } catch (err) {
    throw err;
  }
}

