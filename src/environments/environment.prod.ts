export const environment = {
  production: true,

  /**
   * Simulate back-end for locally development - turn for prod
   */
  mockBackend: {
    enabled: false,
    simulateMaintMode: false
  },

  /**
   * URLs for API rest calls
   */
  api: {
    envServerUrl: '/fpcare/api/env', // spa-env service - splash page information
    loggingURL: '/fpcare/api/logging' // splunk forwarder service
  }
};
