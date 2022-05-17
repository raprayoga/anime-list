/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import AnimeCard from "components/molecules/AnimeCard";
import GetAnime from 'services/animes'
import { styling } from 'constants'
import AnimeCardSkeleton from 'skeleton/AnimeCardSkeleton';
import RefetchingCard from 'components/molecules/RefetchingCard';
import { NetworkStatus } from '@apollo/client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CustomArrow from 'components/atoms/CustomArrow';

export default function AnimeListSlider(props) {
  const { loading, error, data, refetch, networkStatus } = GetAnime({perPage: 10, genre: props.category, page: props.page, status: props.status});
  const [numberShow, setNumberShow] = useState(0);
  const [arrow, setArrow] = useState(true);
  
  const skeleton = Array(6).fill(null);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: arrow,
    slidesToShow: numberShow,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />
  };
  
  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia(`(min-width: ${styling.BREAK_POINTS[4]}px)`).matches) {
        setNumberShow(5)
      } else if (window.matchMedia(`(min-width: ${styling.BREAK_POINTS[3]}px)`).matches) {
        setNumberShow(4)
      } else if (window.matchMedia(`(min-width: ${styling.BREAK_POINTS[2]}px)`).matches) {
        setNumberShow(3)
      } else {
        setNumberShow(2)
        setArrow(false)
      }
    }
    checkDevice();
  }, []);
  
  const titleStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    & > a {
      margin-right: 15px;
      text-decoration: none;
      color: rgba(49,53,59,0.68);
    }
  `

  const wrapStyle = css`
    padding: 0 5px;
    & > a {
      text-decoration: none;
    }
  `

  return (
    <>
      {loading || networkStatus === NetworkStatus.refetch ? (
        <Slider {...settings}>
        { skeleton.map((value, index) => (
        <div key={index}>
          <AnimeCardSkeleton />
        </div>
        ))}
        </Slider>
      ) : error ? (
        <RefetchingCard  refetch={() => refetch()} />
      ) : (
        <>
          <div css={titleStyle}>
            <h2>{props.category}</h2>
            <Link to={`/category/${props.category}`}>
              Show More <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <Slider {...settings}>
          { data.Page.media.map((data, index)=> (
          <div key={index} css={wrapStyle}>
            <Link to={`/detail/${data.id}`}>
              <AnimeCard
                dataAnime={data}
                cssOverride={css`
                  ${styling.MQMAX[1]} {
                    width: 170px;
                  }
                `}
              />
            </Link>
          </div>
          ))}
          </Slider>
        </>
      )}
    </>
  )
}
