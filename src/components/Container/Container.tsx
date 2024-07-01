import Card from '../Card/Card';
import style from './container.module.scss';

export default function Container() {
  return (
    <div className={style.container}>
      <Card />
    </div>
  );
}
