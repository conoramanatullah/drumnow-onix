import {IOnixLogger, OnixLoggerProps} from './types';

export class OnixLogger implements IOnixLogger {
  debug;

  constructor({debug = false}: OnixLoggerProps) {
    this.debug = debug;
  }

  log(message: string) {
    if (this.debug) {
      console.log(`ONIX::LOG::${message}`);
    }
  }
}

export default OnixLogger;
