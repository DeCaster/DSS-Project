import styled from 'styled-components';

const Wrapper = styled.aside`
  @media(min-width:992px){
    display: none;
  }
  .sidebar-container{
    position: fixed; /* Bu, elemanın konumunu tarayıcı penceresine göre sabitler, yani sayfa kaydırıldığında hareket etmez. */
    inset: 0; /* Bu, üst, sağ, alt ve sol özelliklerini 0 olarak ayarlamak için bir kısayoldur. Etkin bir şekilde, elemanı tüm görünüm alanını kaplayacak şekilde genişletir. */
    background: rgba(0,0,0,0.7); /* Elemanın arka plan rengini ayarlar. Burada, yarı saydam siyah bir renk kullanılmıştır (rgba; kırmızı, yeşil, mavi, alfa anlamına gelir - alfa, opaklığı temsil eder). */
    display: flex; /* Bu, esnek ve verimli bir düzen yapısı tasarlamak için kullanışlı olan Flexbox düzen modunu etkinleştirir. */
    justify-content: center; /* Bu, esnek öğeleri ana eksen boyunca (çoğu durumda yatay olarak) merkezler. */
    align-items: center; /* Bu, esnek öğeleri çapraz eksen boyunca (çoğu durumda dikey olarak) merkezler. */
    z-index: -1; /* Bu, elemanın yığılma sırasını ayarlar. Negatif bir değer, onu daha yüksek z-indeksine sahip diğer elemanların arkasına yerleştirir. */
    opacity: 0; /* Bu, elemanı tamamen saydam yapar. */
    transition: var(--transition); /* Bu, elemanın belirli özelliklerine geçiş etkisi uygular. Gerçek özellikler ve süre '--transition' değişkeni ile belirlenir. */
    visibility: hidden; /* Bu, elemanı görünmez yapar, ancak sayfa düzeninde yerini korur. */
  }
  .show-sidebar{
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content{
    
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem,2rem;
    position: relative;
    display: flex;
    flex-direction: column;

  }
  .close-btn{
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links{
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
  }
  .nav-link{
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover{
    color: var(--primary-500);
  }
  .icon{
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;

  }
  .logo_1{
    margin-bottom: 50px;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    
  }
`;
export default Wrapper;
