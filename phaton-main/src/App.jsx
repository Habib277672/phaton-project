import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { gethomepageData } from "./services/DataService";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import CategoriesWrapper from "./components/CategoriesWrapper.jsx";
import AboutPage from "./components/AboutPage.jsx";
import DescriptionPage from "./components/DescriptionPage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import CheckoutCart from "./components/CheckoutCart.jsx";
import CheckoutCartInfo from "./components/CheckoutCartInfo.jsx";
import CheckoutPayment from "./components/CheckoutPayment.jsx";
import CheckoutConfirmation from "./components/CheckoutConfirmation.jsx";
import SignUpPage from "./components/SignUpPage.jsx";
import SignInPage from "./components/SignInPage.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Notifications from "./components/Notifications.jsx";
import Faq from "./components/Faq.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ResetPassword from "./components/Resetpassword.jsx";
import VerifyEmail from "./components/VerifyEmail.jsx";
import VerifyComplete from "./components/VerifyComplete.jsx";
import AdminLogin from "./components/AdminLogin.jsx";

import Dashboard from "./components/Dashboard.jsx";
import DashboardOrder from "./components/DashboardOrder.jsx";
import DashboardProduct from "./components/DashboardProduct.jsx";
import AnalyticsDashboard from "./components/AnalyticsDashboard.jsx";
import SettingsPage from "./components/SettingsPage.jsx";

function CartLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default function App() {
  const data = gethomepageData();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="min-h-screen bg-white">
                <Hero />
                <CategoriesWrapper />
              </div>
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Header />
              <AboutPage />
            </>
          }
        />

        <Route
          path="/products"
          element={
            <>
              <Header />
              <ProductPage />
            </>
          }
        />
        <Route path="/products/:id" element={<DescriptionPage />} />

        <Route path="/cart" element={<CartLayout />}>
          <Route path="checkout" element={<CheckoutCart />} />
          <Route path="checkout-cartinfo" element={<CheckoutCartInfo />} />
          <Route path="checkout-payment" element={<CheckoutPayment />} />
          <Route
            path="checkout-confirmation"
            element={<CheckoutConfirmation />}
          />
        </Route>

        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactPage />
            </>
          }
        />

        <Route
          path="/faq"
          element={
            <>
              <Header />
              <Faq />
            </>
          }
        />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/verifycomplete" element={<VerifyComplete />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="order" element={<DashboardOrder />} />
          <Route path="product" element={<DashboardProduct />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
