import bikestyles from '../styles/choosebike.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className={bikestyles.bikegrid}>
        <div className={bikestyles.bike}>
          <div className={bikestyles.chronos}>
            <a href="/data/chronos" className={bikestyles.bikelabel}>CHRONOS</a>
          </div>
        </div>
        <div className={bikestyles.bike}>
          <div className={bikestyles.atlas}>
            <a href="/data/atlas" className={bikestyles.bikelabel}>ATLAS</a>
          </div>
        </div>
        <div className={bikestyles.bike}>
          <div className={bikestyles.fbs}>
            <a href="/data/fbs" className={bikestyles.bikelabel}>FBS</a>
          </div>
        </div>
      </div>
    </>
  );
}