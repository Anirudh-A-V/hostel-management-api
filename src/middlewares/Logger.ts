import winston, { createLogger } from "winston";

const format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `${info.timestamp} :: [${info.level}] - ${info.message}`)
);

const logger = createLogger({
    format,
    level: "debug",
    transports: [
        new winston.transports.Console({
            format: winston.format.printf(info => `[${info.level}] - ${info.message}`)
        }),
        new winston.transports.File({ filename: "combined.log" })
    ]
});

export default logger;