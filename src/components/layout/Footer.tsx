import React from "react";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";

type FooterProps = {
  isCartOpen?: boolean;
};

export const Footer: React.FC<FooterProps> = ({ isCartOpen = false }) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-16">
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-gray-400" />
              <span>地址：744台灣台南市新市區富中街152號</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-gray-400" />
              <span>聯絡電話：+886 988 878 200</span>
            </div>

            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-gray-400" />
              <div className="flex flex-col">
                <span>營業時間：星期一 ~ 六 11:00 – 20:00</span>
                <span>自取時間：星期三 ~ 日 10:00 – 19:00</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2024 祐呼水產. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/youho666/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.threads.net/@youho666"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <svg
                  viewBox="0 0 192 192"
                  width="20"
                  height="20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2107 139.019 87.8457C137.537 60.5382 122.616 44.905 97.5603 44.745C97.4489 44.7443 97.3376 44.7443 97.2262 44.7443C80.5156 44.7443 69.2246 51.2532 62.2299 63.1807C53.8597 77.9044 55.0325 95.2841 55.0325 95.2841C55.0325 95.2841 40.836 92.8301 40.836 106.555C40.836 120.28 51.836 121.555 51.836 121.555C51.836 121.555 49.836 136.555 64.836 134.555C79.836 132.555 89.836 121.555 89.836 121.555C89.836 121.555 95.836 136.555 110.836 134.555C125.836 132.555 141.836 121.555 141.836 106.555C141.836 91.555 141.537 88.9883 141.537 88.9883Z" />
                </svg>
              </a>
              <a
                href="https://line.me/ti/g2/1L14e_yXbtMSkatMDaOhi5ix1WobXkI5ftfRrw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
