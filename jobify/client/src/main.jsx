import React from 'react'; // React kütüphanesini import et.
import ReactDOM from 'react-dom/client'; // ReactDOM'un client sürümünü import et.
import App from './App.jsx'; // App bileşenini import et.
import './index.css'; // index.css dosyasını import et.
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'

// Belirtilen DOM elemanına (burada 'root') bir React uygulaması bağla.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer position='top-center'/>
  </React.StrictMode>,
  // React.StrictMode içinde App bileşenini render et.
  // StrictMode, uygulamanın daha sağlıklı geliştirilmesine yardımcı olur.
  // Potansiyel problemleri önceden saptayarak uyarılar verir.
  // Örneğin, yanlış kullanılan yaşam döngüsü metodları veya eski API'lar gibi.
  // Ayrıca, yan etkilerin iki kez tetiklenmesine neden olarak, yan etkileri test etmeyi kolaylaştırır.
)
