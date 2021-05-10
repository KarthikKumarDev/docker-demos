const redis = require("redis");
const { redisHost, redisPort } = require("./keys");

const redisClient = redis.createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000,
});

const subscription = redisClient.duplicate();

const generateFibonacci = (index) => {
  if (index < 2) {
    return 1;
  }

  return generateFibonacci(index - 1) + generateFibonacci(index - 2);
};

subscription.on("message", (channel, message) => {
  redisClient.hset("values", message, generateFibonacci(parseInt(message)));
});

subscription.subscribe("insert");
