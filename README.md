# eCommerce Dashboard MVP

A modern, responsive eCommerce Dashboard built with Next.js (App Router), TypeScript, and SASS Modules.

## 🚀 Features

- **Dashboard Overview**: Key metrics, interactive charts (Sales, Orders, Revenue), and top products.
- **Real-time Updates**: Simulated real-time sales chart using polling.
- **Inventory Management**: View stock levels with status indicators (Low Stock, Out of Stock).
- **Transactions History**: List of recent transactions with status.
- **Customer Insights**: Customer profiles with lifetime value and order history.
- **Clean Architecture**: Separation of concerns (Features, Components, Lib).
- **Responsive Design**: Mobile-first layout with collapsible sidebar.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: SASS Modules + CSS Variables
- **State/Data**: Server Components + Axios
- **Mock Backend**: JSON Server
- **Charts**: Chart.js + React Chartjs 2

## 📦 Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder.
2.  **Install dependencies**:
    ```bash
    npm install
    ```

## 🏃‍♂️ Running the Project

You need to run both the Mock API and the Next.js frontend.

1.  **Start the Mock API** (in a separate terminal):
    ```bash
    npm run mock
    ```
    Runs on `http://localhost:4000`.

2.  **Start the Development Server**:
    ```bash
    npm run dev
    ```
    Runs on `http://localhost:3000`.

## 📂 Project Structure

```
/app          # Next.js App Router pages and layouts
/components   # Reusable UI components (Presentational)
/features     # Feature-specific logic (Services, Types)
/lib          # Core utilities (API client)
/hooks        # Custom hooks (usePolling)
/mocks        # Mock data (db.json)
/styles       # Global styles and SASS variables
```

## 🎨 Customization

- **Styles**: Edit `styles/globals.css` for global variables (colors, fonts).
- **Data**: Modify `mocks/db.json` to change the initial data.
- **Charts**: Components are located in `components/charts`.

## 📝 License

MIT
