// note: services are just classes
export class LoggingService {
  logtoConsole = (status: String) => {
    console.log(status)
  }
}
// gotcha: services are used via the dependecy injector
