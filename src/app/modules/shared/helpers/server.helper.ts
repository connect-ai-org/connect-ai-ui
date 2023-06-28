export const getServer = () => {
  switch (process.env['NODE_ENV']) {
    case 'development':
      return 'https://connect-ai-dev-06c138239541.herokuapp.com/api/v1';
    default:
      return 'http://localhost:300/api/v1';
  }
}