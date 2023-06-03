import { Form } from '@/features';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Investment Calculator</h1>
			<Form />
		</main>
	);
}
