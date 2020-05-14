export const environment = {
  production: true,

  /**
   * URLs for API rest calls
   */
  api: {
    envServerUrl: '/fpcare/api/env', // spa-env service - splash page information
    loggingURL: '/fpcare/api/logging' // splunk forwarder service
  },

  /**
   * assist with development - turned off for production
   */
  developmentMode: {
    enabled: false,

    /**
     * Bypass page guards
     */
    bypassGuards: false,

    /**
     * Simulate back-end
     */
    mockBackend: {
      enabled: true,

      // YYYY-MM-DD h:mm:ss A
      maintModeStart: '',
      maintModeEnd: '',
      maintModeMessage: 'Fair PharmaCare is unavaible.'
    }
  }
};
