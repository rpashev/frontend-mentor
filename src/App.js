import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdviceGenerator from "./pages/advice-generator";
import ArticlePreview from "./pages/article-preview";
import BaseApparel from "./pages/base-apparel";
import BlogrLandingPage from "./pages/blogr-landing-page";
import FaqAccordion from "./pages/faq-accordion";
import FourCardFeature from "./pages/four-card-feature";
import HomePage from "./pages/home";
import HuddleLandingPage from "./pages/huddle-landing-page";
import IntroSignup from "./pages/intro-signup";
import NftCard from "./pages/nft-card";
import OrderSummary from "./pages/order-summary";
import PingSingleColumn from "./pages/ping-single-column";
import ProfileCard from "./pages/profile-card";
import QRCode from "./pages/qr-code";
import RatingComponent from "./pages/rating-component";
import SinglePriceGrid from "./pages/single-price-grid";
import SocialProof from "./pages/social-proof-section";
import StatsPreview from "./pages/stats-preview-card";
import SunnysidePage from "./pages/sunnyside-landing-page";
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
        <Route path="/huddle-landing-page" element={<HuddleLandingPage />} />
        <Route path="/four-card-feature" element={<FourCardFeature />} />
        <Route path="/advice-generator" element={<AdviceGenerator />} />
        <Route path="/sunnyside" element={<SunnysidePage />} />
        <Route path="/blogr" element={<BlogrLandingPage />} />
        <Route path="/rating-component" element={<RatingComponent />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
