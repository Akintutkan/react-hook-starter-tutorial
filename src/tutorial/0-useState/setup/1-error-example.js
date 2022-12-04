import {Fragment} from 'react';

const ErrorExample = () => {
  let title = "Rastgele başlık"
  const handleClick = () => {
     title = "Selam millet"
     console.log(title)
  }
  return <Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>
      başlığı Değiştir
    </button>
  </Fragment>
};

export default ErrorExample;
