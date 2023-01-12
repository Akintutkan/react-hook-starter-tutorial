import {Fragment} from 'react';

const ErrorExample = () => { // Butona tıklanıldığında geri dönüş oluşturmak istiyoruz
  let title = "Rastgele başlık" // ekranda olacak bir başlık oluşturuldu
  const handleClick = () => { // bu fonksiyona değişmesi istenen başlık atandı
     title = "Selam millet"
     console.log(title) // değer burada değişir ama render etmez bu yüzden //* UseState Kullanmalıyız
  }
  return <Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}> {/* Butona Tıkladığımızda handleClick çalışsın */}
      başlığı Değiştir
    </button>
  </Fragment>
};

export default ErrorExample;
