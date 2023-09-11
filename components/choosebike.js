import bikestyles from '../styles/choosebike.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className={bikestyles.bikegrid}>
        <div className={bikestyles.bike}>
          <div className={bikestyles.chronos}>
            <div className={bikestyles.bikelabel}>CHRONOS</div>
          </div>
        </div>
        <div className={bikestyles.bike}>
          <div className={bikestyles.atlas}>
            <div className={bikestyles.bikelabel}>ATLAS</div>
          </div>
        </div>
        <div className={bikestyles.bike}>
          <div className={bikestyles.fbs}>
            <div className={bikestyles.bikelabel}>FBS</div>
          </div>
        </div>
      </div>
    </>
  );
}