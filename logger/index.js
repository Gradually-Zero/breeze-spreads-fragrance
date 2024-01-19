import { bold, bgMagenta, bgYellow, bgRed, bgBlue } from './terminal-color.js';

const prefixes = {
  info: bgMagenta(bold(' INFO ')),
  warn: bgYellow(bold(' WARN ')),
  error: bgRed(bold(' ERROR ')),
  http: bgBlue(bold(' HTTP ')),
};

const LOGGING_METHOD = {
  log: 'log',
  warn: 'warn',
  error: 'error',
};

function prefixedLog(prefixType, ...message) {
  if ((message[0] === '' || message[0] === undefined) && message.length === 1) {
    message.shift();
  }

  const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : 'log';

  const prefix = prefixes[prefixType];
  // If there's no message, don't print the prefix but a new line
  if (message.length === 0) {
    console[consoleMethod]('');
  } else {
    console[consoleMethod](' ' + prefix, ...message);
  }
}

/**
 * @param {any[]} message - A array param.
 */
export function info(...message) {
  prefixedLog('info', ...message);
}

export function warn(...message) {
  prefixedLog('warn', ...message);
}

export function error(...message) {
  prefixedLog('error', ...message);
}

export function http(...message) {
  prefixedLog('http', ...message);
}

export function log(...message) {
  console.log(' ', ...message);
}
