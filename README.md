# VatNotif
VatNotif is a notification service for VATSIM pilots. With this tool you can receive an alert when a selected controller position comes online.

## Usage
To use it, go on the deployment website (<https://vatnotif.kristn.co.uk/>) and log in with your VATSIM account. Then go to the dashboard and add the callsigns you want to track (eg. EGNX_GND) and also set up your notification options such as Discord webhook, more info on the notifications is on the home page.

## Development setup

### MYSQL

This project requires a MySQL database to be running. The database schema can be found in the [schema.sql](src/lib/server/database/schema.sql) file.
To apply this schema, run the following command on your MySQL server:
```bash
$ mysql -u <username> -p < schema.sql
```

### Config

After that, edit the [mysql.ts.example](src/lib/server/conf/mysql.ts.example) config file to match your MySQL server details and rename it to `mysql.ts`.
Edit the [vatsim.ts.example](src/lib/server/conf/vatsim.ts.example) file to match your VATSIM OAuth details (<https://github.com/vatsimnetwork/developer-info/wiki/Connect>) and rename it to `vatsim.ts`.

To build && run this projetc, first clone it

### Running

```bash
$ git clone git@github.com:kristiankunc/VatNotif-web.git
```

install dependencies via npm
``` bash
$ npm i
```

build & run
```bash
$ npm run build && npm start
```

alternatively, use the hot reload dev server
```bash
$ npm run dev
```

## Contributing
Thank you for considering contributing to VatNotif! Here are some guidelines to follow:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Write tests for your changes and ensure that all tests pass.
3. Submit a pull request with a clear description of your changes and why they are necessary.
4. Be responsive to any feedback or questions from the maintainers.

Please note that this project is released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms.

## Code of Conduct

Please note that this project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating, you are expected to uphold this code. Please report any unacceptable behavior to the project maintainers.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
