# Dynamic Dashboard

A fully functional, dynamic dashboard built with Next.js, Tailwind CSS, and shadcn/ui. Features include authentication, API data fetching & filtering, reusable components, and a responsive layout.

## Features

- Authentication (Login/Logout)
- API Data Fetching & Filtering
- Reusable Components
- Responsive Layout with Tailwind CSS

## Prerequisites

Ensure you have the following installed:

- Node.js (>= 18)
- npm or yarn
- Git

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dynamic-dashboard.git
cd dynamic-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables: Create a `.env.local` file in the root directory and add the necessary environment variables:

```
NEXT_PUBLIC_API_URL=<YOUR_API_URL>
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<YOUR_SECRET>
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```
├── public
├── src
│   ├── app
│   │   ├── dashboard
│   │   │   └── page.js
│   │   ├── login
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components
│   │   ├── items
│   │   │   ├── apifetch.js
│   │   │   └── menubarlayout.js
│   │   └── ui
│   │       ├── button.jsx
│   │       ├── input.jsx
│   │       └── menubar.jsx
│   └── lib
│       └── utils.js
```

## Build and Deploy

1. Build the project:

```bash
npm run build
# or
yarn build
```

2. Start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

You can deploy the app easily using Vercel:

```bash
vercel
```

## Testing

Run tests with:

```bash
npm test
# or
yarn test
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License.

