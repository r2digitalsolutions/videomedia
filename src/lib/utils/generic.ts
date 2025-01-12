import { platform } from '@r2digisolutions/functions';

export const genericCommand = (command: string) => {
  const isMac = platform.isMac();

  const commandSymbol = isMac ? "⌘" : "Ctrl";

  return command.replace("{command}", commandSymbol);
};
