export interface IOnixLogger {
  /**
   * Debug mode
   */
  debug: boolean;

  /**
   * Log a UI Library message
   */
  log: (message: string) => void;
}

export interface OnixLoggerProps {
  /**
   * Set debug mode
   */
  debug?: boolean;
}
