import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 gap-10 ">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFont tracking-tight text-neutral-100 dark:text-neutral-300 font-semibc text-center">
        AceDot Build Tools &nbsp;
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800  text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className=" text-lg text-center text-neutral-400 max-w-4xl font-customFontKr lg:text-lg sm:text-xs mb:text-sm  ">
        대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한
        중요정책을 국민투표에 붙일 수 있다. 제3항의 승인을 얻지 못한 때에는 그
        처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정
        또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을
        회복한다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는
        법률로 정하되, 사법절차가 준용되어야 한다. 모든 국민은 직업선택의 자유를
        가진다.
      </p>
      <div className="flex gap-4">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={`'font-customFontEn border border-r-neutral-500 py-1 px-4 raunded-md'  ${
              idx === 1 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>

      <div className="flex mt-10 gap-4 justify-center  flex-col md:flex-row items-center ">
        <video autoPlay muted loop className="vid w-1/3 md:w-full">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid w-1/3 md:w-full">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
