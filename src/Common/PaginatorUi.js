import *as React from 'react'
import usePagination from '@mui/material/usePagination';
import Button from '@mui/material/Button';
import * as axios from "axios"


let PaginatorUi = (props) => {

  let onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber);
    axios.get(`https://api.pokemontcg.io/v2/cards?page=${pageNumber}&count=${props.pageSize}`).then(card => {
        props.setPokemons(card.data.data)
    });
  }

  let pagesCount = Math.ceil(props.totalCount / props.pageSize); //вычисляем и рисуем все страницы
  const { items } = usePagination({
    count: pagesCount,
  });

  return ( //поведение пагинатора
    <div>
      {items.map(({ page, type, selected, ...item }, index) => {
        let children = null;
        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
          children = '…';
        } else if (type === 'page') {
          children = (
            <div
              type="button"
              style={{
                fontWeight: selected ? 'bold' : undefined,
              }}
              {...item}
            >
              {page}
            </div>
          );
        } else {
          children = (
            <div type="button" {...item}>
              {type}
            </div>
          );
        }
        return <Button variant="contained" key={index} onClick={(e) => { onPageChanged(page); }}>{children}</Button>;
      })}
    </div>
  );
}

export default PaginatorUi;