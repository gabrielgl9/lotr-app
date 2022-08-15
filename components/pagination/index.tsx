import React from 'react'
import Button from '../button'

type Pagination = {
  currentPage: number
  totalPages: number
  totalResults: number
  changePage: (nextPage: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  totalResults,
  changePage,
}: Pagination) {
  const pageNumbers: number[] = []
  const numberOfPagesBesideCurrentPage: number = 3
  const firstPage = 1

  for (
    let page = currentPage - numberOfPagesBesideCurrentPage;
    page < currentPage + numberOfPagesBesideCurrentPage;
    page++
  ) {
    if (page < 1 || page > totalPages) continue
    pageNumbers.push(page)
  }

  return (
    <div className="pagination">
      <Button
        text={'<<'}
        type="button"
        clickButton={() => changePage(firstPage)}
      />

      <Button
        text={'<'}
        type="button"
        clickButton={() => changePage(currentPage - 1)}
      />

      {!!pageNumbers &&
        pageNumbers.map((pageNumber) => (
          <React.Fragment key={pageNumber}>
            <Button
              text={pageNumber.toString()}
              type="button"
              clickButton={() => changePage(pageNumber)}
            />
          </React.Fragment>
        ))}

      <Button
        text={'>'}
        type="button"
        clickButton={() => changePage(currentPage + 1)}
      />

      <Button
        text={'>>'}
        type="button"
        clickButton={() => changePage(totalPages)}
      />

      <div className="result-infos">
        <p>Resultados: {totalResults}</p>
        <p>Páginas: {totalPages}</p>
      </div>
    </div>
  )
}
