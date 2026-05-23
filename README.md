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

The contact form uses Formspree (`FORMSPREE_FORM_URL` in `src/lib/content.ts`). No extra setup required unless you change the endpoint.

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

### Etsy product mockups

Etsy mockups are in `public/images/etsy/` (`product-1.png`–`product-7.png`). Update labels or paths in `src/lib/content.ts` if you swap designs.

### Purity Shield Pro screenshots

App screenshots live in `public/images/purity-shield/` (`screenshot-1.png`–`screenshot-7.png`). Play Store URL: `PLAY_STORE_URL` in `src/lib/content.ts` (`com.purityshield.pro`).

## Deploy

Deploy to [Vercel](https://vercel.com) and connect your domain **wordofgodalmighty.store** (add both `wordofgodalmighty.store` and `www.wordofgodalmighty.store`; www redirects to the apex domain).
