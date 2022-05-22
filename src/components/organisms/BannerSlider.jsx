import React, { useState, useEffect } from 'react'
import Banner from "components/molecules/Banner";
import GetAnimeRecomendation from 'services/animeRecomendation'
import BannerSkeleton from 'skeleton/BannerSkeleton';
import RefetchingCard from 'components/molecules/RefetchingCard';
import { NetworkStatus } from '@apollo/client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { styling } from 'constants'
import CustomArrow from 'components/atoms/CustomArrow';

export default function BannerSlider(props) {
  const { loading, error, data, refetch, networkStatus } = GetAnimeRecomendation({perPage: 5});
  const [arrow, setArrow] = useState(false);

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: arrow,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />
  };

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia(`(min-width: ${styling.BREAK_POINTS[2]}px)`).matches) {
        setArrow(true)
      }
    }
    checkDevice();
  }, []);

  return (
    <div>
      {loading || networkStatus === NetworkStatus.refetch ? (
        <BannerSkeleton />
      ) : error ? (
        <RefetchingCard  refetch={() => refetch()} />
      ) : (
        <Slider {...settings}>
          { data.Page.recommendations.map((data, index)=> (
          <Link to={`/detail/${data.media.id}`}  key={index}>
            <Banner dataAnime={data} />
          </Link>
          ))}
          </Slider>
      )}
    </div>
  )
}
