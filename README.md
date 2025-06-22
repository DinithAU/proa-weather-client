# 🌤️ Proa Weather Client

This is the **React.js frontend** for the PROA Weather Stations project. It displays weather stations on an interactive Google Map with the ability to filter by Australian states and view station details.

---

## 🧱 Technologies Used

- **React.js** – Functional component-based UI
- **TypeScript** – Type safety and scalability
- **@react-google-maps/api** – Google Maps integration
- **Axios / Fetch** – HTTP requests to backend API
- **CSS Modules / Tailwind** – For scoped styling (optional)
- **.env** – Environment-based configuration

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DinithAU/proa-weather-client.git
cd proa-weather-client
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env` file in the root:

```env
REACT_APP_API_URL=http://localhost:3000
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

> 💡 Replace with your actual backend URL and Maps API key

---

## 🖥️ Available Scripts

### Run in Development

```bash
npm start
```

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

---

## 🗺️ Features

- Displays weather stations on a Google Map
- Markers clickable to view station info (site, name, portfolio)
- Sidebar filter by state
- Mobile-friendly map layout
- Uses live API from the backend (NestJS/TypeORM)

---