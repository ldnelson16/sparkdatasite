import homestyles from '../styles/homepage.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div className={homestyles.pagebg}></div>
      <a href="https://spark.engin.umich.edu/" className={homestyles.sparklogo}></a>
      <div className={homestyles.page}>
        <div className={homestyles.homecenter}>
          <div className={homestyles.title}>
            <Link href="/data">BIKE DATA</Link>
          </div>
        </div>
      </div>
    </>
  );
}