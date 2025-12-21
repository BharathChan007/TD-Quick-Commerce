# 🚗 TD Quick Commerce - Car Marketplace

A modern, fast, and beautiful car marketplace platform built with React and Vite. This is the customer-facing landing page where users can browse cars, filter by brand, search, and book test drives.

![TD Quick Commerce](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.3-purple)

## ✨ Features

### Customer Features
- 🔍 **Advanced Search** - Search cars by brand, model, or keywords
- 🏷️ **Brand Filters** - Filter cars by manufacturer with multi-select support
- 📍 **Location-Based** - View cars available near you
- 🚙 **Detailed Car Pages** - View specifications, features, images, and customer reviews
- 📅 **Test Drive Booking** - Book test drives with transparent pricing
- ⭐ **Customer Reviews** - Read authentic reviews from other customers
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 7.3
- **Routing**: React Router DOM 7.1
- **Styling**: Vanilla CSS with CSS Custom Properties
- **Icons**: Inline SVGs
- **Fonts**: Google Fonts (Inter)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BharathChan007/TD-Quick-Commerce.git
   cd TD-Quick-Commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
TD-Quick-Commerce/
├── public/                 # Static assets
│   └── assets/            # Images and media
├── src/
│   ├── components/        # Reusable React components
│   │   ├── SearchBar.jsx
│   │   ├── FilterPanel.jsx
│   │   └── CarCard.jsx
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   └── CarDetailPage.jsx
│   ├── data/             # Mock data and constants
│   │   └── mockData.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles and design system
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🎨 Design System

The application uses a comprehensive design system built with CSS custom properties:

- **Color Palette**: Professional blue and green theme
- **Typography**: Inter font family with multiple weights
- **Spacing**: Consistent 8px-based spacing scale
- **Shadows**: Multiple shadow levels for depth
- **Border Radius**: Consistent rounded corners
- **Transitions**: Smooth animations throughout

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔑 Key Components

### SearchBar
- Real-time search functionality
- Clear button for quick reset
- Responsive design with full-width on mobile

### FilterPanel
- Multi-select brand filters
- Mobile drawer on small screens
- Clear all filters option

### CarCard
- Image with hover effects
- Key specifications display
- Rating and reviews
- Click to view details

### CarDetailPage
- Image gallery with thumbnails
- Detailed specifications
- Feature list
- Customer reviews
- Booking section with modal

## 🧪 Testing

The application has been tested for:
- ✅ Search functionality
- ✅ Filter functionality (single and multiple)
- ✅ Navigation between pages
- ✅ Test drive booking flow
- ✅ Responsive layouts (mobile, tablet, desktop)
- ✅ Cross-browser compatibility

## 📊 Mock Data

Currently, the application uses mock data located in `src/data/mockData.js`:
- 10 car listings across various brands
- Customer reviews for each car
- Realistic pricing and specifications

## 🔮 Future Enhancements

### Phase 2 - Dealership Admin Portal
- Dashboard for dealers
- Car inventory management
- Test drive booking management
- Customer relationship management (CRM)

### Additional Features
- Backend API integration
- User authentication
- Real-time availability
- Payment gateway integration
- Advanced filtering (price range, year, features)
- Compare cars feature
- Wishlist/favorites
- Email notifications

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Bharath** - Initial work

## 🙏 Acknowledgments

- Car images from AutoCar India
- Icons created with SVG
- Font: Inter by Rasmus Andersson

## 📞 Support

For support, email techfusion@raamgroup.in

---

**Built with ❤️ using React and Vite**
