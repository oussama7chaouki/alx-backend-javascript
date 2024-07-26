/**
 * Contains the miscellaneous route handlers.
 * @author OUSSAMA CHAOUKI <https://github.com/oussama7chaouki>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
