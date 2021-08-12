# Welcome to House Hopping
*by Alexandra Bouillon, Sylvia Onwuana, Ethan Kaseff, & Jonathan Salguero*
#### [House Hopping](https://house-hopping.herokuapp.com/) is a [Couchsurfing](https://www.couchsurfing.com/) clone, that allows users to book a place to stay in certain cities or as a host, share your home/room to travelers.

![Screen Shot 2021-08-11 at 11 23 40 PM](https://user-images.githubusercontent.com/69067446/129133719-530bc690-b8a5-4d6b-b9c3-dc594dc93504.png)


### Built With
The project was built utilizing the following technologies:
* [Python](https://www.python.org/)
* [React](https://reactjs.org/)
* [Docker](https://www.docker.com/)
* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [Tailwind](https://tailwindcss.com/)
#

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/ethan-kaseff/house_hopping.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a `.env` file based on the `env.example` example with the proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file
5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, cd into the `react-app` directory and run:
   ```
   npm start
   ```
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***


## Contact

* Alexandra Bouillon - [LinkedIn](https://www.linkedin.com/in/alexandrabouillon/) - 
* Sylvia Onwuana - [LinkedIn](https://www.linkedin.com/in/sylvia-o/) - sonwuana1@gmail.com
* Ethan Kaseff - [LinkedIn](https://www.linkedin.com/in/ethankaseff/) - 
* Jonathan Salguero - [LinkedIn](https://www.linkedin.com/in/josalgue/) - 

Project Link: [https://github.com/ethan-kaseff/house_hopping](https://github.com/ethan-kaseff/house_hopping)

## Acknowledgements
* [Font Awesome](https://fontawesome.com)
