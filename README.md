# Ojasva Goyal - Portfolio

Welcome to the repository for my personal portfolio website! This project showcases my skills, experience, and projects in an interactive way.

## 🌐 Live Demo

You can view the live version of the portfolio here: [Ojasva Goyal Portfolio](https://ojasva-goyal.github.io)

---

## 📂 Project Structure

The project is built using modern web technologies and follows a modular structure for scalability and maintainability.

### Key Directories:
- **`src/`**: Contains the source code for the application.
  - **`components/`**: Reusable React components.
  - **`pages/`**: Individual pages for the portfolio (e.g., Home, About, Projects).
  - **`styles/`**: Tailwind CSS configurations and custom styles.
- **`public/`**: Static assets like images and the `_redirects` file for routing.
- **`dist/`**: The production build of the application (generated after running `npm run build`).

---

## 🛠️ Technologies Used

This portfolio is built with the following technologies:

- **[React](https://reactjs.org/)**: For building the user interface.
- **[Vite](https://vitejs.dev/)**: A fast build tool for modern web projects.
- **[TypeScript](https://www.typescriptlang.org/)**: For type safety and better developer experience.
- **[Tailwind CSS](https://tailwindcss.com/)**: For styling the application.
- **[shadcn/ui](https://shadcn.dev/)**: For prebuilt UI components.
- **[React Router](https://reactrouter.com/)**: For client-side routing.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (v22.12 or higher; CI uses Node 22)
- [npm](https://www.npmjs.com/) (v10 or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ojasva-goyal/ojasva-portfolio.git
   ```

### 2. Navigate to the project directory:

```bash
cd ojasva-portfolio
```

### 3. Install dependencies:

```bash
npm ci
```

### 4. Start the development server:

```bash
npm run dev
```

### 5. Open your browser and visit:

```
http://127.0.0.1:8080
```

---

## 🛠️ Building and Deployment

### To build the project for production:

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Deploying to GitHub Pages

The GitHub Pages workflow builds and tests pull requests with read-only
permissions. A push to `main` passes the build artifact to a separate deployment
job, which alone has write permission to publish to `gh-pages`. Configure Pages
to serve that branch. Generated `dist` files should not be committed to `main`.

Use npm and the committed `package-lock.json`; the outdated Bun lockfile is no
longer maintained. The development server listens on loopback only. Do not expose
it to an untrusted network; use a production build for hosting.

### Newsletter security and deployment

Signup continues to use Supabase; no additional email provider is required.
The browser must never receive a service-role key. Public Supabase anon keys are
intended for browser use, but database grants and RLS must enforce access.

1. Apply the migrations in `supabase/migrations` to the intended Supabase project,
   including `20261031000000_secure_newsletter.sql`. Review and back up production
   data before applying database changes. The new migration removes public reads
   and writes without deleting subscribers. Its email constraint is `NOT VALID`
   so legacy invalid records do not block deployment; it still protects new
   writes. Review legacy records before validating the constraint.
2. Deploy `supabase/functions/subscribe-newsletter` after the migration.
   Supabase provides `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to hosted Edge
   Functions. Configure these server-side only when running locally. Never put
   the service-role key in a `VITE_*` variable or commit it. Keep the normal gateway
   JWT check enabled; it is not an abuse limit because the browser key is public.
3. Deploy the frontend. Schedule the database/function updates together: the old
   function cannot insert once anonymous table writes are revoked. A failed
   deployment must not be worked around by restoring public table access.
4. Verify that `anon` and `authenticated` cannot read/write subscribers or invoke
   `subscribe_newsletter` directly, and that valid signup works through the Edge
   Function. Check the actual deployed grants as well as the repository policies.

The handler requires JSON, caps request bodies at 1,024 bytes and normalized email
addresses at 254 bytes, and returns the same success response for new and existing
addresses. The database RPC allows **100 valid signup attempts per one-hour
window across all visitors**, including duplicates, atomically across function
instances. Excess requests receive HTTP 429 and `Retry-After: 3600`. The limiter
stores one counter, not IP addresses or a growing attempt log.

The signup UI validates email format before submission and displays the function's
JSON error message for failed requests. If the response is not a recognized JSON
error, it displays the HTTP status instead of the generic Supabase SDK error.

This global cap limits writes but can be exhausted by an attacker and does not
prevent distributed compute abuse or verify email ownership. There is no email
delivery or double-opt-in flow in this repository. Existing unsubscribed records
remain unsubscribed; add a verified resubscription flow before changing that.
Subscriber addresses and database error details are not logged by the function.

The contact form still uses the separate `contact_messages` table. Its deployed
schema and policies are not represented by a migration here, so newsletter
hardening does **not** establish that contact data is protected. Before release,
verify RLS is enabled, public SELECT/UPDATE/DELETE are denied, and any allowed
INSERT has server-enforced field limits and anti-abuse controls.

### Security checks

```bash
npm run test:newsletter
npm run check:newsletter
npx tsc -b
npm run build
```

`test:newsletter` uses the Deno runner installed as a development dependency.
The entrypoint type check downloads its pinned public Supabase import; tests do
not require live Supabase access. Run `supabase/tests/newsletter.sql` with
`psql -v ON_ERROR_STOP=1` only against a disposable PostgreSQL/Supabase database
after applying both newsletter migrations. A plain PostgreSQL fixture must first
create the Supabase roles `anon`, `authenticated` and `service_role`, grant them
schema usage, and reproduce the usual public-table grants. It tests table/RPC permissions,
normalization, duplicate handling, validation and the exact rate-limit boundary,
then rolls back its test data. Do not run it against production.

---

## ✨ Features

- **Responsive Design**: Fully responsive and optimized for all devices.
- **Interactive UI**: Smooth animations and transitions for a better user experience.
- **Dynamic Content**: Easily update content like projects, skills, and experience.
- **Fast Loading**: Optimized for performance using Vite and Tailwind CSS.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.