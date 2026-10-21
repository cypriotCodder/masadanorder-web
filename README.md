# masadanorder.com

Marketing site for Masadan, a QR table-ordering app for restaurants and cafés in North Cyprus.
The spec is in [`docs/landing-brief.md`](docs/landing-brief.md).

The app itself (venues at `*.masadanorder.com`) lives in a separate repo, `Restaurant_app`.

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Dev server at `localhost:4321`          |
| `npm run build`   | Build the static site to `./dist/`      |
| `npm run preview` | Preview the build locally               |

## Routes

- `/` — Turkish (default)
- `/en/` — English

## Deploy

Cloudflare Pages: build command `npm run build`, output directory `dist`.
