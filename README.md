# Word of God Almighty

Premium marketing site for **Word of God Almighty** — Christ-centered digital experiences, projects, and mission.

**Domain:** [wordofgodalmighty.store](https://wordofgodalmighty.store)

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion
- next-themes (dark/light)
- Formspree (contact form)

## Getting started

1. Install [Node.js](https://nodejs.org/) (LTS recommended) and ensure `node` and `npm` are on your PATH.
2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and set your Formspree form ID from [formspree.io](https://formspree.io).

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### If `npm install` fails with certificate errors

On some Windows setups you may see `UNABLE_TO_VERIFY_LEAF_SIGNATURE`. Use Node’s system certificate store, then install:

**PowerShell:**
```powershell
$env:NODE_OPTIONS="--use-system-ca"
npm install
```

**Command Prompt:**
```cmd
set NODE_OPTIONS=--use-system-ca
npm install
```

To make this permanent, add a user environment variable `NODE_OPTIONS` = `--use-system-ca` in Windows Settings → System → About → Advanced system settings → Environment Variables.

## Production build

```bash
npm run build
npm start
```

## Customize content

Edit [`src/lib/content.ts`](src/lib/content.ts) for copy, team, projects, Etsy/Play Store links, and contact details.

Replace placeholder visuals in `public/images/` when ready.

## Deploy

Deploy to [Vercel](https://vercel.com) and connect your domain **wordofgodalmighty.store** (add both `wordofgodalmighty.store` and `www.wordofgodalmighty.store`; www redirects to the apex domain).
