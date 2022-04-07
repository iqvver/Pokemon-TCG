import * as React from 'react'
import usePagination from '@mui/material/usePagination';
import Button from '@mui/material/Button';

// пагинатор с ипользованием MUI 
let PaginatorUi = ({ onPageChanged, pageSize, totalCount, currentPage }) => {
  // вычисляем и рисуем все страницы
  let pagesCount = Math.ceil(totalCount / pageSize); 
  let { items } = usePagination({
    count: pagesCount, // общее число страниц
    selected: currentPage // выбранная страница
  });

  return (
    //поведение пагинатора
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
                color: selected ? '#000' : undefined,
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