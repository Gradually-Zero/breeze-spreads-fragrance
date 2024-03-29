// forked picocolors, nextjs

const { env, stdout } = globalThis?.process ?? {};

const enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout?.isTTY && !env.CI && env.TERM !== 'dumb'));

function formatter(open, close, replace = open) {
  return (input) => {
    const string = '' + input;
    const index = string.indexOf(close, open.length);
    return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
  };
}

// 解决嵌套使用时样式错乱问题
const replaceClose = (str, close, replace, index) => {
  const start = str.substring(0, index) + replace;
  const end = str.substring(index + close.length);
  const nextIndex = end.indexOf(close);
  return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};

export const reset = enabled ? (s) => `\x1b[0m${s}\x1b[0m` : String;
export const bold = enabled ? formatter('\x1b[1m', '\x1b[22m', '\x1b[22m\x1b[1m') : String;
export const dim = enabled ? formatter('\x1b[2m', '\x1b[22m', '\x1b[22m\x1b[2m') : String;
export const italic = enabled ? formatter('\x1b[3m', '\x1b[23m') : String;
export const underline = enabled ? formatter('\x1b[4m', '\x1b[24m') : String;
export const inverse = enabled ? formatter('\x1b[7m', '\x1b[27m') : String;
export const hidden = enabled ? formatter('\x1b[8m', '\x1b[28m') : String;
export const strikethrough = enabled ? formatter('\x1b[9m', '\x1b[29m') : String;
export const black = enabled ? formatter('\x1b[30m', '\x1b[39m') : String;
export const red = enabled ? formatter('\x1b[31m', '\x1b[39m') : String;
export const green = enabled ? formatter('\x1b[32m', '\x1b[39m') : String;
export const yellow = enabled ? formatter('\x1b[33m', '\x1b[39m') : String;
export const blue = enabled ? formatter('\x1b[34m', '\x1b[39m') : String;
export const magenta = enabled ? formatter('\x1b[35m', '\x1b[39m') : String;
export const cyan = enabled ? formatter('\x1b[36m', '\x1b[39m') : String;
export const white = enabled ? formatter('\x1b[37m', '\x1b[39m') : String;
export const gray = enabled ? formatter('\x1b[90m', '\x1b[39m') : String;
export const bgBlack = enabled ? formatter('\x1b[40m', '\x1b[49m') : String;
export const bgRed = enabled ? formatter('\x1b[41m', '\x1b[49m') : String;
export const bgGreen = enabled ? formatter('\x1b[42m', '\x1b[49m') : String;
export const bgYellow = enabled ? formatter('\x1b[43m', '\x1b[49m') : String;
export const bgBlue = enabled ? formatter('\x1b[44m', '\x1b[49m') : String;
export const bgMagenta = enabled ? formatter('\x1b[45m', '\x1b[49m') : String;
export const bgCyan = enabled ? formatter('\x1b[46m', '\x1b[49m') : String;
export const bgWhite = enabled ? formatter('\x1b[47m', '\x1b[49m') : String;

export const purple = enabled ? formatter('\x1b[38;2;173;127;168m', '\x1b[39m') : String;
