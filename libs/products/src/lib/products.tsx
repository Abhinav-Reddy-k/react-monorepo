// import { Orders } from '@react-monorepo/orders';
import styles from './products.module.scss';

export function Products() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Products!</h1>
      {/* enforced deps boundary */}
      {/* <Orders /> */}
    </div>
  );
}

export default Products;
