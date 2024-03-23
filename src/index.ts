import prompt from './utils/prompt';
import { clearScreen } from './utils/clear-screen';
import { collectSecret } from './utils/collect-secret';

clearScreen();

const main = async () => {
  try {
    collectSecret();
    while (true) {
      await prompt("Message ChatGPT... : ");
    }
  } catch (err) {
    console.log(err);
    console.log("");
  }
}


main();

