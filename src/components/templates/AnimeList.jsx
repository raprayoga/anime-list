/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react'
import { styling } from 'constants'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useParams } from 'react-router-dom';
import AnimeCardList from "components/organisms/AnimeCardList";
import Button from 'components/atoms/Button';

export default function AnimeList() {
  let { id } = useParams();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(1);

  const loadMore = () => {
    const newPage = page + 1
    setPage(newPage)
  }

  const containerStyle = css`
    padding: 0 5px;
    margin: auto;
    max-width: 960px;
    padding: 10px
    ${styling.MQMAX[4]} {
      max-width: 1280px;
    }
    ${styling.MQMIN[4]} {
      max-width: 1280px;
    }
  `

  const breadCrumbStyle = css`
    color: ${styling.FONTCOLOR.SECONDARY};
    margin-left: 5px;
  `

  return (
    <div css={containerStyle}>
      <h6 css={breadCrumbStyle}>Category <FontAwesomeIcon icon={faChevronRight} /> {id}</h6>
      <AnimeCardList 
        page={page} 
        category={id}
        checkLoading={(event) => setLoading(event)}
      />
      { !loading && 
        <Button
          text={'Load More'}
          onClick={() => loadMore()}
        />
      }
    </div>
  )
}
