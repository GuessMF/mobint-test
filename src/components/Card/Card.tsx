import style from './card.module.scss';
import logo from '../../assets/img/logo.png';
export default function Card() {
  return (
    <div className={style.card}>
      <div className={style.card__header}>
        <h2 className={style.card__title}>Bonus Money</h2>
        <img src={logo} alt='logo' className={style.card__logo} />
      </div>

      <div className={style.card__counter}>
        <h3>200</h3>
        <span>баллов</span>
      </div>

      <div className={style.card__content}>
        <div className={style.card__left}>
          <p>Кешбэк</p>
          <h4>1%</h4>
        </div>
        <div className={style.card__right}>
          <p>Уровень</p>
          <h4>Базовый уровень тест</h4>
        </div>
      </div>
    </div>
  );
}
