import pino from 'pino';
import dayjs from 'dayjs';

export default pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"Time": "${dayjs().format()}"`,
});
