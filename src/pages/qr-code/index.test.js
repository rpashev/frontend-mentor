import { render, screen } from "@testing-library/react";
import QRCode from ".";

describe("QR Code Component", () => {
  it("renders a title", () => {
    render(<QRCode />);
    const titleElement = screen.getByText(/improve your front-end/i);
    expect(titleElement).toBeInTheDocument();
  });
  it("renders a paragraph", () => {
    render(<QRCode />);
    const paragraphElement = screen.getByText(/Scan the QR code to visit/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
