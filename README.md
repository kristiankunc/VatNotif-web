# VatNotif

A website for tracking VATSIM controller callsigns written in SvelteKit

## Development setup
1) After cloning, edit the [.env.example](https://github.com/kristiankunc/VatNotif-web/blob/main/.env.example) with your config. Information on VATSIM OAuth can be found @ https://vatsim.dev/api/connect-api/vatsim-connect-api as the site uses VATSIM for login and does not implement any username/password auth.

2) Install dependcies with npm
```
$ npm i
```

3) Generate Prisma client API
```
$ npx prisma generate
```

4) Run the project
```
$ npm run dev
```
You can also build the project and run it with Node, this is ideal for any production setup
```
$ npm run build && node build/
```

## License
This project is released under the MIT License - see the [LICENSE](https://github.com/kristiankunc/VatNotif-api/blob/main/LICENSE). file for details.

## Contributing
Contributions are welcome, feel free to fork the project and submit a PR.
This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/), by participating you are expected to follow it.

Thank you for your contributions!
