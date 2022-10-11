import {OnixLogger} from '../OnixLogger';

interface UseLoggerProps {
  /**
   * Logger Context
   */
  context: string;

  /**
   * Logger Debug Mode
   */
  debug?: boolean;
}

export const useLogger = ({context, debug}: UseLoggerProps) => {
  const logger = new OnixLogger({debug});

  const log = (message: string) => {
    logger.log(`${context}::${message}`);
  };

  return {
    log,
  };
};
