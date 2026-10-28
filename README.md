# Choice Equine

Next.js 15 + Payload CMS 3 site with a Stripe-backed shop. Pages are built from CMS sections in `/admin`; products live in the Products collection and check out through Stripe Checkout.

## Local setup

```bash
docker compose up -d
cp .env.example .env.local
pnpm install
pnpm seed
pnpm seed:home
pnpm dev
```

- Fill in `PAYLOAD_SECRET`, `SEED_ADMIN_EMAIL`, and `SEED_ADMIN_PASSWORD` in `.env.local` before running `pnpm seed`.
- `pnpm seed` creates the admin user, a home page, an about page, and three sample products. It skips content when pages already exist.
- `pnpm seed:home` loads the home page content, photos, menu, and contact details. It replaces only the home page.
- Postgres runs in Docker on port 5433. Uploads go to `./media` unless `S3_BUCKET` is set.

## Deploying (Vercel)

- Storage: Neon Postgres (`DATABASE_URL`) and Vercel Blob (`BLOB_READ_WRITE_TOKEN`) are connected in the Vercel project.
- `pnpm vercel-build` runs the database migrations, loads the home page if none exists, then builds.
- After changing collections or blocks, run `pnpm payload migrate:create <name>` and commit the new file in `src/migrations`.

## Stripe

- `STRIPE_SECRET_KEY`: use a test key locally.
- `STRIPE_WEBHOOK_SECRET`: the webhook at `/api/stripe/webhook` lowers product inventory on `checkout.session.completed`. Locally: `stripe listen --forward-to localhost:3000/api/stripe/webhook`.

## Structure

- `src/payload/collections`: Pages, Products, Media, Users
- `src/payload/globals`: Navigation, Site Settings
- `src/components/RenderSections.tsx`: renders page sections
- `src/components/cart`: cart state (saved in localStorage), cart icon, add-to-cart button
- `src/app/api/checkout`: builds the Stripe Checkout session from server-side product prices
- `src/config/theme.ts`: brand colors; `pnpm generate-colors` writes `src/app/colors.css`
