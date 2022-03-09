import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ArticlePreview from "./pages/article-preview";
import BaseApparel from "./pages/base-apparel";
import FaqAccordion from "./pages/faq-accordion";
import HomePage from "./pages/home";
import IntroSignup from "./pages/intro-signup";
import NftCard from "./pages/nft-card";
import OrderSummary from "./pages/order-summary";
import PingSingleColumn from "./pages/ping-single-column";
import ProfileCard from "./pages/profile-card";
import QRCode from "./pages/qr-code";
import SinglePriceGrid from "./pages/single-price-grid";
import SocialProof from "./pages/social-proof-section";
import StatsPreview from "./pages/stats-preview-card";
import ThreeColumnPreview from "./pages/three-column-preview-card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qr-code" element={<QRCode />} />
        <Route path="/nft-component" element={<NftCard />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/stats-preview" element={<StatsPreview />} />
        <Route path="/three-column-preview" element={<ThreeColumnPreview />} />
        <Route path="/profile-card" element={<ProfileCard />} />
        <Route path="/faq-accordion" element={<FaqAccordion />} />
        <Route path="/social-proof" element={<SocialProof />} />
        <Route path="/article-preview" element={<ArticlePreview />} />
        <Route path="/base-apparel" element={<BaseApparel />} />
        <Route path="/intro-signup" element={<IntroSignup />} />
        <Route path="/single-price-grid" element={<SinglePriceGrid />} />
        <Route path="/ping-single-column" element={<PingSingleColumn />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
