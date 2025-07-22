import { SquareClient, SquareEnvironment } from 'square';
import '../../../env.config.ts'

const client = new SquareClient({
  environment: SquareEnvironment.Sandbox,
  token: process.env.SQUARE_ACCESS_TOKEN,
});

export default client;