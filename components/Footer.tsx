export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">CityPulse NYC</h3>
            <p className="text-gray-400 text-sm">
              AI-powered discovery for fashion, landmarks & culture
            </p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:rogersentongo@gmail.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
          <p>© 2025 Contrivance Inc. All rights reserved.</p>
          <p className="mt-2">Built with ❤️ in NYC</p>
        </div>
      </div>
    </footer>
  );
}
